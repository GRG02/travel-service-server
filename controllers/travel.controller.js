//ไฟล์ที่เขียนควบคุมการทำงานต่างๆกับ table ใน db
//เช่น การเพิ่ม (insert/create) การแก้ไข (update)
//การลบ (delete) การค้นหา,ตรวจสอบ,ดึง,ดู (select/send)

const Travel = require("../models/travel.model.js");

//ฟังก์ชันเพิ่มเติมข้อมูลลงในตาราง travel_tb
exports.createTravel = async (req, res) => {
  try {
    const result = await Travel.create(req.body);
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
