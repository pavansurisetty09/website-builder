const mongoose = require("mongoose");

const configSchema = new mongoose.Schema({
  navbar: {
    text: { type: String, default: "Navbar" },
    logo: { type: String, default: "" },
  },
  heroSection: {
    title: { type: String, default: "Hero Section" },
    image: { type: String, default: "" },
  },
  footer: {
    text: { type: String, default: "Footer" },
  },
});

module.exports = mongoose.model("Config", configSchema);
