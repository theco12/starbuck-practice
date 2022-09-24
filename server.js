const express =require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));


// const { MongoClient, ServerApiVersion } = require('mongodb');

// var db;//변수를 만들어줌 

// MongoClient.connect('mongodb+srv://ejzhrla:kreg6022@cluster0.sjbl4jl.mongodb.net/todoapp?retryWrites=true&w=majority', function(에러, client){

//     if (에러) return console.log(에러)
   
//     db = client.db('todoapp'); //todoapp 이라는 database폴더에 연결좀요!
   
//     db.collection('post').insertOne({ 이름 : 'john' , 나이 : '21'}, function(에러, 결과){
//         console.log('저장완료');
//     });

//     app.listen(8080, function(){
//         console.log('8080 port')
//     });

// });

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ejzhrla:kreg6022@cluster0.sjbl4jl.mongodb.net/todoapp?retryWrites=true&w=majority";

var db;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("todoapp").collection("post");
    app.listen(8080, function(){
        console.log('8080 port')
    });

    collection.insertOne({ 이름 : 'john' , 나이 : '21'}, function(에러, 결과){
            console.log('저장완료');
    });
  // perform actions on the collection object
  client.close();
});


app.get('/pet', function(req, res){
    res.send('반갑습니다');
});

app.get('/beauty', function(req, res){
    res.send('뷰티페이지입니다.');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html');
});

app.post('/add' , function(req, res){
    res.send('전송완료')
    console.log(req.body.title)
    console.log(req.body.date)
});