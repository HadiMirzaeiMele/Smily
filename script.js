var myGamePiece;
var myBackground;
var elem = document.getElementById("bubbleId");  
var id = null;
var id = null;
var pos = 0;
var speedY=1;
var speedX = 0;

function startGame() {

    console.log("stargame");
    clearInterval(id);
    id = setInterval(frame, 20);
}



function move(dir) {
 // myGamePiece.image.src = "Resources/obj_0.gif";
  if (dir == "up") {speedY=-1; }
  if (dir == "down") {myGamePiece.speedY = 1; }
  if (dir == "left") {myGamePiece.speedX = -1; }
  if (dir == "right") {myGamePiece.speedX = 1; }
}

function clearmove() {
  speedY=1;
  speedX=1;

}


function frame() {
  console.log(pos);
  if (pos == 650) {
    clearInterval(id);

  } else {
    pos=pos+1*speedY;
    elem.style.top = pos + 'px'; 
    elem.style.left = pos/2 + 'px'; 
  }
}