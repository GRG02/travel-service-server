//ไฟล์ที่ใช้ในการติดต่อ db
const Sequelize = require("sequelize");

//เรียกใช้งานไฟล์ .env
require("dotenv").config();

//สร้าง instance ในการติดต่อกับ database ด้วย sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);

//เชื่อมต่อกับ database
sequelize
  .sync()
  .then(() => {
    console.log("Database connecting ....");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

//export instance ออกไปเพื่อใช้งาน
module.exports = sequelize;
