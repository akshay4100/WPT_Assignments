const express = require('express');
const app = express();

const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
	port:3306
}; 


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);
app.use(express.static("sp")) ;
console.log("db adventures");

//check connection fail or success
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get('/areadetail',(req,resp)=>{
    let pin=req.query.pin;

    let pinareastatus={ status:false, area:"", message:"City not Found"};

    con.query('select pin,area from pincodearea where pin=?',[pin],(err,res)=>{
        if (err) {
            console.log("error has occured let us see");  
        } else {
            if(res.length > 0)
            {
               
                pinareastatus.status=true;
                pinareastatus.message="City found";
                pinareastatus.area=res[0].area;
        }
    
        }
        resp.send(pinareastatus);
    } )
});

app.listen(800, function () {
    console.log("server listening at port 900...");
});

// con.query('create table pincodearea (pin integer,area varchar(15))',[],(err,res)=>{
//     if(err){
//         console.log("Error occured");
//     }
//     else{
//         console.log("table created");
//     }
// });

// con.query('insert into pincodearea values (?,?)',[425503,'Faizpur'],(err,res)=>{
//     if(err){
//         console.log("Error occured");
//     }
//     else{
//         if(res.length>0){
//             console.log(res.affectedRows);
//         }
//     }
// });








