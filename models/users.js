const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '請輸入您的姓名']
    },
    email: {
      type: String,
      required: [true, '請輸入您的 Email'],
      unique: true,
      lowercase: true,
      select: false
    },
    photo: String,
  },
  {
    versionKey: false,
  }
);
const User = mongoose.model('user', schema);

module.exports = User;