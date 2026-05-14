import express from "express";
import logger from "../logging_middleware/logger.js"
import scheduleRoutes from "./routes/scheduleRoutes.js";

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api/schedule", scheduleRoutes);

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Vehicle Maintenance Scheduler Running"
    });
});

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});