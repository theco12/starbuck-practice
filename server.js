const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ejzhrla:kreg6022@cluster0.sjbl4jl.mongodb.net/todoapp?retryWrites=true&w=majority";

let db;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const dbConnection = await client.connect();

const collection = dbConnection.db("todoapp").collection("post");
app.listen(8080, function () {
  console.log("8080 port");
});

const insertThing = await collec;

tion.insertOne({ 이름: "john", 나이: "21" });
insertThing(function (에러, 결과) {
  console.log("저장완료");
});
// perform actions on the collection object
dbConnection.close();

app.get("/pet", function (req, res) {
  res.send("반갑습니다");
});

app.get("/beauty", function (req, res) {
  res.send("뷰티페이지입니다.");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

app.post("/add", function (req, res) {
  res.send("전송완료");
  console.log(req.body.title);
  console.log(req.body.date);
});
