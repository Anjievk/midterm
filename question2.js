const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

/* PLANNING
1. let studentName for the first input
2. score variable
3. if score >= 86 --> Excellent! [Student Name] has an A.
4. if score >= 72 && <= 85 --> Great job! [Student Name] has a B.
5. if score >= 60 && < 72 --> Good effort! [Student Name] has a C.
6. if score >= 50 && < 60 --> Needs improvement. [Student Name] has a D.
7. if score < 50 --> Fail. [Student Name] has a F.

Create each if score === number+2 or +1 or ===  ---> console.log "Work Hard! [Student Name] is almost falling to F.""
*/

//determine a proper function name and parameter variable name
function TheFunction(paramVariable1, paramVariable2){
let studentName = paramVariable1;
let score = paramVariable2;

if(score >= 86){
  console.log("Excellent! "+ studentName +" has an A.");
  if(score === 86+2 || score === 86+1 || score === 86){
    console.log("Work Hard! "+ studentName +" is almost falling to C");
  }
} else if (score >= 72 && score <= 85){
  console.log("Great job! "+ studentName +" has a B.");
  if(score === 72+2 || score === 72+1 || score === 72){
    console.log("Work Hard! "+ studentName +" is almost falling to C");
  } else if(score === 85-2 || score === 85-1 || score === 85){
    console.log("Almost there! "+ studentName +" is close to an A");
  }
} else if (score >= 60 && score < 72){
  console.log("Good effort! "+ studentName +" has a C.");
  if(score === 60+2 || score === 60+1 || score === 60){
    console.log("Work Hard! "+ studentName +" is almost falling to D");
  } else if(score === 72-2 || score === 72-1){
    console.log("Almost there! "+ studentName +" is close to a B");
  }
} else if (score >= 50 && score < 60){
  console.log("Needs improvement. "+ studentName +" has a D.");
  if(score === 50+2 || score === 50+1 || score === 50){
    console.log("Work Hard! "+ studentName +" is almost falling to F");
  } else if(score === 60-2 || score === 60-1){
    console.log("Almost there! "+ studentName +" is close to a C");
  }
} else if (score < 50){
  console.log(""+ studentName +" has a F.");
  if(score === 50-2 || score === 50-1){
    console.log("Almost there! "+ studentName +" is close to a D");
  }
} 

// if(score2 === score-2){
//   console.log("Work Hard! [Student Name] is almost falling to [previous grade].");
// }
}

function StartApp(){
  readline.question('What is your name? ', _input1 => {
    readline.question('What is your score? ', _input2 => {

      //call your function here.
      TheFunction(_input1, Number(_input2));
      // readline.close();
      if(_input2 !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();