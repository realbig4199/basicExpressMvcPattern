// 데이터 모델 불러오기
const Users = require("../models/users.model");

// 요청 처리 함수 정의
function getUsers(req, res) {
  res.send(Users);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = Users[userId];

  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
}

function postUser(req, res) {
  // 유효성 검사
  if (!req.body.name) {
    return res.status(400).json({ error: "이름을 입력해주세요." });
  }

  const newUser = {
    name: req.body.name,
    id: Users.length,
  };

  Users.push(newUser);
  res.json(newUser);
}

// 라우터 모듈에서 사용할 수 있도록 내보내기
module.exports = {
  getUsers,
  getUser,
  postUser,
};
