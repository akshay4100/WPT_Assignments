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

app.get('/account',(req,resp)=>{
    let acno=req.query.accountno;
    console.log("Inside Account");
    let accountstatus={status:false,msg:"Account detail not found",balance:0.0};

    con.query('select accountno,balance from accountdetails where accountno=?',[acno],(err,res)=>{
        if(err){
            console.log("Account detail not Found");
        }

        else{
            if(res.length>0)
            {
                console.log(res.length);
                accountstatus.status=true;
                accountstatus.msg="Account detail Found";
                accountstatus.balance=res[0].balance;
            }
        }

        console.log(accountstatus.status);
        resp.send(accountstatus);
    });


 });

app.listen(800, function () {
    console.log("server listening at port 900...");
});









// con.query('create table accountdetails (accountno integer,balance float)',[],(err,res)=>{
//     if(err){
//         console.log("Error Occured");
//     }
//     else{
//         console.log("Table created");
//     }
// });



// con.query('insert into accountdetails values (?,?)',[654322,20000],(err,res)=>{
//     if(err){
//         console.log("Error Occured");
//     }
//     else{
//         console.log(res.affectedRows);
//     }
// });
