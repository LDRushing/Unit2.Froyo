//Create a prompt asking the user to select an icecream flavor. 
const userInput= prompt("Please enter a string of flavors separated by a comma."); 
//string: "vanilla, vanilla, chocolate, strawberry, strawberry, vanilla"
console.log("user input: ", userInput);
const flavorsArray = userInput.split(" ");
console.log("flavors array: ", flavorsArray); 


 // Iterate through the array and count the frequencies using a loop. Putting all the info in here and this should return a flavor object. 
 function createFlavorObject(input){
    const flavorsArray = userInput.split(" ");
    console.log("flavors array: ", flavorsArray);
    for (let i = 0; i <flavorsArray.length; i++) {
        const current = flavorsArray[i]
        console.log("Index: ", i);
        console.log("Current element: ", current);
        //In operator will check if the variable is a key in the object and return boolean (true/false)
        console.log("Current is a key & has value? ", object[current]); //some # if it exists or undefined if not/
    }
}

//TORIE'S STUFF 

//const userInput = prompt(
   // "Please enter a string of flavors separated by a comma."
//);
//console.log("User input:", userInput);
//Create an array from a string.
//const flavorsArray = userInput.split(" , ");
//console.log("flavors array: ", flavorsArray); 

//Function definitions:
//keyword function + name we're giving to the function + (parameters)
//function createFlavorObject(userInput){

//}

//invoking or call the function for the code to run. 
//createFlavorObject(userInput);


//parameters << Inputs to the function. 
//curly braces opening and closing 
//ina definition, paramets -- placeholders
//function createFlavorObject(str){
//This is where we add our logic, our code. 
//}

//Invoke or call the function for the code to runm passing any arguments
//createFlavorObject(userInput);

//const newInput = prompt("___")
//createFlavorObject(newInput)

//const newestInput = prompt("");
//createFlavorObject(newestInput);

//Create an array with a string and from that array, build an object (frequency map where key, value = count of that element).
//const userString = "a,b,c,c,a,a,a,c,b,b"
//Create an array from a string. 
//const strArray =  str.split ("",""); //[a, b, c, c, c, a, a, a, a, c, b, b]
//console.log("strArray: ", strArray);
//str.split (parameter, limit) Separate them with commas. 

//Create an object so that we can add properties to it. 
//const object = {};
//key: value
//letter: count of that letter

// i
// 0  1  2  3  4  5  6  7  8  9
//[a, b, c, c, c, a, a, a, a, c, b, b]
//Loop/iterate through the array to add to the object
//for (let i = 0; i <strArray.length; i++) {
  //  const current = strArray[i]
  //  console.log("Index: ", i);
  //  console.log("Current element: ", current);
    //In operator will check if the variable is a key in the object and return boolean (true/false)
  //  console.log("Current in object? ", current in object"); // boolean
  //  console.log("Current is a key & has value? ", object[current]); //some # if it exists or undefined if not/


    //if current exists as a key in object, add 1 to count.
    //if (object[current]){
      //  console.log("Element exists as a key in object");
        //object[current] += 1; // what it's doing: 1 + 1
    //}  else {
        //if it doesn't, add as a key and set count to 1
      //  console.log("Element doesn't exist, so add!");
       // object[current] = 1;
    //}  
    //As the value changes, 1 is added to a letter. 
    //a no longer equals 0 after awhile due to 

    //console.log("Current element: ", current);
   // object[current] = 1
    //This will make every letter '1' because the numbers are resetting to 1. Put 'n + 1' to 
    //console.log("In loop obj: ", object);
    //console.log("---");
//}

//console.log("Final object: ", object)