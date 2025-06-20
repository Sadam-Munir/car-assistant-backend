import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chatRoute.js";
import carRoute from "./routes/carRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", chatRoute);
app.use("/api/cars", carRoute);



app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
