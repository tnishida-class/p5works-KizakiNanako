// 最終課題を制作しよう
let x,y,r;
let animate;
function setup(){
  createCanvas(windowWidth, windowHeight);
  animate=true;
}
  function draw(){
y =0.5*height;
x =0.5*width;
r=200;
let t = millis() % 2000;
  background(160, 192, 255);

  if(t>1000&&animate){
    line(x,y,x,y-r);
  }
    else{
      line(x,y,x-r,y);
  }
  }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  animate=!animate
}
