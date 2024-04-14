const express = require("express");
const PORT = 4000;
// 라우터 불러오기
const usersRouter = require("./routes/users.router");
const postsRouter = require("./routes/posts.router");

const app = express();

// 정적 파일 제공 미들웨어
const path = require("path");
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
