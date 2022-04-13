import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

app.get("/api/v1/status", (req, res) => {
  return res.status(200).json({
    service: "Auth-api",
    status: "UP",
    httpStatus: 200,
  });
});

app.listen(PORT, () => {
  console.info(`Server started successfully at port ${PORT}`);
});
