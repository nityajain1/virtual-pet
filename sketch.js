var dog,dogimg;
var database,position;

function preload()
{
	dogimg = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,350,20,20);
  dog.addImage  = "dogimg"; 

  database = firebase.database();
    var ballposition = database.ref("pet/positions");

    dogposition.on("value",readop); 

}


function draw() {  
  background("white");
  if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
  }
  function writePosition(x,y){
    database.ref("pet/position").set({
      x : dog.x + x,
      y :  dog.y + y
   })
  }

  function readop(data){
    position = data.val();
    dog.x = position.x;
    dog.y = position.y;
}

  drawSprites();
  

}



