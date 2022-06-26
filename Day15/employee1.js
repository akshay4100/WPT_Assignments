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


app.get('/showEmpDetails',(req,res)=>{
    let employeeid=req.query.eid;
    let output={status:false,msg:"Employee Details Not Found",employeename:"",employeedeptname:"",employeesal:""};

    con.query('select empid,ename,dname,sal from employee where empid=?',[employeeid],(err,row)=>{
        if(err)
        {
            console.log("Error"+err);
        }
        else
        {
            if(row.length>0)
            {
                console.log("Row Affected"+row.length);
                output.status=true;
                output.employeename=row[0].ename;
                output.employeedeptname=row[0].dname;
                output.employeesal=row[0].sal;
                output.msg="Employee Details Found";

                
                res.send(output);
                

            }
            else{
                console.log('no rows are affected')
                res.send(output);
            }

        }
    });
});



app.get('/insertEmp',(req,res)=>{
    let employeeid=req.query.eid;
    let employeename=req.query.ename;
    let employeedeptname=req.query.dname;
    let employeesal=req.query.esal;

    let output={status:false,msg:"Employee already exist"};

    con.query('insert into employee  (empid,ename,dname,sal) values(?,?,?,?)',[employeeid,employeename,employeedeptname,employeesal],(err,row)=>{
        if(err)
        {
            console.log("Error"+err);
        }
        else
        {
            if(row.affectedRows>0)
            {
                output.status=true;
                output.msg="Employee Details Inserted";
            }
            else{
                console.log('Employee already exist');
            }
        }
        res.send(output);
    });
});



app.get('/updateEmp',(req,res)=>{
    let employeeid=req.query.eid;
    let employeename=req.query.ename;
    let employeedeptname=req.query.dname;
    let employeesal=req.query.esal;

    let output={status:false,msg:"Employee not exist"};

    con.query('update employee set ename=?,dname=?,sal=? where empid=?',[employeename,employeedeptname,employeesal,employeeid],(err,row)=>{
        if(err)
        {
            console.log("Error"+err);
        }
        else
        {
            if(row.affectedRows>0)
            {
                output.status=true;
                output.msg="Employee Details Updated";
            }
            else{
                console.log('Employee not exist');
            }
        }
        res.send(output);
    });
});


app.get('/showAllDetail',(req,res)=>{
    con.query('select * from employee',[],(err,row)=>{
        res.send(row);
    });
});
   



app.listen(800,function(){
    console.log("server listening at port 800 ...")
});