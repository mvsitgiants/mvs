const mongoose = require("mongoose");
const dbconnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ubmishra200:mvsitgiants@cluster0.hbtc85f.mongodb.net/"
    );
    console.log("Mongodb is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbconnect;
