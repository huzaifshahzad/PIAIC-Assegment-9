"use strict";
/* 1 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
var userName:string="shahzad arif";
console.log(`helo ${userName}, would you like to learn pathon today?`);
//2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var userName:string="shahzad arif";
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks
var autherName:string="Albert Einstein";
var famousQuote:string="A person who never made a mistake never tried anything new";
console.log(autherName, "once seid", famousQuote);

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person:string= autherName;
console.log(famous_person,"once seid",famousQuote);
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName:string="shah \t zad \n arif";
console.log(personName);
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
var a:number=1;
var b:number=2;
var c:number=3;
var d:number=4;
var e:number=12;
var f:number=16;
console.log(d+b+a+a);
console.log(e-c-a);
console.log(b*d);
console.log(f/b);
console.log(5+3);
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNum:number= 3;
console.log(`my favorite number is`, (favNum));
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
 var friendsName:string[]=["shahzad","ahmad","inam ul haq","shan"];
 for (let i = 0; i < friendsName.length; i++) {
   console.log(friendsName[i]);
   
   
 }
 //Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

 var friendsName:string[]=["shahzad","ahmad","inam ul haq","shan"];
 for (let i = 0; i < friendsName.length; i++) {
   console.log("helo dear", friendsName[0]);
   console.log("helo dear mr", friendsName[1]);
   console.log("helo dear how are you", friendsName[2]);
   console.log("helo dear aoa", friendsName[3]);
   
   
 }
 //Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
 var myLove:string[]=["moter bike","honda","cc125","red ","total geniun"];
 for (let i = 0; i < myLove.length; i++) {
   console.log("i like", myLove[0], "his brand", myLove[1] ,"his engin",myLove[2],"hir coller is", myLove[3],"and condition is",myLove[4]);
   
   
 }*/
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestst = ["shahzad", "ahmad", "inam", "shan", "zohaib"];
for (let guest in guestst) {
    console.log(`${guestst[guest]}, you are invited to party`);
}
console.log(`${guestst[2]} has an importent work so he is not available`);
