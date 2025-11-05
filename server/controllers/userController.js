const express = require("express");
const router = express.Router();
const userServ = require("../services/userServ");
router.post("/addUser", async (req, res) => {
  try {
    console.log(req.body);
    res.json(await userServ.addUser(req.body));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" + error.message });
  }
});

module.exports = router;
