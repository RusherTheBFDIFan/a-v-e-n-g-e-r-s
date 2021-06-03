var canvas = new fabric.canvas("myCanvas")

var heightblock = 30;
var widthblock = 30;

var playerx = 10;
var playery = 10;

var playerobject = "";
var blockobject = "";

function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject = Img;

        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playery,
            left: playerx
        })
    })
}

function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject = Img;

        blockobject.scaleToWidth(150);
        blockobject.scaleToHeight(140);
        blockobject.set({
            top: playery,
            left: playerx
        })
    })
}