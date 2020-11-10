// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Dragon Quest");

}


function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();//吹き出しの高さ？
  let p = 2;


  fill(0,0,255);



  rect(0, 0, w+p, h+p*2);//x座標は

  fill(255,0,0); //文字の色
  text(t, p, h+p);
  beginShape();
  vertex(w+p,0);
  vertex(w+p+(w+p)/3,h/2+p);
  vertex(w+p,h+p*2);
  fill(0,0,255)
  endShape(CLOSE);

}
