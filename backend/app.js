import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./Database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import {} from "../backend/routes/registrationRouter.js"

const app = express();
dotenv.config({ path: "./config/config.env" });


app.use(cors({
    origin: [process.env.FRONTEND_URL],  // Use underscore in the environment variable name
    methods: ["POST"],
    credentials: true,
})
);   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/registration', registrationRouter);
  dbConnection();
  app.use(errorMiddleware)
export default app;