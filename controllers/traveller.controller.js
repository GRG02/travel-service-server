//ไฟล์ที่เขียนควบคุมการทำงานต่างๆกับ table ใน db
//เช่น การเพิ่ม (insert/create) การแก้ไข (update)
//การลบ (delete) การค้นหา,ตรวจสอบ,ดึง,ดู (select/send)

const Traveller = require("../models/traveller.model.js");

//ฟังก์ชันเพิ่มเติมข้อมูลลงในตาราง traveller_tb
exports.createTraveller = async (req, res) => {
  try {
    const result = await Traveller.create(req.body);
    res.status(201).json({
      message: "Traveller created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//ฟังก์ชันตรวจสอบการเข้าใช้งานของผู้ใช้กับตาราง traveller_tb
exports.checkLoginTraveller = async (req, res) => {
  try {
    const result = await Traveller.findOne({
      where: {
        travellerEmail: req.params.travellerEmail,
        travellerPassword: req.params.travellerPassword,
      },
    });
    if (result) {
      res.status(200).json({
        message: "Traveller updated successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        message: "Traveller login failed",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//ฟังก์ชันแก้ไขข้อมูลของ user ในตาราง traveller_tb
exports.editTraveller = async (req, res) => {
  try {
    const result = await Traveller.update(req.body, {
      where: {
        travellerId: req.params.travellerId,
      },
    });
    res.status(200).json({
      message: "Traveller updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
