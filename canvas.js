var canvasElem = document.querySelector('#canvasid');
var context = canvasElem.getContext('2d');
context.translate(50, 50);
//0,0 => starts from 50,50
context.strokeStyle = 'red';
context.strokeRect(0, 0, 100, 100);
context.fillStyle = 'blue';
context.strokeStyle = 'yellow';
context.fillRect(50, 50, 100, 100);

//line
context.beginPath();
context.moveTo(100, 0);
context.lineTo(150, 50);
context.strokeStyle = 'green';
context.lineWidth = 5;
context.stroke();
context.moveTo(0, 0);
context.lineTo(50, 50);
context.stroke();
context.moveTo(0, 100);
context.lineTo(50, 150);
context.stroke();

context.rotate((325 * Math.PI) / 180);

//text
context.fillStyle = 'white';
context.strokeStyle = 'red';
context.font = '80px Arial';
// context.scale(2, 1);
// context.fillText('This is text', 0, 30, canvasElem.width);
context.strokeText('This is text', -170, 140);

// // LTR locale
// canvasElem.setAttribute('dir', 'ltr');
// context.textAlign = 'start';
// context.fillText('start', 50, 175);
// context.textAlign = 'end';
// context.fillText('end', 50, 220);

// // RTL locale
// canvasElem.setAttribute('dir', 'rtl');
// context.textAlign = 'start';
// context.fillText('start', 50, 265);
// context.textAlign = 'end';
// context.fillText('end', 50, 305);

//image
context.rotate((360 * Math.PI) / 180);
var imgEleme = document.getElementById('imganimid');
context.drawImage(imgEleme, -100, 150);

/*==========arc===========*/
var canvasElem1 = document.querySelector('#canvasid1');
var ctx1 = canvasElem1.getContext('2d');
ctx1.beginPath();
ctx1.strokeStyle = 'green';
// ctx1.arc(150, 150, 100, 0, (360 * Math.PI) / 180);
ctx1.arc(150, 150, 100, 0, 2 * Math.PI);
ctx1.stroke();
ctx1.closePath();
ctx1.beginPath();
ctx1.strokeStyle = 'red';
ctx1.fillStyle = 'yellow';
ctx1.moveTo(150, 150);
ctx1.lineTo(250, 150);
ctx1.arcTo(250, 150, 150, 250, 100);
ctx1.lineTo(150, 150);
ctx1.stroke();

/*=====ex=====*/
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

var x = 30;
var y = 30;
var radius = 20;

var xchange = 10;
var ychange = 10;
var count = 200;
function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  if (x + radius > c.width - 10 || x - radius < 10) {
    xchange = -xchange;
  } else if (y + radius > c.height - 10 || y - radius < 10) {
    ychange = -ychange;
  }
  console.log(c.height);
  x += xchange;
  y += ychange;

  console.log(x, y);
  setTimeout(function() {
    count--;
    if (count > 0) draw();
  }, 200);
}

//animation frame
var c1 = document.getElementById('myCanvas1');
var ctx1 = c1.getContext('2d');
var x1 = 30;
var y1 = 30;
var radius1 = 20;

var xchange1 = 50;
var ychange1 = 50;
var frameid = null;
function draw1() {
  frameid = window.requestAnimationFrame(draw1);
  ctx1.clearRect(0, 0, c1.width, c1.height);
  ctx1.beginPath();
  ctx1.strokeStyle = 'blue';
  ctx1.arc(x1, y1, radius, 0, 2 * Math.PI);
  ctx1.stroke();
  if (x1 + radius1 > c1.width || x1 - radius1 < 0) {
    xchange1 = -xchange1;
  } else if (y1 + radius1 > c1.height || y1 - radius1 < 0) {
    ychange1 = -ychange1;
  }

  x1 += xchange1;
  y1 += ychange1;

  console.log('anim', x1, y1);
}

c.onclick = function() {
  window.cancelAnimationFrame(frameid);
};

draw();
// draw1();
