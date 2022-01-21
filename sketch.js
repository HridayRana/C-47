var santa,santa_running;

var bg,bg_image;
var invisiblePlatform;

var elf,elf_running;

var gameState = "play";

var score = 0;
var music;
var over;

function preload(){


santa_running = loadAnimation("santa1.png","santa2.png","santa3.png","santa4.png");
elf_running = loadAnimation("elf1.png","elf2.png");
bg_image = loadImage("background.jpg");


music = loadSound("background.mp3");
over = loadSound("end.mp3")
survive = loadSound("survive.mp3")
}




    
function setup() {
 createCanvas(900,540);

 

 bg = createSprite(450,254);
 bg.addImage("background",bg_image);


 invisiblePlatform = createSprite(253,400,1366,10);
 invisiblePlatform.visible = false;






 elf = createSprite(600,350,10,10);
 elf.addAnimation("villain",elf_running);
 elf.scale = 0.8;



 
 santa = createSprite(150,390,10,10);
 santa.addAnimation("jumping",santa_running); 
 santa.scale = 2;
 

 music.play();
}





function draw()  {

background("black");

drawSprites();
textSize(20)
stroke("black")
text("score:"+score,50,25);



if ( gameState == "play")  {
  
    score = score + Math.round(frameCount/60) 

    bg.velocityX = -10;
    if (bg.x < 400 ) {
        bg.x= 600
    }
   
    
    if (elf.x < 0) {
        elf.x =1400; 
    }
    

   
  elf.velocityX = -10;


  
 
  santa.velocityY = 40;
 
     

if (keyDown("SPACE")) {
    santa.y -= 100;
}


    




if (santa.collide(elf)) {
 gameState = "end";
 over.play()
 music.stop()
 survive.play();


}






}





if (gameState == "end") {
  
    bg.velocityX = 0;
    elf.velocityX = 0
    santa.velocityX = 0
    bg.x = width/2

   
    
}








santa.collide(invisiblePlatform);





}



