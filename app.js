// Declaring a variable
// Keyword identifier/VariableName=value 
var firstName = "John";
let lastName = "Doe";
let age = 27;
let isMarried = true
let children = ["Bright", "Simon", "Patrick"];
let other = {
    favoriteColor: "Gold",
    favoriteSport: "Soccer",
    favoriteFruit: "Apple",
};
const fullName = firstName + "" + lastName;  
const mySelf = `My name is ${firstName} ${lastName}`;
console.log(mySelf);

// STRINGS
let sentence = "This story is about John Doe and his family "
console.log(sentence.length);
console.log(sentence.split("John"));
console.log(sentence.replace("John", "Patrick"));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.startsWith("T"));
console.log(sentence.endsWith("family"));
console.log(sentence.includes("his")); //twitter
// ARRAY
const days = ['Monday', 'Tuesday', 'Wednesday','Thursday'];
console.log(days.length);
days.push('Friday'); 
console.log(days);
console.log(days.pop());//removes from back
console.log(days.shift())  //removes from front 
console.log(days.unshift("Sunday")); //adds from front
console.log(days.push()) // adds from back
console.log(days.indexOf("Tuesday")); //GETS the index of arrays eg. 0 or 1
console.log(days[3]);//how to get individual element. this is for retrieving data in the array
days[0] = 'Sunday'; //change data in the array
// pop pops from the back, removing days= shows arrays not numbers.including days= will display numbers as result

//OBJECTS- with objects it uses the dot notation and string notation. eg,person. or 'firstname'
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
