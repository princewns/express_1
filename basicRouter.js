const express = require("express");
const app = express();

app.get('/', function(request, response){
    response.send("router");
});

//param값으로 들고옴
//vue 라우터와 비슷한 방식
app.get('/page/:id', function(request, response){
    const id = request.params.id;
    response.send(`<h2>${id} page </h2>`);
});

//쿼리값으로 들고옴
app.get('/user', function(request, response){
    //주소에 /user?user=응애 입력해야 확인가능
    const user = request.query.user;
    response.send(`<h2>${user} page </h2>`);
});

app.get('/user/:id', function(request,response){
    const id = request.params.id;
    response.send(`<h2>User ${id} page</h2>`)
});

app.get("/board", function (request,response) {
    const id = request.query.id;
    response.send(`<h2> post ${id} board</h2>`);
});

//post : 값을 전달할때 사용 > body (bodyparser)
app.post("/user", function (request, response) {
    console.log("post에 접근했습니다.");
    response.send("post 하였습니다.");
});

app.put('/user', function(request, response){
    console.log('put으로 접근했습니다.');
    response.send('put 하였습니다.');
});

app.delete('/user', function(request,response){
    console.log('delete으로 접근했습니다.');
    response.send('delete 하였습니다.');
});

app.listen(8080, () => {
    console.log("Server Running at http://127.0.0.1:8080");
})