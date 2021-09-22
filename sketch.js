var bg,bgimg,girlimg,boyimg,snowflakeimg,snowmanimg

function preload(){
  girlimg = loadImage("girl-removebg-preview.png")
  bgimg = loadImage ("snow1.jpg")
  snowimg = loadImage ("snow5.webp")
  boyimg = loadImage ("boy2.png.png")
  }
 

function setup() {
  createCanvas(800,600);


 bg =  createSprite(400, 300, 800, 600);
  bg.addImage(bgimg);
bg.scale = 2


boy = createSprite(600,300,20,20);
boy.addImage(boyimg)
boy.scale = 1
boy.debug = true


girl = createSprite (240,200,20,20)
girl.addImage(girlimg);
girl.scale = 2
girl.debug = true;
girl.setCollider ("rectangle",0,0,20,90)
boy.setCollider ("rectangle",0,0,10,40)
}

function draw() {
  background(0); 
  
  if(keyCode === 32){

boy.velocityX = -4

  }
 
   if (boy.isTouching(girl)){
 boy.velocityX = 0



   }
  spawnsnowflakes();
  drawSprites();
}


function spawnsnowflakes() {
  
  if (frameCount % 60 === 0) {
    var snow = createSprite(600,0,40,10);
    snow.x = Math.round(random(80,520));
    snow.addImage(snowimg);
    snow.scale = 0.1;
    snow.velocityY = 6;
    
  
    snow.lifetime = 100;
  
  }   
}

