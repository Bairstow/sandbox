requirejs.config({
  // default settings
})

requirejs(
  ["helper", "game", "display"],
  function(helper, Game, DOMDisplay){
  // ensure that helper functions have loaded before firing the game script.
  // game handler functions
  // -------------------------------------------------
  function runAnimation(frameFunc) {
    var lastTime = null;
    function frame(time) {
      var stop = false;
      if (lastTime != null) {
        var timeStep = Math.min(time - lastTime, 50) / 1000;
        stop = frameFunc(timeStep) === false;
      }
      lastTime = time;
      if (!stop)
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function runGame(Display) {
    var game = new Game();
    game.initialise();
    var display = new Display(document.body, game);
    runAnimation(function(step) {
      game.animate(step);
      display.drawFrame(step);
    });
  }

  // game execution
  runGame(DOMDisplay);
});
