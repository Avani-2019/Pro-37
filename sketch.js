var canvas;

var gameState = 0;
var ContestCount;
var database;
var quiz;
var question;
var contestant;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink"); 
  //THIS IS FOR ADDITIONAL GOAL 2
/*  if(ContestCount === 4){
    quiz.update(1);
  } 
  if(gameState === 1){
    clear();
    quiz.play();
  }   */
}
