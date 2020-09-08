var ground, ball,rpoe
function preload() {
    
}
function setup(){
    var canvas = createCanvas(400,400);
    

    var ground_options ={
        isStatic: true
    }

    roof = Bodies.rectangle(200,390,200,20,roof_options);
    World.add(world,roof);
    
    var options ={
        istatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
    bob = Bodies.circle(100,100,70,options);
    World.add(world,bob);
}

function draw(){
    background(0);
    
    
}
         display() {
             bobObj.display();
             ropeObj.display();
             roofObj.display();
         }


         
    if (UP_ARROW.IsPressed) {
        keyPressed();
    }

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
    }
}
function buttonPressed() {
    if (keyCode === RIGHT_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:385,y:385})
    }
}