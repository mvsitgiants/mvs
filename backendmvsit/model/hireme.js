const mongoose = require("mongoose");
const hiremeSchema = mongoose.Schema({
  name: String,
  email: String,
  college: String,
  ug: String,
  number: String,
  experience: String,
  skill: String,
});
const hireme = mongoose.model("Hireme", hiremeSchema);
module.exports = hireme;
