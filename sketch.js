let greg; //variable to hold gurtle
let offset;
let yuan;
// all the parts will have the same size
let sz = 90;
let instr = [
  ["f", sz],
  ["push"],
  ["l", 45],
  ["f", sz],
  ["pop"],
  ["r", 45],
  ["f", sz],
  //E start
  ["push"],
  ["r", 45],
  ["f", sz],
  ["pop"],
  ["r", 135],
  ["f", sz],
  ["push"],
  ["l", 90],
  ["f", sz],
  ["pop"],
  ["r", 0],
  ["f", sz],
  ["l", 90],
  ["f", sz],
  ["l", 45],
  ["f", sz],
  ["l", 65],
  ["f", sz],
  ["r", 65],
  ["f", sz],
];

let instr2 = [
["f", sz],
["r", 135],
["f", sz],
["l", 135],
["f", sz],
["r", 65],
["f", sz],
["r", 90],
["f", sz],
["r", 90],
["f", sz],
["r", 90],
["f", sz],
["r", 90],
["f", sz],
];
let count=1
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  greg = new Gurtle(width / 4,height-35, color(167,173,186));
  yuan = new Gurtle(width-width/4,height-35,color(192,197,206))
  greg.angle = -90;
  yuan.angle =-90
  strokeWeight(15)
  background(0);
  //greg.forward(100);
  offset =1;
  doinstr(greg,instr,offset)
  
  frameRate(18)
}

function draw(){
    background(0)
    offset = sin(frameCount)
  
    greg.angle = -90;
    greg.x=width/4
    greg.y=height-35
    doinstr(greg,instr,offset)


    yuan.angle = -90;
    yuan.x=width-width/4
    yuan.y=height-35
    doinstr(yuan,instr2,offset)
    //offset++
    //offset++
    //print(offset)
    
}

function doinstr(turt, ins, off) {
   // print(turt,ins)
   //offset = 100
  for (let i = 0; i < ins.length; i++) {
   // print(i, ins[i][0])
    switch (ins[i][0]) {
      case "l":
        turt.left(ins[i][1]*off);
        
        break;

      case "r":
        turt.right(ins[i][1]*off);
        
        break;
      case "f":
        turt.forward(ins[i][1]);
        break;
      case "push":
        turt.pushIt();
        break;
      case "pop":
        turt.popIt();
        break;
    }
  }
}


function koch(t, order, size){
    if (order == 0){
      t.forward(size);
  
    }else{
      koch(t, order-1, size/3)   // Go 1/3 of the way
      t.left(60)
      koch(t, order-1, size/3)
      t.right(120)
      koch(t, order-1, size/3)
      t.left(60)
      koch(t, order-1, size/3)
    }
  
  }
  