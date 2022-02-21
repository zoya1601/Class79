x=[];
function a(){
    var y=document.getElementById("i1").value;
    var y1=document.getElementById("i2").value;
    var y2=document.getElementById("i3").value;
    var y3=document.getElementById("i4").value;
   x.push(y); 
   x.push(y1);
   x.push(y2);
   x.push(y3);
   console.log(x);
   document.getElementById("ab").innerHTML=x;
   document.getElementById("bsubt").style.display="none";
   document.getElementById("cd").style.display="inline-block";
}
function b(){
    x.sort();
    console.log(x);
    document.getElementById("ab").innerHTML=x;
}