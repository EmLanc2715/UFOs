// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

for (var i = 0; i <movieScores.length; i++){
  console.log(movieScores[i]);
}

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

for (var i = 0; i <movieScores.length; i++){
  console.log(movieScores[i]);

var score = movieScores[i];
sum += score;

// the movie is good if the score is greater than 7
if(score)
}