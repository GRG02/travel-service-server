//ใช้ในการจัดการเส้นทางในการเรียกใช้งาน service/api
const travelCtrl = require("./../controllers/travel.controller.js");

//เรียกใช้งาน express เพื่อใช้งาน Router() ในการจัดการเส้นทางเพื่อการเรียนใช้งาน
const express = require("express");
const router = express.Router();

//ในการกำหนดเส้นทางเป็นตามหลักการของ REST API

router.post("/", travelCtrl.createTravel);

router.get("/:travellerId", travelCtrl.getAllTravel);

router.put("/:travelId", travelCtrl.editTravel);

router.delete("/:travelId", travelCtrl.deleteTravel);

//export router ออกไปเพื่อการเรียกใช้งาน
module.exports = router;
