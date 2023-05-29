var xImg
var zeroImg
var blackImage
var box11,box12,box13, box21, box22,box23,box31,box32,box33

var turn ;
var box1, box2, box3, box4, box5, box6, box7, box8, box9
var restart, restartImg ;
var gameState

function preload(){
  
  xImg=loadAnimation("x.png");
  zeroImg= loadAnimation("o.png")
  blackImage= loadAnimation("square.png")
    
}
function setup (){
    createCanvas(600,700);
    
    box11=createSprite(100,100,190,190);
    box11.addAnimation("black",blackImage);
    box11.addAnimation("zero",zeroImg);
    box11.addAnimation("x",xImg);
    box11.scale=0.17;

    box12=createSprite(300,100,190,190);
    box12.addAnimation("black",blackImage);
    box12.addAnimation("zero",zeroImg);
    box12.addAnimation("x",xImg)
    box12.scale=0.17;

    box13=createSprite(500,100,190,190);
    box13.addAnimation("black",blackImage);
    box13.addAnimation("zero",zeroImg);
    box13.addAnimation("x",xImg)
    box13.scale=0.17

    box21=createSprite(100,300,190,190);
    box21.addAnimation("black",blackImage);
    box21.addAnimation("zero",zeroImg);
    box21.addAnimation("x",xImg);
    box21.scale=0.17
    
    box22=createSprite(300,300,190,190);
    box22.addAnimation("black",blackImage);
    box22.addAnimation("zero",zeroImg);
    box22.addAnimation("x",xImg)
    box22.scale=0.17;
   

    box23=createSprite(500,300,190,190);
    box23.addAnimation("black",blackImage);
    box23.addAnimation("zero",zeroImg);
    box23.addAnimation("x",xImg)
    box23.scale=0.17
    

    box31=createSprite(100,500,190,190);
    box31.addAnimation("black",blackImage);
    box31.addAnimation("zero",zeroImg);
    box31.addAnimation("x",xImg)
    box31.scale=0.17

    box32=createSprite(300,500,190,190);
    box32.addAnimation("black",blackImage);
    box32.addAnimation("zero",zeroImg);
    box32.addAnimation("x",xImg)
    box32.scale=0.17

    box33=createSprite(500,500,190,190);
    box33.addAnimation("black",blackImage)
    box33.addAnimation("zero",zeroImg);
    box33.addAnimation("x",xImg)
    box33.scale=0.17;


    box1= 0
    box2= 0
    box3= 0
    box4= 0
    box5= 0
    box6= 0
    box7= 0
    box8= 0
    box9= 0

    turn="P1";
    gameState="play";
   

}
function draw(){
    background("aqua");
  
  if(gameState=="play"){

    
    //first horizonal line
    if(box1==1 && box2==1 && box3==1){
      gameState="oWin";
    }
    if(box1==2 && box2==2 && box3==2){
      gameState="xWin";
    }

    //second horizonal line
    if(box4==1 && box5==1 && box6==1){
      gameState="oWin";
    }
    if(box4==2 && box5==2 && box6==2){
      gameState="xWin";
    }
    
    //third horizonal line
    if(box7==1 && box8==1 && box9==1){
      gameState="oWin";
    }
    if(box7==2 && box8==2 && box9==2){
      gameState="xWin";
    }

    //first verticle line
     if(box1==1 && box4==1 && box7==1){
      gameState="oWin";
    }
    if(box1==2 && box4==2 && box7==2){
      gameState="xWin";
    }

    //second verticle line
     if(box2==1 && box5==1 && box8==1){
      gameState="oWin";
    }
    if(box2==2 && box5==2 && box8==2){
      gameState="xWin";
    }
    
    //third verticle line
    if(box3==1 && box6==1 && box9==1){
      gameState="oWin";
    }
    if(box3==2 && box6==2 && box9==2){
      gameState="xWin";
    }

    //first diagonal line
    if(box1==1 && box5==1 && box9==1){
      gameState="oWin";
    }
    if(box1==2 && box5==2 && box9==2){
      gameState="xWin";
    }

    //second diagonal line
   if(box3==1 && box5==1 && box7==1){
      gameState="oWin";
    }
    if(box3==2 && box5==2 && box7==2){
      gameState="xWin";
    }

    

    //box1
    if (mousePressedOver(box11) && box1==0){
      if (turn == "P1"){
        player1Play(box11);
        box1=1;
      } 
      else if (turn == "P2" ){
        player2Play(box11);
        box1=2;
      } 
    }

    //box2
    if (mousePressedOver(box12) && box2==0){
      if (turn == "P1"){
        player1Play(box12);
        box2=1;
      } 
      else if (turn == "P2" ){
        player2Play(box12);
        box2=2;
      } 
    }

    //box3
    if (mousePressedOver(box13) && box3==0){
      if (turn == "P1"){
        player1Play(box13);
        box3=1;
      } 
      else if (turn == "P2" ){
        player2Play(box13);
        box3=2;
      } 
    }
    
    //box4
    if (mousePressedOver(box21) && box4==0){
      if (turn == "P1"){
        player1Play(box21);
        box4=1;
      } 
      else if (turn == "P2" ){
        player2Play(box21);
        box4=2;
      } 
    }
    
    //box5
    if (mousePressedOver(box22) && box5==0){
      if (turn == "P1"){
        player1Play(box22);
        box5=1;
      } 
      else if (turn == "P2" ){
        player2Play(box22);
        box5=2;
      } 
    }

    //box6
    if (mousePressedOver(box23) && box6==0){
      if (turn == "P1"){
        player1Play(box23);
        box6=1;
      } 
      else if (turn == "P2" ){
        player2Play(box23);
        box6=2;
      } 
    }

    //box7
    if (mousePressedOver(box31) && box7==0){
      if (turn == "P1"){
        player1Play(box31);
        box7=1;
      } 
      else if (turn == "P2" ){
        player2Play(box31);
        box7=2;
      } 
    }
    //box8
    if (mousePressedOver(box32) && box8==0){
      if (turn == "P1"){
        player1Play(box32);
        box8=1;
      } 
      else if (turn == "P2" ){
        player2Play(box32);
        box8=2;
      } 
    }
    
    //box9
    if (mousePressedOver(box33) && box9==0 ){
      if (turn == "P1"){
        player1Play(box33);
        box9=1;
      } 
      else if (turn == "P2" ){
        player2Play(box33);
        box9=2;
      } 
    }

    
    if(turn =="P1"){
      textSize(28)
      fill ("orange")
      text ("Turn : O" , 250,650);
    }
    if(turn =="P2"){
      textSize(28)
      fill ("orange")
      text ("Turn : X" , 250,650);
    }
  }

  if(gameState =="oWin"){
    fill("green")
    textSize(80);
    text("Player 'O' Won!", 20,650);
  }
  if(gameState=="xWin"){
    fill("red")
    textSize(80);
    text("Player 'X' Won!", 20,650);
  }
 
  drawSprites();
}


function player1Play(boxP1){
  boxP1.changeAnimation("zero");
  boxP1.scale=0.1;
  turn="P2";
}
function player2Play(boxP2){
  boxP2.changeAnimation("x");
  boxP2.scale= 0.07
  turn="P1";
}
