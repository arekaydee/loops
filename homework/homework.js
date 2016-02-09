/*
  100 things
*/

function setup(){
  createCanvas(windowWidth,windowHeight);

for(var i = 0; i <50; i++){
  noStroke();
  var c = color('rgba(0,50,255,.5)');
  fill(c);
  ellipse(random(windowWidth),random(windowHeight),75+i,75+i);
  var c = color('rgba(255,0,158,.5)');
  fill(c);
  ellipse(random(windowWidth),random(windowHeight),75+i,75+i);

  }
}
