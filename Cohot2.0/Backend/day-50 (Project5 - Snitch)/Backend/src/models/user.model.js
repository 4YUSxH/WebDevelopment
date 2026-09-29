import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  fullname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["buyer", "seller"],
    default: "buyer",
  },
});

userSchema.pre("save", async function () {
  if (!this.password.isModified("password")) return;

  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);

export default userModel;
