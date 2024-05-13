import { FastifyInstance } from "fastify";
import { Upload } from "./Upload";
import { Download } from "./download";

export const filesRouter = async (app: FastifyInstance) => {
  app.post(
    "/uploads",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            file: {
              type: "object",
              properties: {
                name: { type: "string" },
                contentType: { type: "string" },
              },
            },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              fileId: { type: "string" },
              signedUrl: {
                type: "string",
              },
            },
          },
        },
      },
    },
    Upload
  );
  app.get(
    "/uploads/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              signedUrl: {
                type: "string",
              },
            },
          },
        },
      },
    },
    Download
  );
};
