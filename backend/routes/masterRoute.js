import express from "express";
import { tables } from "../controllers/master.js";
import {verifyToken} from '../middleware/auth.js';

const route = express.Router();

route.get("/tables",verifyToken, tables);

export default route;