const http = require('http');
let url = require('url');

http.createServer((req,res)=>{
    var q=url.parse(req.url,true).query;
    console.log("call back funtion");
    res.write("Diameter = "+q.radius*2);
    res.end();
}).listen(800);