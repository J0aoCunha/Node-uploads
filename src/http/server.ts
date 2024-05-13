import fastify from "fastify";
import { filesRouter } from "./controllers/files/files-routes";

const app = fastify();

const swagger = import("@fastify/swagger");
const swaggerUi = import("@fastify/swagger-ui");

app.register(swagger);
app.register(swaggerUi, {
  prefix: "/docs",
});

app.register(filesRouter);

app
  .listen({
    port: 3000,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Server is running on http://localhost:3000");
  });
