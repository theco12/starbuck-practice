const express =require('express');
const app = express();

app.listen(8080, function(){

    console.log('8080 port')
});

app.get('/pet', function(요청, 응답){

    응답.send('반갑습니다');

});