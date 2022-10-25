
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const path = require("path");


let conn = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_1",
  password: "smhrd1",
  port: "3307",
  database: "campus_h_1024_1"
});


let msgarr = [];

router.get('*',(request,respond)=>{
      console.log("접속을 환영합니다 FnD 팀!!!")
      respond.sendFile(path.join(__dirname, "..", "..", "lazy-kit", "build", "index.html"));
})

// 메인 페이지
// router.get("/main", (request, response)=>{
    
//     console.log("zzz")
    
    
//     // let sql = 'select * from member'
//     // let id = ''

//     // // DB 연결 코드 작성 
//     // conn.query(sql,(err,rows)=>{

//     //  id = rows[0].id
//     //  console.log('conn 내부 id',id)

//     //  request.session.user = {
//     //   userID : id
//     // }
//     // })
//     // response.end();

    
// //   response.render("Message",{
// //     user : request.session.user,
// //     msg : msgarr
// //   });
// });

// router.post("/Join", function (request, response) {
//   const userID = request.body.email;
//   const userPW = request.body.pw;
//   const userPN = request.body.phone;
//   const userAD = request.body.address;
//   console.log("사용자가 입력한 ID : " + request.body.email);
//   console.log("사용자가 입력한 PW : " + request.body.pw);
//   console.log("사용자가 입력한 폰번호 : " + request.body.phone);
//   console.log("사용자가 입력한 주소 : " + request.body.address);
//   let sql = "insert into member2 values(?, ?, ?, ?)";
//   conn.query(sql, [userID, userPW, userPN, userAD], function (err, rows) {
//     if (!err) {
//       console.log("회원가입 완료!");
//       response.redirect("http://127.0.0.1:3000/");
//     } else {
//       console.log("회원가입 실패!" + err);
//     }
//   });
// });
// router.post("/Login", function (request, response) {
//   const userID = request.body.email;
//   const userPW = request.body.pw;
//   let sql = "select * from member2 where id=? and pw=?";
//   conn.query(sql, [userID, userPW], function (err, rows) {
//     if (rows.length > 0) {
//       request.session.user = {
//         userID: rows[0].id,
//         userPW: rows[0].pw,
//         userPN: rows[0].phone,
//         userAD: rows[0].address,
//       };
//     } else {
//       response.redirect("http://127.0.0.1:5500/1014express_DB/public/ex01F.html");
//     }});
//     sql = "select * from message where id=?";
//     conn.query(sql, [userID], function(err, rows){
//       if(rows.length>0){
//         msgarr=[];
//         for(let i=0; i<rows.length; i++){
//           msgarr.push({name : rows[i].name,
//           content : rows[i].content});
//         };
//         response.redirect("http://127.0.0.1:3000/");
//       } else{
//         console.log("메세지가 없음");
//         response.redirect("http://127.0.0.1:3000/");
//       };
//     });
// });
// router.get("/Logout", (request, response) => {
//   delete request.session.user;
//   msgarr = [];
//   //console.log(request.session.user.userID);
//   response.redirect("http://127.0.0.1:3000/");
// });
// router.post("/SendMessage", (request, response) => {
//   const sendName = request.body.name;
//   const sendMessage = request.body.message;
//   const recEmail = request.body.email;
//   const userID = request.session.user.userID;
//   let sql = "insert into message values(?, ?, ?)";
//   conn.query(sql, [sendName, sendMessage, recEmail], function (err, rows) {
//     if (!err) {
//       console.log("메세지 전송 성공!")
//     } else {
//       console.log("메세지 전송 실패!" + err);
//     }});
//     sql = "select * from message where id=?";
//     conn.query(sql, [userID], function(err, rows){
//       if(rows.length>0){
//         msgarr = [];
//         for(let i=0; i<rows.length; i++){
//           msgarr.push({name : rows[i].name,
//           content : rows[i].content})
//         };
//         response.redirect("http://127.0.0.1:3000/");
//       } else{
//         console.log("메세지가 없음");
//         response.redirect("http://127.0.0.1:3000/");
//       };
//     });
// });
// router.get("/MessageDel", (request, response) => {
//   let sql = "drop table message";
//   conn.query(sql, function (err, rows) {
//     if (!err) {
//       console.log("메세지 삭제 성공!")
//     } else {
//       console.log("메세지 삭제 실패!" + err);
//     }});
//   sql = "create table message(name varchar(100), content varchar(200), id varchar(100))";
//   conn.query(sql, function(err, rows){
//     if(!err){
//       console.log("메세지 초기화 성공!");
//     } else{
//       console.log("메세지 초기화 실패!" + err);
//     }});
//   msgarr = [];
//   response.redirect("http://127.0.0.1:3000/");
// });
// router.post("/Update", (request, response) => {
//   const userID = request.session.user.userID;
//   const userPW = request.body.pw;
//   const userPN = request.body.phone;
//   const userAD = request.body.address;
//   let cnt = ["pw", "phone", "address"];
//   let userInfo = [userPW, userPN, userAD];
//   for(let i=0; i<userInfo.length; i++){
//     if(userInfo[i]==""){
//       cnt.splice(i,1);
//     }};
//   userInfo = userInfo.filter(function(data, index){
//     return data != "";
//   });
//   cnt = cnt.filter(function(data, index){
//     return data != "";
//   });
//   for(let i=0; i<userInfo.length; i++){
//     let sql = `update member2 set ${cnt[i]} = '${userInfo[i]}' where id = '${userID}';`;
//     conn.query(sql, function (err, rows) {
//       if (!err) {
//         console.log("회원정보 수정 성공!");
//       } else {
//         console.log("회원정보 수정 실패!" + err);
//       }
//     })};
//   response.redirect("http://127.0.0.1:3000/");
// });

module.exports = router;