const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
	port:3306
}; // change port to 3306 that may be the port mostly.


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);
console.log("db adventures");

//check connection fail or success
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

  con.query('select * from item',[],(err,res)=>{
    if(err){
        console.log("Error"+err);
    }
    else{
        console.log(res);
    }
} );

// con.query('insert into item (itemno,itemname,price) values(?,?,?)',[4,'Scale',5],(err,res)=>{
//     if(err)
//         console.log("error has occured let us see");  
//     else
//     console.log(res.affectedRows);     
// });

// con.query('update item set price=? where itemno=? ',[10,2],(err,res)=>{
//     if(err)
//         console.log("error has occured let us see");  
//     else {
//         if(res.affectedRows===0)
//         {
//             console.log("update failed");
//         } 
//         else
//            console.log("update suceeded");  
//     }   
// });

con.query('select itemname,price from item  where price=? ',[10],(err,res)=>{
    if(err)
        console.log("error has occured let us see");  
    else {
        if(res.length > 0)
        {
            
            for (let index = 0; index < res.length; index++) {
                console.log(res[index].itemname+" "+res[index].price);
            }
            
        } 
        
    }   
});

con.query('select * from item',[],(err,res)=>{
    if(err){
        console.log("Error"+err);
    }
    else{
        console.log(res);
    }
} );




  