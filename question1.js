const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/


/* PLANNING

1. create "password" variable 
2. "input" variable of the user
3. if password === input --> "Access Granted!"
4. else --> "Access Denied!"
5. if input === "forgot" --> "Here is a hint"
6. if input === "reset" --> "Let's reset your account"

for challenge
if password === "forgot" || password === "reset" && input === password --> This password you set should not be used because it glitches the system
after the first readline question, if (input < 5) --> password is inadequate
*/


//determine a proper function name and parameter variable name
function TheFunction(paramVariable1, paramVariable2){
let password = paramVariable1;
let input = paramVariable2;

if(password === "forgot" || password === "reset" && input === password){
  console.log("This password you set should not be used because it glitches the system");
} else if(password === input){
  console.log("Access Granted!");
} else if (input === "forgot"){
  console.log("Here is a hint");
} else if (input === "reset"){
  console.log("Let's reset your account");
}else if (password !== input){
  console.log("Access Denied!");
} 





}

//CHALLENGE FUNCTION
function PasswordSet(){
  readline.question('Please provide password to set your account: ', _input1 => { 
    
    if (_input1.length < 5) {
      console.log("password is inadequate");
      PasswordSet();
    }

    function StartApp(){
    readline.question('What is your password? ', _input2 => {

      //call your function here.
      TheFunction(_input1, _input2);
      // readline.close();
      if(_input2 !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
}

StartApp();
  });
}
PasswordSet();
