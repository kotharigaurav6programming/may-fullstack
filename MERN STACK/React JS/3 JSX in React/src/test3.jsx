/*
var num = parseInt(prompt("Enter Number"));
var str='';
for(var i=1;i<=10;i++){
    str += num+" x "+i+" = "+(num*i)+"\n";
}
const printMessage = <p>{alert(str)}</p>
*/

var num = parseInt(prompt("Enter Number"));
var str='';
var arr = [];
for(var i=1;i<=10;i++){
    str = num+" x "+i+" = "+(num*i);
    arr.push(str);
}

const printMessage = arr.map((line,index)=>{
    return <div key={index}>{line}</div>
});

export default printMessage;