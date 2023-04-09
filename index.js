const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/ProdRoute");
// const userRouter=require("./routes/userRoute")
const connection = require("./storages/db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
// app.use("/api",userRouter)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("successfully connected to db");
  } catch (error) {
    console.log("Failed to connect");
  }
});