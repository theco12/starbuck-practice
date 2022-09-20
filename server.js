const express =require('express'); //설치한 라이브러리를 첨부해주세요.
const app = express(); //라이브러리를 사용해서 새로운 객체를 만들어주세요.

//8000 port로 서버를 열어주세요
app.listen(8080, function(){

    console.log('listening on 8080')

});

app.get('/pet', function(요청, 응담){

    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.')

});