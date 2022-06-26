// 1.	Non http
// a.	Write a function that returns previous number. Call that function and ensure you print the result in the console. Do it in nodejs


function previousValue(num)
{
    return num-1;
}

let num=10;
let x = previousValue(num);
console.log("Previous number of "+num+" is "+x);
