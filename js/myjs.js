
var left= $("#leftdiv").height();

var yourImg = document.getElementById('headshot');
if(yourImg && yourImg.style) {
    yourImg.style.height = left+"px";
    yourImg.style.width = left+"px";
}