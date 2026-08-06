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
    required: [true, "Password is required"],
    select: false 
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHSvjv8ojrzT3FnaHlahE5lrf0lmo-ki6mw&s"
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel