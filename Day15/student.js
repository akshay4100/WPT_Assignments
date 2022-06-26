const url=" ";
const dbpar={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'wpt',
    port:3306
};

const mysql=require('mysql2');
const con=mysql.createConnection(dbpar);
console.log("Database connecting");

const express = require('express');
const app = express();

app.use(express.static("sf"));

app.get('/studentsdetail',(req,res)=>{
    let roll = req.query.sroll;

    let output = {status: false,msg:"Student detail not found" , name:""};

    con.query('select sname from student where sroll=?',[roll],(err,row)=>{
        if(err){
            console.log("Error"+err);
        }
        else{
            if(row.length>0)
            {
                console.log("Student detail found");
                output.status=true;
                console.log(output.status);
                output.msg="Student detail found";
                output.name=row[0].sname;
                res.send(output);

            }
            else{
                output.msg="Student detail not found";
                res.send(output);
            }
            
        }


    });


});



app.listen(800,function(){
    console.log("server listening at port 800 ...")
});