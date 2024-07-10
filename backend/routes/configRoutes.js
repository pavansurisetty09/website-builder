const express = require("express");
const router = express.Router();
const Config = require("../models/Config");

// GET all config
router.get("/", async (req, res) => {
  try {
    const config = await Config.findOne();
    console.log("Config fetched:", config); // Add this line
    res.json(config);
  } catch (err) {
    console.error("Error fetching config:", err); // Add this line
    res.status(500).json({ message: err.message });
  }
});

// PUT update config
router.put("/:id", async (req, res) => {
  try {
    const config = await Config.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("Config updated:", config); // Add this line
    res.json(config);
  } catch (err) {
    console.error("Error updating config:", err); // Add this line
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
