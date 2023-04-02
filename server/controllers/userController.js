const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel");

const createUser = async (req, res) => {
   try {
      let data = req.body;
      let { fname, lname, gender, profilePic, email, password, mobileNumber, age, address } = data;

      if (!fname && fname.trim() == "") return res.status(400).send({ status: false, message: "fname is required" });
      //validations


      let userDetails = await userModel.create(data);

      return res.status(201).send({ status: true, data: userDetails });

   }
   catch (err) {
      return res.status(500).send({ status: false, message: err.message });
   }

}

const getUser = async (req, res) => {
   try {
      let userId = req.params.userId;
      if (!userId) return res.status(400).send({ status: false, message: "user id is required" });
      if (!mongoose.isValidObjectId(userId)) return res.status(400).send({ status: false, message: "Invalid userId" });

      const userDetails = await userModel.findOne({ _id: userId, isDeleted: false }).select({ __v: 0 }).lean();


      const postsDetails = await userModel.find({ userId: userId, isDeleted: false });

      let userData = { ...userDetails, postsData: postsDetails };


      return res.status(400).send({ status: true, message: "userDetails", data: userData })

   }
   catch (err) {
      return res.status(500).send({ status: false, message: err.message });
   }
}

const updateUser = async (req, res) => {
   try {
      let data = req.body;
      let { fname, lname, profilePic, email, password, mobileNumber, age, address } = data;

   }
   catch (err) {
      return res.status(500).send({ status: false, message: err.message });
   }
}

const deleteUser = async (req, res) => {
   try {
      let userId = req.params.userId;
      if (!userId) return res.status(400).send({ status: false, message: "user id is required" });
      if (!mongoose.isValidObjectId(userId)) return res.status(400).send({ status: false, message: "Invalid userId" });

      let userDetails = await userModel.findOne({ _id: userId, isDeleted: false });
      if (!userDetails) return res.status(404).send({ status: false, message: "no data found" });


      await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: ture } });

      return res.status(400).send({ status: true, message: "deleted succesfully" });

   }
   catch (err) {
      return res.status(500).send({ status: false, message: err.message });
   }
}


module.exports = { createUser, getUser, updateUser, deleteUser };