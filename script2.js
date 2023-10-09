var myGamePiece;
var myBackground;
var elem = document.getElementById("bubbleId");  
var id = null;
var id2 = null;
var id3 = null;
var  showMainBubble=false;
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


window.onload = function() {
  startGame();
 }
var currentWidth,currentHeight;

function startGame() {
    console.log("stargame");

    if(showMainBubble){
      var mainBubble=document.getElementById("bubbleId");
      mainBubble.classList.add("bubble");
    clearInterval(id);
    id = setInterval(frame, 30);
     clearInterval(id2);
    }
    id2 = setInterval(ResponsiveAnimationFrame, 1000);
    myBackgroundMaker0();
    drawAbstacles(100,100);

}
function drawAbstacles(center_x,center_y){
  const div = document.createElement('div');
  div.id=center_x +"_"+center_y+"";
  console.log(div.id);
  div.className = 'rectangle';
  // div.style.left = 100 + 'px';
  // div.style.top =  500 + 'px';
  document.body.appendChild(div);
}
var radius=100;
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
  if(showMainBubble){
  if(x>maxWidth1) {
    currentHeight=y-120;
    radius=100;
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
  }else  if(x>maxWidth2 ){
    currentHeight=y-60;
    radius=50;
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


function collistion(){
  var collision=false;
  var center_x,center_y;
  for (var i = 0; i < listOfBubbles.length; i++) {
    for (var j = 0; j < listOfBubbles.length; j++) {
      if((check4Intersection(listOfBubbles[j],listOfBubbles[i]))>0){

      }else{
        collision=true;
        center_x=listOfBubbles[j].center_x;
        center_y=listOfBubbles[j].center_y;
        break;
      }
    }
    if(collision) break;
  }
  if(collision){
    div.id=this.center_x +this.center_y+"";
  }
  
}
function myBackgroundMaker0(){
  
  var bubbleObj = new Bubble(100,500);
  bubbleObj.draw(0);
  id3 = setInterval(myBackgroundMaker, 5000);
}

function myBackgroundMaker(){

  for(var i =1;i<numberOfBubbles;i++){
    var center_x;
    sleep(200).then(() => { 
      
       center_x=Math.floor(Math.random() * 1000); });
    
    sleep(200).then(() => { 
      
    var center_y=Math.floor(Math.random() * 1000);
     var bubbleObj = new Bubble(center_x,center_y);
      bubbleObj.draw(i); });
    }
  }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let isMouseDown = false;

document.addEventListener('mousedown', (event) => {
    if (event.button === 0) { // Check if it's the left mouse button (button code 0)
        isMouseDown = true;
       var bubbleObj = new Bubble(event.clientX, event.clientY);
       bubbleObj.draw(0);
       listOfBubbles.push(bubbleObj);
  
    }
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const bubbleObj = new Bubble(event.clientX, event.clientY,radius);
        
        if(adjustBubbles(listOfBubbles,bubbleObj)){
          bubbleObj.draw(0);
          listOfBubbles.push(bubbleObj);
     
        } 

    }
});
var listOfBubbles = [];
var listOfAcceptedBubbles = [];
function adjustBubbles(listOfBubbles,newBubble) {
  if(listOfBubbles.length==0)return true;
  var intersect=false;
   for (var i = 0; i < listOfBubbles.length; i++) {
    if(i==0){

    }else{
      if((check4Intersection(listOfBubbles[i],newBubble))>0){
      

      }else{
        intersect=true;
      }

    }
   }
   return !intersect;
}
function check4Intersection(bubbl1,bubble2){
  var c1c2=Math.sqrt( Math.pow(bubbl1.center_x-bubble2.center_x,2) + Math.pow(bubbl1.center_y-bubble2.center_y,2));
 // console.log(c1c2);
 var radiusTmp=30; //radius should be calculated from its center point
  if(c1c2<radiusTmp){
    return -1; //intersect
  }else if(c1c2>radiusTmp){
    return 1;//disjoint
  }else {
    return -2;

  }
  return false;
}

function removeFromList(listOfBubbles,bubble){
  var remvedIndex=-1;
  for (var i = 0; i < listOfBubbles.length; i++) {
    if(listOfBubbles[i].center_x==bubble.center_x && listOfBubbles[i].center_y==bubble.center_y && listOfBubbles[i].radius==bubble.radius){
      remvedIndex=i;
    }
  }
  listOfBubbles.splice(remvedIndex, 1);
  console.log(remvedIndex);
}



var numberOfBubbles = 10;
var isBubbleExplodedByHisOwn=false;

class Bubble{
constructor(center_x,center_y,radius,type,exitTimer){
  this.center_x = center_x;
  this.center_y = center_y;
  this.radius = radius;
  this.type = type;
  this.timer=exitTimer;
}

draw(type){
  const div = document.createElement('div');
  div.id=this.center_x +"_"+this.center_y+"";
  console.log(div.id);
  div.className = 'bubble';
  div.classList.add("x"+type);
  div.style.left = this.center_x + 'px';
  div.style.top =  this.center_y + 'px';
  document.body.appendChild(div);
  const intervalDuration = 2000;
  this.timer = setInterval(() => this.exit(), intervalDuration); 

  if(isBubbleExplodedByHisOwn){

  setTimeout(() => {
    div.classList.add("exploding-bubble");
    div.classList.add("explode");
    setTimeout(() => {
        div.remove(); // Remove the exploded bubble
        removeFromList(listOfBubbles,this);
    }, 5000); // Adjust the timing as needed
}, 5000);

  }
}

exit() {
  // Access properties of the class instance using 'this'
 //console.log(`Exiting bubble at (${this.center_x}, ${this.center_y})`);
 var thisElement= document.getElementById(this.center_x +"_"+this.center_y+"");
 console.log(`re`);
 if(thisElement){
 var rect = thisElement.getBoundingClientRect();
// console.log(`Exiting bubble at (${this.center_x}, ${this.center_y},${rect.y},${rect.x})`);
 
  if(rect.y<200){
    thisElement.classList.add("exploding-bubble");
    thisElement.classList.add("explode");
    thisElement.remove(); // Remove the exploded bubble
    //document.body.removeChild(thisElement);
    console.log("removed");
      
 clearInterval(this.timer);
  }
 
}
  // Implement the logic for what should happen on each interval here
  // For example, you can remove the 'div' element
  // if(this.center_y<50){
  // if (this.div) {
  //   this.div.remove();
  //   console.log("remove");
  // }
  // }
  // Don't forget to clear the interval if needed

}
}



