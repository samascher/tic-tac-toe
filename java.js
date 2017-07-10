var playerX = {
  claimedSquares: [],
  wins: 0
};

var playerO = {
  claimedSquares: [],
  wins: 0
};

var winner = false;

var winningCombinations = /*I have no idea how to store these*/
  [
    [1,2,3], 
    [4,5,6],
    [7,8,9],
    [1,4,7], 
    [2,5,8],
    [3,6,9],
    [1,5,9], 
    [3,5,7]
  ];
var turn = 'x';
function play() {
  if (turn === 'x') { //If X's turn...
    $(this).empty();
    $(this).text('X'); //Place an X
    playerX.claimedSquares.push(Number($(this).attr('class')));//Add that square to X's array
    var counter = 0;
    for(var i = 0; i < winningCombinations.length; i++) {
      for(var j = 0; j < winningCombinations[i].length; j++) {
        if (playerX.claimedSquares.indexOf(winningCombinations[i][j]) !== -1) {
          counter++;
        }
      }
    }
    if (counter >= 3) {
      console.log("X is the winner!");
    }
    turn = 'o'; //O's turn!
    console.log(turn + "'s turn now!");
  } else if (turn === 'o') { //If O's turn...
    $(this).empty();
    $(this).text('O'); //Place an O
    playerO.claimedSquares.push($(this).attr('class')); //Add that square to O's array
    turn = 'x';
    console.log(turn + "'s turn now!");
  }
  $(this).off();
}

function clearBoard () {
  console.log($('td'));
  $('td').text('');
  turn = 'x';
  console.log('RESET! ' + turn + "'s turn now!");
  $('td').off();
  $('td').click(play);
  playerX = {claimedSquares: [], wins: 0};
  playerY = {claimedSquares: [], wins: 0};
}

$(document).ready(function() {
  $('td').click(play);
  $('button').click(clearBoard);  
});