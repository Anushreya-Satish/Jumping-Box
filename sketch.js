var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(950,700);

    //create 4 different surfaces
    surface1 = createSprite(100,690,200,20);
    surface1.shapeColor =(rgb(255,105,180));

    surface2 = createSprite(350,690,200,20);
    surface2.shapeColor =(rgb(255,0,0));

    surface3 = createSprite(600,690,200,20);
    surface3.shapeColor = (rgb(0,0,255));

    surface4 = createSprite(850,690,200,20);
    surface4.shapeColor =(rgb(0,255,0));

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor =(rgb(255,250,250));
    box.velocityY = 5;

}

function draw() {
    background(rgb(255));
    //create edgeSprite
    edgeSprite = createSprite(475,700,950,20);
    edgeSprite.visible = false;
    box.bounceOff(edgeSprite);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.shapeColor = (rgb(255,105,180));
        music.play();
        box.bounceOff(surface1);
    }
    if(box.isTouching(surface2)){
        box.shapeColor = (rgb(255,0,0));
        music.play();
        box.bounceOff(surface2);
    }
    if(box.isTouching(surface3)){
        box.shapeColor = (rgb(0,0,255));
        music.play();
        box.bounceOff(surface3);
    }
    if(box.isTouching(surface4)){
        box.shapeColor = (rgb(0,255,0));
        music.play();
        box.bounceOff(surface4);
    }

    drawSprites();
}
