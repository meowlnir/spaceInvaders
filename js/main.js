var game;
var DEBUGGER = false

function init() {
    game = new Game();
    game._construct("mainContainer");


    setInterval(function() {
        if(game.pause){
            game.setMessage()
        }else{
            game.loopInit();
            console.log('is running')
        }

    }, 150);
}

document.onkeyup = function(e) {
	game.onkeyup(e);
}

document.onkeydown = function(e) {
	game.onkeydown(e);
}

window.onload = init;