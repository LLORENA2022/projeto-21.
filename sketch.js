var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola;
var arestas
var arestas1
var arestas2 
var music;

function preload(){
    // carregue o som aqui
    music=loadSound("music.mp3");
    
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(518,580,190,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(730,580,180,30);
    bloco4.shapeColor = "green";
   
    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4


    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = -5;
    bola.velocityX = 5;
    bola.velocityY = 5;
    bola.velocityY= -5;
    //escreva o código para adicionar velocityX e velocityY

}

function draw() {
    background(rgb(169,169,169));
    arestas=createSprite(0,3,4400,10);
    arestas.shapeColor = "gray"
    bola.bounceOff(arestas);

    arestas1=createSprite(800,300,10,900)
    bola.bounceOff(arestas1);
    arestas2=createSprite(0,300,10,900)
    bola.bounceOff(arestas2);
    
    //escreva o código de ricochete de bola para bloco1 
    if(bola.isTouching(bloco1) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
        
    }


    if(bola.isTouching(bloco2)&& bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        bola.velocityX = 0
        bola.velocityY = 0 
        
        //escreva o código para definir velocityX e velocityY da bola como 0

        //escreva o código para parar a música
    }
    if(bola.isTouching(bloco3) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.play();
    }
    if(bola.isTouching(bloco4) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
       
    }
    //escreva o código de ricochete de bola para bloco3

    //escreva o código de ricochete de bola para bloco4

    drawSprites();
}