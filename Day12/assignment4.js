const express = require('express');
const app = express();

app.use(express.static("cp")) ;//you are telling express framework


app.get("/addItem",(req,resp)=>{
        resp.send("add item needs to be done");

});

app.get("/updateItem",(req,resp)=>{
    resp.send("update item needs to be done.");

});

       





app.listen(900, function () {
    console.log("server listening at port 900...");
});

