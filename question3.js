const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

/* PLANNING
let name as student's name
let amount as the amount of lunch money they currently have
let lunchItem as the lunch item name
let cost as the cost of their lunch

if amount === cost --> [student name] purchased [lunch item] purchased!
else --> [student name] does not have sufficient funds to buy [lunch item]!

add let balance = 0
balance = amount - cost for the purchased --> if less than $5, display "Warning: Low balance!"
cost - amount for the sufficient --> if exactly $0, display "Balance depleted! Please add more funds."

add if balance > 0 && balance < 5 --> Warning: Low balance!
if balance === 0 --> Balance depleted! Please add more funds.

*/
//determine a proper function name and parameter variable name
function TheFunction(paramVariable1, paramVariable2,paramVariable3, paramVariable4){
let name = paramVariable1;
let amount = paramVariable2;
let lunchItem = paramVariable3; 
let cost = paramVariable4;
let balance = 0;


if(amount === cost || amount > cost){
  balance = amount - cost;
  console.log (""+name+" purchased "+ lunchItem +" purchased! Remaining Balance "+ balance +"");
} else if(amount < cost){
  balance = cost - amount;
  console.log (""+name+" does not have sufficient funds to buy "+ lunchItem +"! Needs "+ balance +" more.");
}

if(balance > 0 && balance < 5){
  console.log("Warning: Low balance!");
} else if(balance === 0){
  console.log("Balance depleted! Please add more funds.");
}



}

function StartApp(){
  readline.question('What is your name? ', _input1 => {
    readline.question('How much money do you have now? ', _input2 => {
      readline.question('What lunch item do you want to buy? ', _input3 => {
        readline.question('What is the price of the lunch item? ', _input4 => {

          //call your function here.
          TheFunction(_input1, Number(_input2), _input3, Number(_input4));
          // readline.close();
          if(_input1 === "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();