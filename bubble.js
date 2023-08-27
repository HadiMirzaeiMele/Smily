var circles = document.querySelectorAll(".circle");
 
for (var i = 0; i < 7; i++) {
  var circle = circles[i];
  animateCircles(circle);
}
 
function animateCircles(circle) {
  var xMax = 400;
  var yMax = 300;
 
  circle.keyframes = [{
    
    opacity: 0.5,
    transform: "translate3d(" + (Math.random() * xMax) + "px, " + (Math.random() * yMax) + "px, 0px)"+ " rotate(0deg)"
  }, {
   
    opacity: 1,
    transform: "translate3d(" + (Math.random() * xMax) + "px, " + (Math.random() * yMax) + "px, 0px)"+ " rotate(100deg)"
  }, {
    opacity: 0.5,
    transform: "translate3d(" + (Math.random() * xMax) + "px, " + (Math.random() * yMax) + "px, 0px)"+ " rotate(0deg)"
  }];
 
  circle.animProps = {
    duration: 700 + Math.random() * 3000,
    easing: "ease-out",
    iterations: Infinity
  }
 
  var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
}

