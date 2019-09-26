

let canvas;
let ctx;
let cPosX;
let cPosY;
let drawing = true;

canvas = document.getElementById("canvas");
holder = document.getElementById("holder");
fColor = document.getElementById('foreground');
btnDraw = document.getElementById('draw');
btnErase = document.getElementById('erase');
ctx = canvas.getContext("2d");

 
  canvas.addEventListener("mousemove", function(e){
    cPosX = e.pageX - holder.offsetLeft - 70;
    cPosY = e.pageY - holder.offsetTop;
  }, false);

  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';


 canvas.addEventListener("mousedown", function(e){
  if (drawing){ 
    ctx.strokeStyle = fColor.style.backgroundColor;
  }
  ctx.beginPath();
  ctx.moveTo(cPosX, cPosY);
  canvas.addEventListener("mousemove", onPaint, false);
 }, false)

 let onPaint = function(){
  ctx.lineTo(cPosX, cPosY);
  ctx.stroke();
}

 //------------------STOP DRAWING-----------------------------\\
 canvas.addEventListener("mouseup", function(){
  canvas.removeEventListener("mousemove", onPaint, false);
}, false)

canvas.addEventListener("mouseout", function(){
  canvas.removeEventListener("mousemove", onPaint, false);
}, false)
//------------------STOP DRAWING-----------------------------\\


btnDraw.addEventListener("click", function(){
  ctx.lineWidth = 3;
  drawing = true;
}, false);

btnErase.addEventListener("click", function(){
  drawing = false;
  ctx.lineWidth = 30;
  ctx.strokeStyle = '#fff';
},false);