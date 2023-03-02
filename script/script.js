function startGame() {
    myGameArea.start();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
  }
let canvas = document.createElement('lightsouls');
let can = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let lightsouls = new Lightsouls(canvas);
lightsouls.start();
let canvas,width = 1024; 
let canvas,height = 720;
lightsouls.loadImage(box);
lightsouls.start();
let Suet1 =[]
snek[0] = {
    x: 100,
    y: 100,
    dx: 1,
    dy: 0,
    color: 'white'
}
let direction = null;
if (button === 1) {}