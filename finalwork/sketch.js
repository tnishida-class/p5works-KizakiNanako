// 最終課題を制作しよう


function setup(){
  createCanvas(windowWidth, windowHeight);



}
let x =0.5*width;
let y =0.5*height;
let r =0.4*width;

  function draw(){


   background(160, 192, 255);
  //  ellipse(x,y,z);
  //  line(0.5windowWidth+rcos)


  const s = x + cos(HALF_PI) *r ; // 関数 cos の戻り値を使用
  const t = y + sin(HALF_PI) * r;
    line(x,y,s,t,);

}

//function windowResized(){
////  resizeCanvas(windowWidth, windowHeight);
//}
