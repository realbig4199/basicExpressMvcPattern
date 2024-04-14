// 라우터 객체 생성
const express = require("express");
const usersRouter = express.Router();

// 각 라우터에 필요한 컨트롤러 불러오기
const usersController = require("../controllers/users.controller");

// 라우터 설정
usersRouter.get("/", usersController.getUsers);
usersRouter.get("/:userId", usersController.getUser);
usersRouter.post("/", usersController.postUser);

// 모듈 내보내기
module.exports = usersRouter;
