var myGamePiece;
var myBackground;
var elem = document.getElementById("bubbleId");  
var id = null;
var id = null;
var pos = 0;
var speedY=0;
var speedX = 0;
var  gravitySpeedY=0;
var gravityY=0.5;
var bounceBack=0.9;
function startGame() {

    console.log("stargame");
    clearInterval(id);
    id = setInterval(frame, 30);
}



function move(dir) {
 // myGamePiece.image.src = "Resources/obj_0.gif";
  if (dir == "up") {speedY=-1; }
  if (dir == "down") {myGamePiece.speedY = 1; }
  if (dir == "left") {myGamePiece.speedX = -1; }
  if (dir == "right") {myGamePiece.speedX = 1; }
}

function clearmove() {
  //speedY=1;
 // speedX=1;
 // gravitySpeedY=0;
}


function frame() {
  console.log(elem.style.top);

    gravitySpeedY+=gravityY;
    pos+=speedY+gravitySpeedY
    elem.style.top = pos + 'px'; 
    elem.style.left =0 + 'px'; 
    hiTheButton();
}
function hiTheButton() {
  if (pos > 670) {//670 the y position of the ground should be the real position of the browser buttons
    pos = 670; 
      gravitySpeedY=-(gravitySpeedY*bounceBack);
   }  
}