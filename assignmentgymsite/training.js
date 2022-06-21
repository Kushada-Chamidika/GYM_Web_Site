function ani(){
    setInterval(an,2000);
}
var x = 1;
function an(){
    if(x==5){
        x=1;
    }
    document.getElementById("x2").className="bd bd"+x;
    x=x+1;
}