require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose"); // mongoose 임포트

const PORT = process.env.PORT || 4000;
// 라우터 불러오기
const usersRouter = require("./routes/users.router");
const postsRouter = require("./routes/posts.router");

const app = express();

// 몽고DB 연결 URL
// const mongoURI = "mongodb://localhost:27017/mydatabase";
// 몽고DB Atlas 연결 URL
// 패스워드는 설정한 패스워드로 변경 (실제로는 .env 파일에 저장하여 사용하는 게 보안상 좋음)
const mongoURI = process.env.MONGO_URI;

// Mongoose를 사용하여 MongoDB에 연결
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// 정적 파일 제공 미들웨어
const path = require("path");
// 가상 경로 (/static)를 설정하여 public 폴더를 정적 파일 제공 폴더로 설정
app.use("/static", express.static(path.join(__dirname, "public")));

// 특정 엔진을 템플릿 엔진으로 사용하기 위한 설정
app.set("view engine", "hbs");
// view 파일들이 모여있는 폴더를 설정
app.set("views", path.join(__dirname, "views"));

// JSON 요청 파싱 미들웨어
// 이것을 해줘야 data를 json으로 받아 undefined가 나오지 않음
app.use(express.json());

// 라우터 설정 (baseURL 설정)
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    imageTitle: "Programming!!",
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
