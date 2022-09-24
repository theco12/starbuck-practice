import express from "express"; // express 모듈을 불러온다

// import 구문은 es6 문법입니다.
// node.js 는 es5 문법만 이해할 수 있어요! require()

const app = express(); // 서버를 여기서 만들었어요!

const PORT = 9000;

// User 의 데이터를 받아가지고, DB 에 User 의 정보를 저장할 수도 있고,(회원가입)
// User 가 입력한 값을 받아와서, 비밀번호가 맞는지 체크를 하고 (로그인) JsonWebToken 발급을 클라이언트단으로 해줄수도있어요

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
