var myGamePiece;
var myBackground;
var elem = document.getElementById("bubbleId");  
var id = null;
var id2 = null;

var posY = 0;
var posX = 0;

var speedY=1;
var speedX = 0;
var  gravitySpeedY=0;
var  gravitySpeedX=0;
var gravityY=0.5;
var gravityX=0.005;
var bounceBack=0.9;
var maxWidth1=1400;
var maxHeight1=600;

var maxWidth2=700;
var maxHeight2=800;

//document.getElementById("canvas").setAttribute("class","wide");
//document.getElementById("background-wrap").setAttribute("style","display:block;cursor:pointer;cursor:hand;color:red;background:pink; width:500px;height:400px;");


//var ctx = canvas.getContext("2d");
window.onload = function() {
  startGame();
 }
var currentWidth,currentHeight;
function startGame() {
    console.log("stargame");



    clearInterval(id);
    id = setInterval(frame, 30);
    clearInterval(id2);
    id2 = setInterval(ResponsiveAnimationFrame, 1000);

// Add behind elements.
//ctx.globalCompositeOperation = 'destination-over'
//ctx.fillStyle = "blue";
//ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}

function ResponsiveAnimationFrame(){
  var r = document.querySelector(':root');

  var win = window,
  doc = document,
  docElem = doc.documentElement,
  body = doc.getElementsByTagName('body')[0],
  x = win.innerWidth || docElem.clientWidth || body.clientWidth,
  y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
  currentWidth=x;
  currentHeight=y;
  if(x>maxWidth1) {
    currentHeight=y-120;
    r.style.setProperty('--width', '100px');
    r.style.setProperty('--shadow1', '12px');
    r.style.setProperty('--top1', '25px');
    r.style.setProperty('--left1', '22px');
    r.style.setProperty('--width1', '15px');
    r.style.setProperty('--top2', '40px');
    r.style.setProperty('--left2', '10px');
    r.style.setProperty('--width2', '7px');
    r.style.setProperty('--borderRight', '5px');
    r.style.setProperty('--borderRight2', '5px');
    r.style.setProperty('--blur', '4px');
    r.style.setProperty('--blur2', '6px');
  }else   if(x>maxWidth2 ){
    currentHeight=y-60;
    r.style.setProperty('--width', '50px');
    r.style.setProperty('--shadow1', '6px');
    r.style.setProperty('--top1', '12px');
    r.style.setProperty('--left1', '11px');
    r.style.setProperty('--width1', '7px');
    r.style.setProperty('--top2', '20px');
    r.style.setProperty('--left2', '5px');
    r.style.setProperty('--width2', '3px');
    r.style.setProperty('--borderRight', '2px');
    r.style.setProperty('--borderRight2', '2px');
    r.style.setProperty('--blur', '2px');
    r.style.setProperty('--blur2', '3px');
  }
}

function move(dir) {
 // myGamePiece.image.src = "Resources/obj_0.gif";

  if (dir == "up") {speedY=-1; }
  if (dir == "down") {speedY = 1; }
  if (dir == "left") {speedX = -1; gravityX=-0.1;}
  if (dir == "right") {speedX = 1; gravityX=0.1;}

}

function clearmove() {
  
  speedY=1;

  if(speedX==1){//for inserthing speed
    speedX=0.2;

  }else{//for inserthing speed
    speedX=-0.2;
  }
  gravityX=0.005;


}


function frame() {


    gravitySpeedY+=gravityY;
    gravitySpeedX+=gravityX;
    posY+=speedY*gravitySpeedY;
    posX+=speedX*gravitySpeedX;
   // console.log(speedY+"\t"+posY +"\t"+currentHeight);
    elem.style.top = posY + 'px'; 
    elem.style.left =posX + 'px'; 

    hiTheButton();
}
function hiTheButton() {


  if (posY > currentHeight) {//670 the y position of the ground should be the real position of the browser buttons
    posY = currentHeight; 



      gravitySpeedY=-(gravitySpeedY*bounceBack);
   }  
}




let isMouseDown = false;

document.addEventListener('mousedown', (event) => {
    if (event.button === 0) { // Check if it's the left mouse button (button code 0)
        isMouseDown = true;
        createDiv(event.clientX, event.clientY);
    }
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        createDiv(event.clientX, event.clientY);
    }
});

function createDiv(x, y) {
    const div = document.createElement('div');
    div.className = 'bubble';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.appendChild(div);

    setTimeout(() => {
      div.classList.add("exploding-bubble");
      div.classList.add("explode");
      setTimeout(() => {
          div.remove(); // Remove the exploded bubble
      }, 5000); // Adjust the timing as needed
  }, 5000);
}