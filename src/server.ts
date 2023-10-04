import express from "express";

import * as dotenv from "dotenv";
import PatientRouter from "./routes/PatientRoutes";

dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" });

const app = express();

app.use("/api", PatientRouter);
// app.use("/api", ConsultaRouter);
// app.use("/api", AgendaRouter);
// app.use("/api", SecretariaRouter);


if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log("Fail to load environment");
}
