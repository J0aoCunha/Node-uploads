import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";
import { FastifyRequest } from "fastify";
import { z } from "zod";
import { r2 } from "../../../lib/cloudflare";
import { prisma } from "../../../lib/prisma";

export const Upload = async (req: FastifyRequest) => {
  const uploadBodySchema = z.object({
    name: z.string(),
    contentType: z.string().regex(/\w+\/[->.\w]+/g),
  });

  const { name, contentType } = uploadBodySchema.parse(req.body);

  const fileKey = randomUUID().concat("-").concat(name);

  const signedUrl = await getSignedUrl(
    r2,
    new PutObjectCommand({
      Bucket: "uploads",
      Key: fileKey,
      ContentType: contentType,
    }),
    { expiresIn: 600 }
  );

  const file = await prisma.file.create({
    data: {
      name,
      contentType,
      key: fileKey,
    },
  });

  return { signedUrl, fileId: file.id };
};
