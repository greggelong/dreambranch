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
let count=1
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  greg = new Gurtle(width / 2,height-35, color(167,173,186));
  //yuan = new Gurtle(0,height/4,color(255,255,0))
  greg.angle = -90;
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
    //yuan.x =0
    //yuan.y = height/3
    //if (frameCount%10==0){
     //   count++
   // }
   // strokeWeight(1)
    //koch(yuan,count%4,800)
    //strokeWeight(15)
    greg.angle = -90;
    greg.x=width/2
    greg.y=height-35
    doinstr(greg,instr,offset)
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
  