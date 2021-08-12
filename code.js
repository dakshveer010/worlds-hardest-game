var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["21cca176-ba76-44bd-8ad5-f5e4f2aaee4f","859bb881-97f9-496f-8a02-7e0950641f57","365132f5-9741-440a-8d43-1024228af1eb"],"propsByKey":{"21cca176-ba76-44bd-8ad5-f5e4f2aaee4f":{"name":"doremon","sourceUrl":"assets/api/v1/animation-library/gamelab/96dctbYxFW5wNybomhBpG9RbT5KeXuKO/category_robots/baby_robot.png","frameSize":{"x":240,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"96dctbYxFW5wNybomhBpG9RbT5KeXuKO","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/96dctbYxFW5wNybomhBpG9RbT5KeXuKO/category_robots/baby_robot.png"},"859bb881-97f9-496f-8a02-7e0950641f57":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"365132f5-9741-440a-8d43-1024228af1eb":{"name":"pagar","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GeFu5jI1MRDZ5Fhhxack3izk0KSuf8Za","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/365132f5-9741-440a-8d43-1024228af1eb.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//crating doremon


var doremon1 = createSprite(50, 200,50,50);
doremon1.setAnimation("pagar");
doremon1.scale=0.8;

//creating boundries
var boundrary1 = createSprite(200, 100,400,10);
var boundrary2 = createSprite(200, 300,400,10);

//creating cars

var car1 = createSprite(125, 125,20,20);
car1.shapeColor="red";
var car2 = createSprite(175, 275,20,20);
car2.shapeColor="red";
var car3 = createSprite(225, 125,20,20);
car3.shapeColor="red";
var car4 = createSprite(275, 275,20,20);
car4.shapeColor="red";

//giving velocity to car

car1.velocityY=8;
car2.velocityY=-8;
car3.velocityY=8;
car4.velocityY=-8;

var opticalstore = createSprite(350, 200,100,200);
opticalstore.shapeColor="yellow";

//creating score
var score =0;

function draw() {
background("white");

//creating egde boundries
createEdgeSprites();
car1.bounceOff(boundrary1);
car1.bounceOff(boundrary2);
car2.bounceOff(boundrary1);
car2.bounceOff(boundrary2);
car3.bounceOff(boundrary1);
car3.bounceOff(boundrary2);
car4.bounceOff(boundrary1);
car4.bounceOff(boundrary2);

//moving doremon
if (keyDown("LEFT_ARROW")) {
doremon1.x=doremon1.x-3;
    
}

if (keyDown("RIGHT_ARROW")) {
 doremon1.x=doremon1.x+3; 
}

//bring

if (doremon1.isTouching(car1) ||doremon1.isTouching(car2)||doremon1.isTouching(car3)||doremon1.isTouching(car4)) {
  doremon1.x=50;
  doremon1.y=200;
  score=score+1;
}
//display lives
textSize(30);
fill("red");
text("lives-"+score, 220, 60);


drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
