"use strict";
// 2 -Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//  let firstName:string= "Abu Bakar";
//  console.log(`Hello ${firstName},would you like to learn some Python today?`);
// 3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let firstName:string= "abu bakar";
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());
// console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
//4 -Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//  console.log('Destiny "is the prison and chain of the ignorant."');
// 5-Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person:string="Allama Iqbal"
// let message:string=
// 'Destiny "is the prison and chain of the ignorant."'
// console.log(`Quote by ${famous_person},said ${message}`);
//6-Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let firstName:string="Abu\tBakar"
//  let fName1:string="Abu\nBakar"
// console.log(firstName)
// console.log(fName1)
//7 -Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let a:number=10
// let b:number=5
// console.log(a + b)
// console.log(a - b )
// console.log(a / b)
// console.log(a * b)
// 8 -You should create four lines that look like this:
//8  //  console.log(5 + 3)
//   console.log(5 + 3)
//   console.log(10 - 2)
//   console.log(2 * 4)
//   console.log(16 / 2)
// 9 - Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let fNumber:number=2024
// let message:string="Welcome to "
// console.log(`${message}${fNumber}`);
//10 -Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//done
//11 - Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names:String[]= ["Abu Bakar","Muhammad","Hafsa"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
//12 -Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let message:string = "is my youngest kid";
// console.log(names[0] + " " + message);
// console.log(names[1] + " " + message);
// console.log(names[2] + " " + message);
// 13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//     let vechils:string[] = [
//     "Honda Motorcycle"
//     ,"Honda City"
//     ,"Honda Civics" , 
//     "BMW", 
//     "Audi R8"
// ];
// vehicles.map((item)=>( console.log(`I would like to own ${item}`)))
// 14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestARR:string []= ['Hafsa', "Muhammad", "AbuBakar"];
// guestARR.map((item)=>(
//   console.log(`Dear ${item} I would like to invite you for Dinner`)));
// let guestARR:string[] = ["Abu Bakar", "Muhammad" , "Hafsa"];
// guestARR.map((item)=>(
//   console.log(`Dear ${item}, You are corodialy invited to a dinner`)
// ))
//15 -   Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// console.log(guestARR);
// let cantAttnd:string = "Hafsa";
// console.log(cantAttnd + " " + "cant make it");
// let newGuest:string = "Bushra";
// guestARR[guestARR.indexOf(cantAttnd)] = newGuest;
// guestARR.map((item)=>(
//   console.log(`Dear ${item}, You are invited for Dinner`)
// ))
// Bushra question 16
// let guestARR:string []= ['Hafsa', "Muhammad", "AbuBakar"];
// let cantAttnd:string = "Hafsa";
// console.log(cantAttnd + " " + "cant make it");
// let newGuest:string = "Bushra";
// guestARR[guestARR.indexOf(cantAttnd)] = newGuest;
// guestARR.map((item)=>(
//   console.log(`Dear ${item}, I found a big table`)
// ));
//      let guests: string[] = ["Amina", "Muhammad", "Hafsa", "Hadi"];
// // Print the initial guest list
// console.log("Initial Guest List:");
// for (const guest of guests) {
//     console.log(guest);
// }
// const guestCannotMakeIt: string = "Bob";
// console.log(`\nOh no! ${guestCannotMakeIt} can't make it to the dinner.\n`);
// const newGuest: string = "Eve";
// const indexToRemove: number = guests.indexOf(guestCannotMakeIt);
// if (indexToRemove !== -1) {
//     guests.splice(indexToRemove, 1, newGuest);
// }
// // Print the updated guest list
// console.log("Updated Guest List:");
// for (const guest of guests) {
//     console.log(guest);
// }
// // Print invitation messages for the remaining guests
// console.log("\nInvitation Messages:");
// for (const guest of guests) {
//     console.log(`Dear ${guest}, you are invited to the dinner. Don't miss it!`);
// }
//16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let guests: string[] = ["Amina", "Muhammad", "Hafsa", "Hadi"];
// // Print the initial guest list
// console.log("Initial Guest List:");
// for (const guest of guests) {
//     console.log(guest);
// }
// // Assume Bob can't make it
// const guestCannotMakeIt: string = "Bob";
// console.log(`\nOh no! ${guestCannotMakeIt} can't make it to the dinner.\n`);
// // Replace Bob with a new guest
// const newGuest: string = "Eve";
// const indexToRemove: number = guests.indexOf(guestCannotMakeIt);
// if (indexToRemove !== -1) {
//     guests.splice(indexToRemove, 1, newGuest);
// }
// // Print the updated guest list
// console.log("Updated Guest List:");
// for (const guest of guests) {
//     console.log(guest);
// }
// // Print invitation messages for the remaining guests
// console.log("\nInvitation Messages:");
// for (const guest of guests) {
//     console.log(`Dear ${guest}, you are invited to the dinner. Don't miss it!`);
// }
// // Inform about a bigger dinner table
// console.log("\nGood news! We found a bigger dinner tab")
// 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let guests: string[] = ["Aayan", "Hadi", "Muhammad", "Abu Bakar", "Musfirah", "Fatima", "Azlan", "Hafsa"];
// // Print the initial guest list
// console.log("Initial Guest List:");
// for (const guest of guests) {
//     console.log(guest);
// }
// // Inform about the limited space
// console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
// // Remove guests until only two names remain
// while (guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
// }
// // Print messages for the two remaining guests
// console.log("\nInvitation Messages for the Two Remaining Guests:");
// for (const guest of guests) {
//     console.log(`Dear ${guest}, you are still invited to the dinner. We look forward to seeing you!`);
// }
// // Remove the last two names from the list
// guests.pop();
// guests.pop();
// // Print the final guest list (should be an empty list)
// console.log("\nFinal Guest List:");
// for (const guest of guests) {
//     console.log(guest);
// }
//19 - Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// let travelDestinations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Marrakech"];
// // Print the original order
// console.log("Original Order:");
// console.log(travelDestinations);
// // Print in alphabetical order without modifying the original list
// console.log("\nAlphabetical Order (without modifying original list):");
// console.log([...travelDestinations].sort());
// // Show that the array is still in its original order
// console.log("\nOriginal Order (unchanged):");
// console.log(travelDestinations);
// // Print in reverse alphabetical order without modifying the original list
// console.log("\nReverse Alphabetical Order (without modifying original list):");
// 20- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let travelDestinations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Marrakech"];
//  Print the original order
// console.log("Original Order:");
// console.log(travelDestinations);
// // Print in alphabetical order without modifying the original list
// console.log("\nAlphabetical Order (without modifying original list):");
// console.log([...travelDestinations].sort());
// // Show that the array is still in its original order
// console.log("\nOriginal Order (unchanged):");
// console.log(travelDestinations);
// // Print in reverse alphabetical order without modifying the original list
// console.log("\nReverse Alphabetical Order (without modifying original list):");
// console.log([...travelDestinations].sort().reverse());
// // Show that the array is still in its original order
// console.log("\nOriginal Order (unchanged):");
// console.log(travelDestinations);
// // Reverse the order of the list
// travelDestinations.reverse();
// console.log("\nReversed Order:");
// console.log(travelDestinations);
// // Reverse the order of the list again
// travelDestinations.reverse();
// console.log("\nReversed Order (back to original):");
// console.log(travelDestinations);
// // Sort the array in alphabetical order
// travelDestinations.sort();
// console.log("\nSorted Order:");
// console.log(travelDestinations);
// 21 - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let person: {name:string , fName:string , age:number} = {name:"Abu Bakar", fName:"Zohaib", age:9}
// console.log(person)
// 22 -Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// const programmingLanuage: string[] = [
//   "Poython",
//   "Javascript",
//   "Type Script",
//   "Html",
//   "Css",
// ];
// console.log(programmingLanuage[4]);
// //23- Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// // let car = 'subaru';
// // console.log("Is car == 'subaru'? I predict True.")
// // console.log(car == 'subaru')
// // • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car = 'Abu Bakar';
// console.log("Is car == 'Abu Bakar'? I predict True.")
// console.log(car == "Abu Bakar")
// console.log(car == 'Toyota')
// let num:any=23
// console.log("Is num ==23(in number) ? i predict true other wise I predict fakse")
// console.log(num ===23)
// console.log(num ==="24")
// // 24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
// // • Tests using the lower case function
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// // • Tests using "and" and "or" operators
// // • Test whether an item is in a array
// // • Test whether an item is not in a array
// const Names: string[] = ["Abu Bakar", "Muhammad", "Hafsa", "Hadi", "Ayan", "Azlan"]
// console.log(Names.includes("Abu Bakar")) 
// console.log(Names.includes("muhammad")) 
//25 - Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// let AlienColor:string= 'green'
// AlienColor= 'red';
// if (AlienColor === 'green'){
//   console.log("Player just earn 5 points!");
// }
//26 -Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let AlienColor:string= 'green';
// let Alien1Color:string= "red"
// AlienColor= 'red';
// if (AlienColor === 'green'){
//   console.log("Player just earn 5 points!");
// }
// else{
//   console.log("Player just earn 10 points!")
// }
//27- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let AlienColor:string= "red"
// if (AlienColor === 'red'){
//     console.log("Player just earn 5 points!");
//   }
//   else{
//     console.log("Player just earn 10 points!")
//   }
//28-Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age:number =1
// if(age <2){
// console.log("The Person is a Baby")
// }
// else if (age>=2 && age <4){
//   console.log("The Person is a toodler")
// }
// else if (age>=4 && age <13){
//   console.log("The Person is a Kid")
// }
// else if (age>=13 && age <20){
//   console.log("The Person is a teenager ")
// }
// else if (age>=20 && age <65){
//   console.log("The Person is a adult ")
// }
// else if(age>65){
//   console.log("The person is an elder")
// }
//29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits: string[] = ["banana", "strawberry", "kiwi"];
// // Check if specific fruits are in the array
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apple")) {
//     console.log(favorite_fruits)
// }
//30- Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// let usernames: string[] = ["user1", "user2", "admin", "user3", "user4"];
// let usernames: string[] = ["user1", "user2", "admin", "user3", "user4"];
// // Loop through the array and print a greeting for each user
// for (let i = 0; i < usernames.length; i++) {
//     let username = usernames[i];
//     if (username === "admin") {
//         console.log(`Hello ${username}, welcome back! (Administrator)`);
//     } else {
//         console.log(`Hello ${username}, welcome back!`);
//     }
// }
// 31 -o Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let usernames: string[] = ["Abu Bakar" , "Muhammad", "Hafsa","Hadi","Musfirah"]
// if (usernames.length ===0){
//   console.log("We NeedTo Find Some User");
// } else {
//   for ( let i=0; i<=usernames.length; i++) {
//    console.log(usernames[i]);
//   }
// }
// let username: string[] =[]
// if (username.length ===0){
//   console.log("We Need To Find Some User");
// } else {
//   for ( let i=0; i<=username.length; i++) {
//    console.log(username[i]);
//   }
// }
//32-Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// const current_users: string[] = ["HAFASA", "MUHAMMAD", "ABU BAKAR", "HADI", "MUSFIRAH"];
// const new_users: string[] = ["HAFASA", "MUHAMMAD", "ABU BAKAR", "HADI", "MUSFIRAH"];
// function isUsernameTaken(username: string): boolean {
//     return current_users.some(user => user.toLowerCase() === username.toLowerCase());
// }
// new_users.forEach(username => {
//     if (isUsernameTaken(username)) {
//         console.log(`Sorry, the username '${username}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${username}' is available.`);
//     }
// });
//33 - Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// Store the numbers 1 through 9 in an array
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// const numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
//34 -Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// Store pizza names in an array
// const pizzaNames: string[] = ["Pepperoni", "Margherita", "Vegetarian", "Hawaiian", "BBQ Chicken"];
// // Loop through the array and print a statement for each pizza
// for (let i = 0; i < pizzaNames.length; i++) {
//     console.log(`I like ${pizzaNames[i]} pizza.`);
// }
// // Concluding statement about your love for pizza
// console.log("I really love pizza!");
//35 -
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Store names of animals in an array
// const animals: string[] = ["Dog", "Cat", "Rabbit"];
// const commonCharacteristic = "They are domesticated animals.";
// for (let i = 0; i < animals.length; i++) {
//     console.log(`A ${animals[i]} would make a great pet.`);
// }
// console.log(`Any of these animals would make a great pet! ${commonCharacteristic}`);
//36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Define the make_shirt function
// function make_shirt(size: string, message: string): void {
//   console.log(`The shirt is ${size}-sized, and it has the message: "${message}".`);
// }
// make_shirt("Large", "Hello, World!");
// arge Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Modified make_shirt function with default values
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//   console.log(`The shirt is ${size}-sized, and it has the message: "${message}".`);
// }
// // Create a large shirt with the default message
// make_shirt();
// // Create a medium shirt with the default message
// make_shirt("Medium");
// // Create a small shirt with a custom message
// make_shirt("Small", "Custom message for a small shirt.");
//38 -Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// Modified make_shirt function with default values
// Define the describe_city function with a default country value
// function describe_city(city: string, country: string = "Unknown"): void {
//   console.log(`${city} is in ${country}.`);
// }
// // Call the function for three different cities
// describe_city("Karachi", "Pakistan");
// describe_city("Tokyo", "Japan");
// describe_city("Paris"); // Defaults to "Unknown" for the country
//39 -City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// function city_country(city: string, country: string): string {
//   return `${city}, ${country}`;
// }
// // Call the function with at least three city-country pairs
// const result1: string = city_country("Lahore", "Pakistan");
// const result2: string = city_country("New York", "USA");
// const result3: string = city_country("Tokyo", "Japan");
// // Print the values returned by the function
// console.log(result1);  // Output: Lahore, Pakistan
// console.log(result2);  // Output: New York, USA
// console.log(result3);  // Output: Tokyo, Japan
//40 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Function to create an album object
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//   const album: { artist: string, title: string, tracks?: number } = {
//       artist: artist,
//       title: title,
//   };
//   if (tracks !== undefined) {
//       album.tracks = tracks;
//   }
//   return album;
// }
// // Make three dictionaries representing different albums
// const album1 = make_album("Taylor Swift", "Fearless");
// const album2 = make_album("Ed Sheeran", "Divide", 12);
// const album3 = make_album("Beyoncé", "Lemonade", 14);
// // Print each return value to show that objects are storing the album information correctly
// console.log(album1);
// console.log(album2);
// console.log(album3);
//41 -Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let Magicians: string[] = ["David Copperfield" , "Derren Brown"]
// function showMagicians(magiciansArrr: string[]):void {
//   for (let magician of magiciansArrr) {
//     console.log("magician");
// }
// }
// console.log("Magicians")
//42
// const magicianNames: string[] = ["Zohaib Abu Bakar"];
// function showMagicians(names: string[]): void {
//     for (const name of names) {
//         console.log(name);
//     }
// }
// function makeGreat(names: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (const name of names) {
//         const greatName = `${name} the Great`;
//         greatMagicians.push(greatName);
//     }
//     return greatMagicians;
// }
// console.log(magicianNames)
//43 -
// const magicianNames: string[] = ["Zohaib Abu Bakar"];
// function showMagicians(names: string[]): void {
//     for (const name of names) {
//         console.log(name);
//     }
// }
// function makeGreat(names: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (const name of names) {
//         const greatName = `${name} the Great`;
//         greatMagicians.push(greatName);
//     }
//     return greatMagicians;
// }
// const originalMagicians = magicianNames.slice();
// const greatMagicians = makeGreat(originalMagicians);
// console.log("Original Magicians:");
// showMagicians(originalMagicians);
// console.log("\nGreat Magicians:");
// showMagicians(greatMagicians);
// console.log(greatMagicians)
//43 - 
// function orderSandwich(...items: string[]): void {
//   console.log("Sandwich Order:");
//   if (items.length === 0) {
//       console.log("No items selected. Please choose some ingredients.");
//   } else {
//       console.log("Ingredients: " + items.join(", "));
//   }
//   console.log("\n");
// }
// orderSandwich("Turkey", "Cheese", "Lettuce");
// orderSandwich("Ham", "Tomato");
// orderSandwich("Sandwhich"); 
// console.log(orderSandwich)
//45 the last question
// function createCar(manufacturer: string, modelName: string, options: { [key: string]: any }): { manufacturer: string, modelName: string, [key: string]: any } {
//   const carInfo: { manufacturer: string, modelName: string, [key: string]: any } = {
//       manufacturer,
//       modelName,
//       ...options,
//   };
//   return carInfo;
// }
// const carDetails = createCar("Toyota", "Camry", { color: "Blue", optionalFeature: "Sunroof" });
// console.log("Car Details:", carDetail);
