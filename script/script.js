canvas = document.querySelector("#menu-inicial")
function startGame() {
    myGameArea.start();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 1200;
      this.canvas.height = 720;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
  }
let lightsouls = new Lightsouls(canvas);
lightsouls.start();
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
