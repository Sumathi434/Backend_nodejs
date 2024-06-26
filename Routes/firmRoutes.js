const express = require("express");
const firmController = require("../controller/firmController");
const verifyToken = require("../middleware/verifyToken")
const router = express.Router()
const path = require("path")

router.post("/add-firm",  verifyToken, firmController.addFirm)
router.delete("/:firmId", firmController.firmgetbyId)

router.get('/uploads/:imageName', (req, res)=>{
    const imageName = req.params.imageName;
    res.headersSent('Content-Type','image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName))
})


module.exports = router;