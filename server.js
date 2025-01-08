const express = require("express"); //เรียกใช้งาน express module เพื่อสร้าง web server
require("dotenv").config(); //เรียกใช้งาน dotenv

const app = express(); //สร้าง web server
const PORT = process.env.PORT;

//test การเรียกใช้งาน web server จาก client/user
app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

//สร้างช่องทางในการติดต่อ web server นี้จาก client/user
app.listen(PORT, () => {
  console.log("Server running on port " + PORT + " ...");
});
