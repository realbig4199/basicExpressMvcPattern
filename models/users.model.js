// 목업 데이터
// const Users = [
//   {
//     id: 0,
//     name: "Jack",
//   },
//   {
//     id: 1,
//     name: "John",
//   },
// ];

// module.exports = Users;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // 다른 필드를 필요에 따라 추가할 수 있습니다.
});

const User = mongoose.model("User", userSchema);

module.exports = User;
