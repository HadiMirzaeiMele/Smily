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


var id = null;
Move();
var id = null;
var pos = 0;
var elem = document.getElementById("bubbleId");   
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