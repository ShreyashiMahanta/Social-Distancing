// Anja is walking through the streets of her city,but she must practice social distancing due to the COVID-19 pandemic.
// Although the amount of cases in her country is very less,they are advised to stay at home and only go out if necessary.
// Anja is returning home from the market,but,there are people on the streets.
// In this game,if she gets closer than 1 metre(not to scale here!!) to a person,they move away and she loses a life(there are 4 lives).

// Define the variables(characters)
var girl1,anja,runner;
var boy1,boy2;
var background;
var life1,life2,life3,life4;
var gameloser;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
backgroundImg = loadImage("city.jpg");
anjaImg =  loadImage("girl2.png");
girl1Img = loadImage("girl1.png");
runnerImg = loadImage("runner1.png");
boy1Img = loadImage("boy1.png");
boy2Img = loadImage("boy2.png");
lifeImg = loadImage("heart.png");
gameloserImg = loadImage("GAMELOSER.png");
}

function setup(){
    createCanvas(1200,700);
    background = createSprite(600,350,100,100);
    background.addImage(backgroundImg);
    background.scale = 1.5;

    anja = createSprite(1000,520,10,10);
    anja.addImage(anjaImg);
    anja.scale = 0.26;
    //anja.debug = true;

    girl1 = createSprite(300,600,10,10);
    girl1.addImage(girl1Img);
    girl1.scale = 0.26;
   // girl1.debug = true;
    girl1.setCollider("circle",0,0,10);

    runner = createSprite(90,510,10,10);
    runner.addImage(runnerImg);
    runner.scale = 0.23;
   // runner.debug = true;
    runner.setCollider("circle",0,0,10);

    boy1 = createSprite(620,620,10,10);
    boy1.addImage(boy1Img);
    boy1.scale = 0.31;
    //boy1.debug = true;
    boy1.setCollider("circle",0,0,10);

    boy2 = createSprite(10,640,10,10);
    boy2.addImage(boy2Img);
    boy2.scale = 0.3;
    //boy2.debug = true;
    boy2.setCollider("circle",0,0,10);

    life1 = createSprite(1060,80,10,10);
    life1.addImage(lifeImg);
    life1.scale = 0.2;

    life2 = createSprite(1100,80,10,10);
    life2.addImage(lifeImg);
    life2.scale = 0.2;

    life3 = createSprite(1140,80,10,10);
    life3.addImage(lifeImg);
    life3.scale = 0.2;

    life4 = createSprite(1180,80,10,10);
    life4.addImage(lifeImg);
    life4.scale = 0.2;

}

function draw(){

    if(gameState === PLAY){

    if(keyDown("LEFT_ARROW")){
        anja.velocityX = -2;
    }

    if(anja.isTouching(girl1)){
        life2.visible = false;
        girl1.x = 700;
    }

    if(anja.isTouching(boy1)){
        life1.visible = false;
        boy1.x = 190;
        boy1.y = 600;
    }

    if(anja.isTouching(runner)){
        life3.visible = false;
        runner.x = 1000;   
    }

    if(anja.isTouching(boy2)){
        life4.visible = false;
        boy2.x = 1100;
       
    }

    if(life4.visible === false){
        gameloser = createSprite(600,350,10,10);
        gameloser.addImage(gameloserImg);
        gameloser.scale = 0.6;
        gameState === END;
        anja.velocityX = 0;
       // anja.visible = false;
    }
}
    

    drawSprites();
}