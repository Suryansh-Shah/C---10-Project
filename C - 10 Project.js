var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var life = 10;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

var gameState;

   boundary1 = createSprite(190,120,420,3);
   boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "blue";
  car1.velocityY = 10;
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.velocityY = 10;
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "yellow";
  car3.velocityY = 10;
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "purple";
  car4.velocityY = 10;
 
//add the velocity to make the car move.


function draw() {
   background("white");
   createEdgeSprites();
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);
sam.bounceOff(boundary1);

car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);
sam.bounceOff(boundary2);

//Add the condition to make the sam move left and right

if (keyWentDown("right")) {
  sam.velocityX = 3;
}

if (keyWentUp("right")) {
 sam.velocityX = 0;  
}

if (keyWentDown("left")) {
  sam.velocityX = -3;
}

if (keyWentUp("left")) {
  sam.velocityX = 0;
}

if (keyWentDown("up")) {
  sam.velocityY = -3;
}

if (keyWentUp("up")) {
  sam.velocityY = 0;
}

if (keyWentDown("down")) {
  sam.velocityY = 3;
}

if (keyWentUp("down")) {
  sam.velocityY = 0;
}

//Add the condition to reduce the life of sam if it touches the car.
  
  if (sam.isTouching(car1)) {
    sam.x = 20;
    sam.y = 190;
    life = life - 1;
  }
  
  
  if (sam.isTouching(car2)) {
    sam.x = 20;
    sam.y = 190;
    life = life - 1;
  }
  
  
  if (sam.isTouching(car3)) {
    sam.x = 20;
    sam.y = 190;
    life = life - 1;
  }
  
  
  if (sam.isTouching(car4)) {
    sam.x = 20;
    sam.y = 190;
    life = life - 1;
  }
  
 if (sam.x > 345) {
   fill("black");
   textSize(50);
  text("You Win", 100, 320);
  car1.velocityY = 0;
  car1.x = 100;
  car1.y = 130;
  
  car2.velocityY = 0;
  car2.x = 215;
  car2.y = 130;
  
  car3.velocityY = 0;
  car3.x = 165;
  car3.y = 250;
  
  car4.velocityY = 0;
  car4.x = 270;
  car4.y = 250;
 }
 
if (life === 0) {
   fill("black");
   textSize(50);
  text("You Lose", 100, 320);
  car1.velocityY = 0;
  car1.x = 100;
  car1.y = 130;
  
  car2.velocityY = 0;
  car2.x = 215;
  car2.y = 130;
  
  car3.velocityY = 0;
  car3.x = 165;
  car3.y = 250;
  
  car4.velocityY = 0;
  car4.x = 270;
  car4.y = 250;
}
        
  
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
