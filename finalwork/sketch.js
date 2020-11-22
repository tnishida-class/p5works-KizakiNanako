// 最終課題を制作しよう
let x,y,r;
let animate;

function setup(){
  createCanvas(windowWidth, windowHeight);
  animate=true;
  balloon("provisional movement",255,255,255,0,0,255,60);
}

function balloon(t,a,b,c,i,u,o,y){
let w= textWidth
let h= textAscent
textDescent();
let p=2
fill(i,u,o);
rect(0,0,w+p*2,h+p*2);
fill(a,b,c);
text(t,p,h+p);
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
