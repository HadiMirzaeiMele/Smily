//var bubble = document.querySelectorAll(".bubble");
// animateCircles(bubble);
// function animateCircles(bubble) {
//     var xMax = 400;
//     var yMax = 300;
   
//     bubble.keyframes = [{
      
//       opacity: 0.5,
//       transform: "translate3d(" + (Math.random() * xMax) + "px, " + (Math.random() * yMax) + "px, 0px)"+ " rotate(0deg)"
//     }, {
     
//       opacity: 1,
//       transform: "translate3d(" + (Math.random() * xMax) + "px, " + (Math.random() * yMax) + "px, 0px)"+ " rotate(100deg)"
//     }, {
//       opacity: 0.5,
//       transform: "translate3d(" + (Math.random() * xMax) + "px, " + (Math.random() * yMax) + "px, 0px)"+ " rotate(0deg)"
//     }];
   
//     bubble.animProps = {
//       duration: 700 + Math.random() * 3000,
//       easing: "ease-out",
//       iterations: Infinity
//     }
   
//     //var animationPlayer = bubble.animate(bubble.keyframes, bubble.animProps);
//   }


var myGamePiece;
var myBackground;
var elem = document.getElementById("bubbleId");  

function startGame() {
    myGamePiece = new component(30, 30, elem, 10, 120, "Character");
    myBackground = new component(656, 270, "Resources/background_0.png", 0, 0, "background");
    myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
      },
  clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
      clearInterval(this.interval);
  }
}
function updateGameArea() {
  myGameArea.clear();
  myBackground.speedX = -1;
  myBackground.newPos();    
  myBackground.update();
  myGamePiece.newPos();    
  myGamePiece.update();
}
function move(dir) {
 // myGamePiece.image.src = "Resources/obj_0.gif";
  if (dir == "up") {myGamePiece.speedY = -1; }
  if (dir == "down") {myGamePiece.speedY = 1; }
  if (dir == "left") {myGamePiece.speedX = -1; }
  if (dir == "right") {myGamePiece.speedX = 1; }
}

function clearmove() {
  //myGamePiece.image.src = "Resources/obj_0.gif";
  myGamePiece.speedX = 0; 
  myGamePiece.speedY = 0; 
}

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "background") {
      this.image = new Image();
      this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;    
  this.x = x;
  this.y = y;    
  this.update = function() {
      ctx = myGameArea.context;
      if (type == "background") {
          ctx.drawImage(this.image, 
              this.x, 
              this.y,
              this.width, this.height);      
      } else {
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  }
  this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.type == "background") {
          if (this.x == -(this.width)) {
              this.x = 0;
          }
      }
  }    
}





var id = null;
//Move();
var id = null;
var pos = 0;
 
function Move() {//you should get the screen height dynamically and change the direction when hit to earth happend
  clearInterval(id);
  id = setInterval(frame, 10);

}

function frame() {
  if (pos == 500) {
    clearInterval(id);
  } else {
    pos++; 
    elem.style.top = pos + 'px'; 
    elem.style.left = pos/2 + 'px'; 
  }
}