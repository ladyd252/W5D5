var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame(){
  this.stacks = [[3,2,1],[],[]];
}

HanoiGame.prototype.isWon = function(){
  if(this.stacks[1].length === 3 || this.stacks[2].length === 3 ){
    return true;
  }
  else{
    return false;
  }
};

HanoiGame.prototype.isValidMove = function(startTower, endTower){
  if(startTower.length === 0){
    return false;
  } else if(endTower.length === 0){
    return true;
  } else if(startTower[startTower.length -1] < endTower[endTower.length -1] ){
      return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx){
  // console.log(this)
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];
  var valid = this.isValidMove(startTower, endTower)
  if(valid){
    endTower.push(startTower[startTower.length - 1]);
    startTower = startTower.splice(startTower.length - 1, 1);
    return true;
  }
  else{
    this.print()
    return false;
  }
};

HanoiGame.prototype.print = function(){
  console.log(JSON.stringify(this.stacks));
  return "";
}

HanoiGame.prototype.promptMove = function(callback){
  this.print();
  reader.question("Which stack would you like to move from?",
    function(ans1){
      reader.question("Which stack would you like to move to?",
        function(ans2){
          var startTowerIdx = parseInt(ans1);
          var endTowerIdx = parseInt(ans2);
          callback(startTowerIdx, endTowerIdx);
        });
    });
};

HanoiGame.prototype.run = function(completionCallback){
  function errorCheck(startTowerIdx, endTowerIdx) {
    if(!this.move.bind(this, startTowerIdx, endTowerIdx)()){
      console.log("Not a valid move! Try again.");
    }
    if(!this.isWon()){
      this.run(completionCallback);
    } else {
      completionCallback();
    }
  };
  this.promptMove(errorCheck.bind(this));

};


var game = new HanoiGame();
// if(!game.isWon()){
//   game.isWon();
// }
game.run(function(){
  console.log("You win");
  reader.close();
})
