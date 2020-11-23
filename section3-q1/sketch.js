// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう



function setup(){


  createCanvas(400, 400);
  background(255);
  balloon('I love Bass',255,255,255,0,0,255,255,0,0);

}


function balloon(t,a,b,c,d,e,f,g,j,i){

  let w = textWidth();
  let h = textAscent() + textDescent();//吹き出しの高さ？
  let p = 10;



  fill(a,b,c);



  rect(0, 0, w+p*4, h+p*2);//x座標は

  fill(d,e,f); //文字の色
  text(t, p, h+p);
  beginShape();
  vertex(w+p*4,0);
  vertex(w+p+(w+p)*4/3,h/2+p);
  vertex(w+p*4,h+p*2);
  fill(g,j,i)
  endShape(CLOSE);

}
