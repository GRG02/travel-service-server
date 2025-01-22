//ไฟล์ที่เขียนควบคุมการทำงานต่างๆกับ table ใน db
//เช่น การเพิ่ม (insert/create) การแก้ไข (update)
//การลบ (delete) การค้นหา,ตรวจสอบ,ดึง,ดู (select/send)

const Travel = require("../models/travel.model.js");
const multer = require("multer");
const path = require("path");

//ฟังก์ชันเพิ่มเติมข้อมูลลงในตาราง travel_tb
exports.createTravel = async (req, res) => {
  try {
    //ตัวแปรเก็บข้อมูลที่ส่งมากับข้อมูลรูปภาพที่จะเอาไปบันทึกใน Table
    let data = {
      ...req.body,
      travelImage: req.file.path.replace("images\\travel\\", ""),
    };

    const result = await Travel.create(data);
    res.status(201).json({
      message: "Travel created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//ฟังก์ชันแก้ไขข้อมูลของ user ในตาราง travel_tb
exports.editTravel = async (req, res) => {
  try {
    const result = await Travel.update(req.body, {
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//ฟังก์ชันแก้ไขข้อมูลของ user ในตาราง travel_tb
exports.deleteTravel = async (req, res) => {
  try {
    const result = await Travel.destroy({
      where: {
        travelId: req.params.travelId,
      },
    });
    res.status(200).json({
      message: "Travel delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//ฟังก์ชันดึงข้อมูลการเดินทางทั้งหมดจากตาราง travel_tb
exports.getAllTravel = async (req, res) => {
  try {
    const result = await Travel.findAll({
      where: {
        travellerId: req.params.travellerId,
      },
    });
    if (result) {
      res.status(200).json({
        message: "Travel get all successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        message: "Travel get all failed",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//ฟังก์ชันเพื่อการอัปโหลดไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/travel");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      "travel" +
        Math.floor(Math.random() * Date.now()) +
        path.extname(file.originalname)
    );
  },
});

exports.uploadTravel = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
  },
}).single("travelImage");
