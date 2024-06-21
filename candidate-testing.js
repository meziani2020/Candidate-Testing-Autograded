const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";


//TODO: Variables for Part 2
let questions=Array();
let correctAnswers= Array();
let candidateAnswers=Array();
 
// questions array initializing
questions[0]= "Who was the first American woman in space? ";
questions[1]= "True or false: 5 kilometer == 5000 meters? ";
questions[2]= "(5 + 3)/2 * 10 = ? ";
questions[3]= "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
questions[4]= "What is the minimum crew size for the ISS? ";


//correctAnswers array initializing
correctAnswers[0]="Sally Ride";
correctAnswers[1]="true";
correctAnswers[2]="40";
correctAnswers[3]="Trajectory";
correctAnswers[4]="3";



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question("Candidate's Name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer=input.question(question);

  for(let i=0; i<questions.length;i++){
    candidateAnswers[i]=input.question(questions[i]);
  }

  
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /*
  if( candidateAnswer===correctAnswer){
      console.log("Good job!, your answer is correct. ");
  }else{
    console.log("Oops!, your answer is not correct. ");
  }
  */
  
  let  textTemplat="";
  let goodIn=0; // numner of good inswers
  let percentage=0;

  for(let i=0; i<questions.length; i++){
    textTemplat += `Your answer: ${candidateAnswers[i]}, Correct answer: ${correctAnswers[i]}.  \n`;

    //chek the answer
    //if good is answer goodIn increments
    // to make it case insensitive we compare the UpperCase forme of the answer and the unswer using convertionmethod toUpperCase()   
    if(candidateAnswers[i].toUpperCase()==correctAnswers[i].toUpperCase()){
      goodIn++;
    }

    }
    // calculate the percentage good unswers  based on total nbre of questions and nember of good inswers
    percentage=(goodIn/questions.length)*100;
    console.log(textTemplat);
    console.log("you got:" + percentage +"% " );

  //decide pass or note
  if(percentage < 80 ){
    console.log("you failed it" );
  }else{
    console.log("you passed " );
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  grade=percentage;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello "+candidateName+" !");
  askQuestion();
  //gradeQuiz(this.candidateAnswers);
  gradeQuiz(candidateAnswers);
}

//runProgram();





// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

