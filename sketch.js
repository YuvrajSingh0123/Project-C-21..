 var Galaxy 
 var Asteroid
 var star
 var spaceship
 var Galaxyimg
 var Asteroidimg
 var starimg
 var spaceshipimg
 var starCollection = 0;
 var endImg
 var end
 var PLAY=1;
 var END=0;
 var gameState=1;


 function preload(){
Galaxyimg = loadImage("Galaxy.jpg");
Asteroidimg = loadImage("Asteroid.png")
starimg = loadImage("star.png");
spaceshipimg = loadImage("Spaceship.jpg")
end = loadImage("GameOver.jpg")
 }

function setup() {
 createCanvas(windowWidth , windowHeight)
Galaxy=createSprite(width/2,200,height-10 , width,125 )
Galaxy.addImage(Galaxyimg)
Galaxy.velocityY = -4
 
spaceship=createSprite(50,height-70,20,50)
spaceship.addImage(spaceshipimg)
spaceship.scale = 0.20

starG=new Group();
AsteroidG=new Group();
}

function draw() {
 drawSprites()
if(Galaxy.y<0){
Galaxy.y=height/2
}

if(gameState===PLAY){
    background(0);
    spaceship.y = World.mouseY;
    edges= createEdgeSprites();
  spaceship.collide(edges);
}
if(Galaxy.y>height){
    Galaxy.y=height/2
    }

    createAsteroid();
    createstar();
    
    if (starG.isTouching(spaceship)) {
        starG.destroyEach();
        starCollection=starCollection + 1;
      }
        if(AsteroidG.isTouching(spaceship)) {
          gameState=END;
          
          spaceship.addImage(endImg);
          spaceship.x=width/2;
          spaceship.y=height/2;
          spaceship.scale=0.6;
          
          starG.destroyEach();
          AsteroidG.destroyEach();
          
          starG.setVelocityYEach(0);
          AsteroidG.setVelocityYEach(0);
          
          drawSprites();
          textSize(20);
          fill(255);
          text("star: "+ starCollection,width-150,30);
          
      }


}
function createstar() {
    if (World.frameCount % 200 == 0) { 
      var star = createSprite(Math.round(random(50,width-50),40, 10, 10));
      star.addImage(starimg);
    star.scale=0.12;
    star.velocityY = 5;
    star.lifetime = 200;
    starG.add(star);
    }
  }
    function createAsteroid() {
        if (World.frameCount % 530 == 0) {
         // 
          var Asteroid = createSprite(Math.round(random(50,width-50),40, 10, 10));
          Asteroid.addImage(Asteroidimg);
          Asteroid.scale=0.12;
          Asteroid.velocityY = 5;
          Asteroid.lifetime = 200;
          AsteroidG.add( Asteroid);
        }
      
  }