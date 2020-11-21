// テキスト「アニメーション」
let x, y, vx, vy;
let angle=0;
let r=15
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);

star(x, y,r,angle);
x += vx;
y += vy;
angle++;
  // BLANK[2] (hint: 作った star 関数を使います)星を書く


  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(x, y,r,angle){
  beginShape();
  for(var i = 0; i < 5; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI+ angle
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = x + cos(theta) * r;
    var y = y + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
