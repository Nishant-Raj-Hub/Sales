import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
const app = express();

dotenv.config();
app.use(cookieParser());
//cors
var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  Credentials: true,
}
app.use(cors(corsOptions));


const port = process.env.PORT;
app.use(bodyParser.json());
app.use('/auth', authRoute)

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  })
  .catch((err) => {
    console.log("Database connection failed");
    console.log(err);
  });




