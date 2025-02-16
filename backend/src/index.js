import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"; 
import { app, server } from "./lib/socket.js";

import bodyParser from "body-parser";

import { connectDB } from "./lib/db.js";

dotenv.config();


const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:5173", // Allow requests from your frontend
      credentials: true, // Allow cookies and authentication headers
    })
  );

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.use(express.json({ limit: "Infinity" })); 
app.use(express.urlencoded({ limit: "Infinity", extended: true }));

if(process.env.NODE_ENV==='development'){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


server.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
    connectDB();
});