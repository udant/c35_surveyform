var form;
var voteCount;
var voterAnswers;
var database;
var data;
var allVotes;
var values;


function setup() {
    createCanvas(400, 400);
    database = firebase.database();
    values = database.ref("votes/"); 
    data = new Data();
   
    data.start();
    
    }

function getVoteInfo(data) {
        votedata = data.val()
    console.log("voteData: "+ votedata.length);
      }



/*function draw() {
 //text("Q1 - Will you give "); 

 
 }*/