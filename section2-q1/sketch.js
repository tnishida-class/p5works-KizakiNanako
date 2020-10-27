// 小手調べ
function setup(){
  createCanvas(100,100);

noFill();
  for(let i = 0; i < 5; i++){

    ellipse(50,50,i*10);

stroke(0, 0, 255);
  }
for(let j = 5; j<10; j++){
  ellipse(50,50,j*10)

stroke(255, 0, 0);
}
}
