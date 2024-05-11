const mongoose = require("mongoose");
const contact = require("../model/contact");
const hireme = require("../model/hireme");

const contactcontroller = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contacts = { name, email, subject, message };
    const data = await contact.create(contacts);
    console.log(data);
    res.json({ message: "send message successfully" });
  } catch (error) {
    res.json({
      message: "Something error",
    });
    console.log(error);
  }
};
const hiremecontroller = async (req, res) => {
  try {
    const { name, email, college, ug, number, experience, skill } = req.body;
    const contacts = { name, email, college, ug, number, experience, skill };
    const data = await hireme.create(contacts);
    console.log(data);
    res.json({ message: "send message successfully" });
  } catch (error) {
    res.json({
      message: "Something error",
    });
    console.log(error);
  }
};
module.exports = { contactcontroller, hiremecontroller };
