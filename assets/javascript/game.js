var wins = 0;
var losses = 0;
var totalScore = 0;

var number;

var candyCone; 
var candyCorn; 
var cupcake; 
var peppermint; 

var updateTotalScore = function () {
  $('#totalScore').empty();
  $('#totalScore').append(totalScore);

  $('#wins').empty();
  $('#wins').append(wins);

  $('#losses').empty();
  $('#losses').append(losses);
}

var restart = function () {
  totalScore = 0;
  number = Math.floor((Math.random() * 100) + 19);

  $('#totalScore').empty();
  $('#totalScore').append(totalScore);
  $('#number').html(number);

  candyCone = Math.floor((Math.random() * 12) + 1);
  candyCorn = Math.floor((Math.random() * 12) + 1);
  cupcake = Math.floor((Math.random() * 12) + 1);
  peppermint = Math.floor((Math.random() * 12) + 1);

  updateTotalScore();
}

restart();

var game = function () {
  if (totalScore == number) {
    wins++;
    alert("You Win!");
    restart();
  } else if (totalScore > number) {
    losses++;
    alert("You Lost!");
    restart();
  } else {
    updateTotalScore();
  }
}

$('#totalScore').append(totalScore);

$(document).ready(function () {
  $('#candyCone').click(function () {
    totalScore = totalScore + candyCone;
    game();
  })

  $('#candyCorn').click(function () {
    totalScore = totalScore + candyCorn;
    game();
  })

  $('#cupcake').click(function () {
    totalScore = totalScore + cupcake;
    game();
  })

  $('#peppermint').click(function () {
    totalScore = totalScore + peppermint;
    game();
  })
});