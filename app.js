const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyParser = require("body-parser");
const session = require("express-session");
const session_mysql_save = require("express-mysql-session");
const path = require("path");
const cors = require("cors");



// 내부 데이터 정보 --> 세션 저장만을 위한 것이므로 내부db를 쓰자.
let dbInfo = {
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  port: "3306",
  database: "nodejs_DB",    
};

let fnd_DB = new session_mysql_save(dbInfo);


// 정적인 데이터들을 이 디렉토리 밑에 있는 것들을 제공하겠다.
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "iter", "build")));

// axios로 값을 주고받을 때 꼭 필요한 미들웨어
app.use(express.json());
app.use(cors());

app.use(session({
  secret: "Fnd",
  resave: false,
  saveUninitialized: true,
  store: fnd_DB
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(3001);
