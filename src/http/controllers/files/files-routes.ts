import { FastifyInstance } from "fastify";
import { Upload } from "./Upload";
import { Download } from "./download";

export const filesRouter = async (app: FastifyInstance) => {
  app.post("/uploads", Upload);
  app.get("/uploads:id", Download);
};
