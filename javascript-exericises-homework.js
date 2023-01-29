// Write a function that takes a name and says hello to the name. Use the following template:
// Hello You!
function hello(name) {
  let username = "Mustache";
  console.log("Hello,",(name))
}
hello('Mustache');

// Hello You! Part 2
// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.
function hello(name) {
    if (name) {
        console.log(`Hello,${name}`)
    } else {
        console.log("Hello, world!")
    } 
    
  }
  hello('Mustache');

//   Madlib
// Write a madlib function, which is given a name and a subject. It will return (not print) a new string: (name)'s favorite subject in school is (subject).
function madlib(name, subject) {
    return name + " favorite subject in school is " + subject;
  }
 console.log(madlib("chris", "Math"))
//   Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair, and poor) and returns the dollar amount for the tip. Based on:
function tipAmount(billAmount,levelOfService) {

if (levelOfService==="good") {
    return billAmount*.2;
}
else if(levelOfService==="fair"){
    return billAmount*.15;
}
else{
    return billAmount*.1;
}
}
console.log(tipAmount(100,"fair"))


// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
function totalAmount(billAmount,levelOfService){
    let tip = tipAmount(billAmount,levelOfService)
    var total= tip + billAmount;
    return total;
    
}
console.log(totalAmount(100,"fair"))



// Tip Calculator 3
// Write a function splitAmount that takes the bill amount, the level of service, and the number of people to split the bill between. It will return the final amount for each person.
function splitAmount(billAmount,levelOfService,peopleSplit){
    return (totalAmount(billAmount,levelOfService) )/peopleSplit;

}
console.log(splitAmount(100,"good",2))