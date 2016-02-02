/*
  Classwork
*/

var cellSize = 50;

function setup(){
  createCanvas(windowWidth,windowHeight);

  for(var row = 0; row <20;row++){

    for(var column =0; column <20;column++){
      var c = color(random(255),200,random(100));

      noStroke();
      fill(c);
      rect(cellSize*column, cellSize*row, cellSize, cellSize);

      var c = color(random(255),200,random(100));

      stroke(255);
      fill(c);
      ellipse(cellSize*column+25, cellSize*row+25, 10, 10);

    }

  }
  for(var row = 0; row <20;row++){

    for(var column =0; column <20;column++){
      var c = color(random(255),200,random(100));

      fill(c);
      ellipse(cellSize*column+50, cellSize*row+50, 10, 10);
      stroke(255);
      line(cellSize*column+45, cellSize*row+55, cellSize*column+55, cellSize*row+45);
      line(cellSize*column+20, cellSize*row+20, cellSize*column+30, cellSize*row+30);


    }
  }
}
