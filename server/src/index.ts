import express from "express";
import { toNodeHandler } from "better-auth/node";
import "dotenv/config";
import { auth } from "./lib/auth.js";

const app = express();
const PORT = process.env.PORT;

app.all("/api/auth/{*any}", toNodeHandler(auth));
// Mount body-parsing middleware after the Better Auth handler.
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello word");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log("Server is running on port 8081");
});
