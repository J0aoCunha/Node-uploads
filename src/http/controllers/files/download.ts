import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { FastifyRequest } from "fastify";
import { z } from "zod";
import { r2 } from "../../../lib/cloudflare";
import { prisma } from "../../../lib/prisma";

export const Download = async (req: FastifyRequest) => {
  const getFileParamsSchema = z.object({
    id: z.string().cuid(),
  });

  const { id } = getFileParamsSchema.parse(req.params);

  const file = await prisma.file.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const signedUrl = await getSignedUrl(
    r2,
    new GetObjectCommand({
      Bucket: "uploads",
      Key: file.key,
    }),
    { expiresIn: 600 }
  );

  return { signedUrl };
};
