const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Usename name already exists"],
    required: [true, "Usename is required"]
  },
  email: {
    type: String,
    unique: [true, "Email name already exists"],
    required: [true, "Email is required"] 
  },
  password: {
    type: String,
    required: [true, "Password is required"] 
  },
  bio: String,
  profileImage: {
    type: String,
    default: "Default pic link goes here"
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel