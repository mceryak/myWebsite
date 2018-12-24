window.onload = function() {
    var canvas = document.createElement("canvas");
    cx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    cx.strokeStyle = 'black';
    cx.fillStyle = "rgba(232, 9, 9, 1)";

    function makeCherry(x, y) {
        cx.beginPath();
        cx.arc(x, y, 50, 0, Math.PI * 2);
        cx.fill();
        cx.stroke();
    }

    function setUp() {
        makeCherry(100, 150);
        makeCherry(1200, 200);
    }

    setUp();

    function setDynamicBackground(){
        //generate the image from the canvas
        var imageDataURL = canvas.toDataURL();
      
        //set the dynamic image as the background
        document.body.style.background = 
         "transparent url('"+imageDataURL+"') repeat";
      }
      
    }