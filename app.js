
//..............CHAPTER 8 TO 11............//



// Q no 1:-




// var a = prompt('Enter your name')
// alert('hi, ' + a)





// Q NO 2:-

// var userInput = +prompt('Enter a number for table')
// var rang = +prompt('enter range ')

// for(var i=1;i<=rang;i++){
// if(userInput == ""){
// var c = 5*i;
//     document.write(5 + 'X' + i + '=' + c + "<br>") 

// }
// else{
//     var b = userInput*i;
//     document.write(userInput + "X" + i + "=" + b + "<br>")

// }
// }






//  Q NO 3:-


// var cityName = prompt('Enter city name ')

// if(cityName == 'karachi'){
//     alert('Welcome to city of light')
// }
// else if(cityName == 'islamabad'){
//     alert('Welcome to Capital')
// }

// else if(cityName == 'gilgit'){
//     alert('Welcome to jannat')
// }

// else{
//     alert('Not a city Name')
// }





//Q NO 4:-



// var gender = prompt('Enter your gender')
// if(gender == 'male'){
// alert('Good morning sir,')
// }
// else if(gender == 'female'){
//     alert('Good Morning maam')
// }
// else{
//     alert ('cross')
// }




//Q NO 5:-



// var traffic = prompt('Enter Road traffic colour name ')
// if(traffic =='red'){
//     document.write('vehicles must stop')
// }
// else if(traffic == 'yellow'){
//     document.write('vehicles should ready to move')
// }
// else if(traffic == 'green'){
//     document.write('vehicles can move now')
// }
// else{
//     document.write('Not a traffic colour ')
// }


// Q NO 6:-


// var current = +prompt('Enter your current age')
// var  max = +prompt('Enter your max age')


// if(current<=max){
//     document.write('You are Welcome')
// }
// else {
//     document.write('You are above then your max age')
// }




// Q NO 7:-


// var remaining = +prompt('Show the remaining feul in your car')
// if(remaining <= '0.25'){
//     document.write('“Please refill the fuel in your car')
// }
// else{
//     document.write('No need to refill ')
// }







// Q NO 8:-


// a:-
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }



// b.
//  var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }


// c.
//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }



// Q NO 9:-


// function calculateGradeAndRemarks(percentage) {
//     if (percentage >= 80) {
//         return ["A-one", "Excellent"];
//     } else if (percentage >= 70) {
//         return ["A", "Good"];
//     } else if (percentage >= 60) {
//         return ["B", "You need to improve"];
//     } else {
//         return ["Fail", "Sorry"];
//     }
// }


// function calculateAndDisplayResults() {

//     var subject1 = +prompt("Enter marks obtained in subject 1:");
//     var subject2 = +prompt("Enter marks obtained in subject 2:");
//     var subject3 = +prompt("Enter marks obtained in subject 3:");
//     var totalMarks = +prompt("Enter total marks:");


//     var totalObtainedMarks = subject1 + subject2 + subject3;


//     var percentage = (totalObtainedMarks / totalMarks) * 100;


//     var [grade, remarks] = calculateGradeAndRemarks(percentage);


//     document.write("<h2>Result:</h2>");
//     document.write("<p>Total Marks: " + totalMarks + "</p>");
//     document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
//     document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
//     document.write("<p>Grade: " + grade + "</p>");
//     document.write("<p>Remarks: " + remarks + "</p>");
// }


// calculateAndDisplayResults();




// Q NO 10:-


// function calculateTotalCost(price1, quantity1, price2, quantity2, shippingCharges) {
//     var subtotal = (price1 * quantity1) + (price2 * quantity2);
//     var totalCost = subtotal + shippingCharges;
//     return totalCost;
// }


// function applyDiscount(totalCost) {
//     if (totalCost > 2000) {
//         return totalCost * 0.9; // 10% discount
//     } else {
//         return totalCost;
//     }
// }


// function displayReceipt(item1, price1, quantity1, item2, price2, quantity2, shippingCharges, totalCost) {
//     document.write("<h2>Receipt</h2>");
//     document.write("<p>Item 1: " + item1 + " - Price: " + price1 + " PKR - Quantity: " + quantity1 + "</p>");
//     document.write("<p>Item 2: " + item2 + " - Price: " + price2 + " PKR - Quantity: " + quantity2 + "</p>");
//     document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
//     document.write("<p>Total Cost: " + totalCost.toFixed(2) + " PKR</p>");
// }


// var item1 = prompt("Enter name of item 1:");
// var price1 = parseFloat(prompt("Enter price of item 1 (PKR):"));
// var quantity1 = parseInt(prompt("Enter ordered quantity of item 1:"));
// var item2 = prompt("Enter name of item 2:");
// var price2 = parseFloat(prompt("Enter price of item 2 (PKR):"));
// var quantity2 = parseInt(prompt("Enter ordered quantity of item 2:"));
// var shippingCharges = parseFloat(prompt("Enter shipping charges (PKR):"));


// var totalCost = calculateTotalCost(price1, quantity1, price2, quantity2, shippingCharges);


// totalCost = applyDiscount(totalCost);


// displayReceipt(item1, price1, quantity1, item2, price2, quantity2, shippingCharges, totalCost);



// Q NO 11:-


// var secretNumber = Math.floor(Math.random() * 10) + 1;


// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


// if (userGuess === secretNumber) {
//     document.write("<p>Bingo! Correct answer.</p>");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     document.write("<p>Close enough to the correct answer.</p>");
// } else {
//     document.write("<p>Sorry, that's not correct. The secret number was " + secretNumber + ".</p>");
// }




// Q NO 12:-


// var userInput = parseInt(prompt("Enter a number:"));


// if (userInput % 3 === 0) {
//     document.write("<p>The number " + userInput + " is divisible by 3.</p>");
// } else {
//     document.write("<p>The number " + userInput + " is not divisible by 3.</p>");
// }




//Q NO 13:-


// var teamAName = prompt("Enter the name of Team A:");
// var teamAScore = parseInt(prompt("Enter the total score of Team A:"));

// var teamBName = prompt("Enter the name of Team B:");
// var teamBScore = parseInt(prompt("Enter the total score of Team B:"));


// if (teamAScore > teamBScore) {
//     document.write("<p>" + teamAName + " has won the game!</p>");
// } else if (teamBScore > teamAScore) {
//     document.write("<p>" + teamBName + " has won the game!</p>");
// } else {
//     document.write("<p>It's a tie between " + teamAName + " and " + teamBName + "!</p>");
// }





















//Q NO 14:-

// var a = alert('this is Pakistan');
// var b = alert(23);
// var c = alert(true);
// document.write(typeof('a'));




//Q NO 15:-




// var userInput = parseInt(prompt("Enter a number:"));


// if (userInput % 2 === 0) {
//     document.write("<p>" + userInput + " is an even number.</p>");
// } else {
//     document.write("<p>" + userInput + " is an odd number.</p>");
// }





//Q NO 16:-



// var userinp = +prompt('Enter Temperature')
// if (userinp >= 40){
//     document.write('“It is too hot outside.”')
// }else if(userinp <40 || userinp > 30){
//     document.write('“The Weather today is Normal.”')
// }else if(userinp <30 || userinp > 20){
//     document.write('“Today’s Weather is cool.”')
// }else {
//     document.write('“OMG! Today’s weather is so Cool.”')
// }

//Q NO 17:-



// var a = +prompt('Enter Value 1');
// var b = +prompt('Enter value 2');
// var o = prompt('Enter operator');
// if(o == '+'){
//     document.write( a + b)
// }else if (o == '-'){
//     document.write(a - b)
// }else if (o == '*'){
//     document.write(a * b)
// }else if (o == '/'){
//     document.write(a / b)
// }else if (o == '%'){
//     document.write(a % b)
// }


// Q NO 18:-




// var dayName = prompt("Enter the day name:");


// dayName = dayName.toLowerCase();


// if (dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || dayName === "thursday" || dayName === "friday") {
//     document.write("<p>It's a week day.</p>");
// } else if (dayName === "saturday") {
//     document.write("<p>It's weekend.</p>");
// } else if (dayName === "sunday") {
//     document.write("<p>Yay! It's a holiday.</p>");
// } else {
//     document.write("<p>Invalid day name entered.</p>");
// }


// Q NO 19:-



// var userScore = parseInt(prompt("Enter your score:"));


// if (userScore > 50) {
//     document.write("<p>You are passed.</p>");
// } else {
//     document.write("<p>Try again!</p>");
// }





// Q NO 20:-



// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));


// if (number1 > number2) {
//     document.write("The greater number of " + number1 + " and " + number2 + " is " + number1 + ".");
// } else if (number2 > number1) {
//     document.write("The greater number of " + number1 + " and " + number2 + " is " + number2 + ".");
// } else {
//     document.write("The numbers " + number1 + " and " + number2 + " are equal.");
// }


//Q NO 21:-


// function translateHelloWorld(languageCode) {
//     switch (languageCode.toLowerCase()) {
//         case "es":
//             return "¡Hola, Mundo!";
//         case "de":
//             return "Hallo, Welt!";
//         case "fr":
//             return "Bonjour, le Monde!";
//         default:
//             return "Hello, World!";
//     }
// }


// var languageCode = prompt("Enter a language code (e.g., 'es' for Spanish, 'de' for German, 'fr' for French):");


// var translatedHelloWorld = translateHelloWorld(languageCode);
// document.write("<p>" + translatedHelloWorld + "</p>");


//Q NO 22:-



// var number = parseFloat(prompt("Enter a number:"));


// if (number > 0) {
//     document.write("<p>" + number + " is a positive number.</p>");
// } else if (number < 0) {
//     document.write("<p>" + number + " is a negative number.</p>");
// } else {
//     document.write("<p>" + number + " is zero.</p>");
// }



//Q NO 23:-


// function pluralizeNoun(noun, number) {

//     if (number === 1 || number === -1) {
//         return number + " " + noun;
//     } else {

//         return number + " " + noun + "s";
//     }
// }


// var userNoun = prompt("Enter a noun:");
// var userNumber = parseInt(prompt("Enter a number:"));


// var pluralizedNoun = pluralizeNoun(userNoun, userNumber);
// document.write("<p>" + pluralizedNoun + "</p>");



//...............CHAPTER 12 TO 13...............//







//Q NO 1:-


// var userInput = parseInt(prompt("Enter a number:"));


//         if (userInput % 3 === 0) {
//             document.write("<p>The number " + userInput + " is divisible by 3.</p>");
//         } else {
//             document.write("<p>The number " + userInput + " is not divisible by 3.</p>");
//         }


//Q NO 2:-

// var userInput = parseInt(prompt("Enter a number:"));


// if (userInput % 2 === 0) {
//     document.write("<p>" + userInput + " is an even number.</p>");
// } else {
//     document.write("<p>" + userInput + " is an odd number.</p>");
// }



// //Q NO 3:-


// var age = 20; // You can set your desired age here


// if (age > 18) {
//     document.write("<p>Old enough</p>");
// } else {
//     document.write("<p>Too young</p>");
// }

// //Q NO 4:-


// var yourName = "John"; // Change this to your name

//         var userName = prompt("Enter your name:");


//         if (userName === yourName) {
//             document.write("<p>Special greeting to " + userName + "!</p>");
//         }


// //Q NO 5:-



// var userInput = parseInt(prompt("Enter a number:"));


// switch (userInput % 3) {
//     case 0:
//         document.write("<p>Number is divisible by 3.</p>");
//         break;
//     default:
//         document.write("<p>Number is not divisible by 3.</p>");
// }

// //Q NO 6:-



// var userInput = prompt("Enter a character:");

// var charCode = userInput.charCodeAt(0);


// if (charCode >= 48 && charCode <= 57) {
//     document.write("<p>The input is a number.</p>");
// } else if (charCode >= 65 && charCode <= 90) {
//     document.write("<p>The input is an uppercase letter.</p>");
// } else if (charCode >= 97 && charCode <= 122) {
//     document.write("<p>The input is a lowercase letter.</p>");
// } else {
//     document.write("<p>The input is not a number or a letter.</p>");
// }


// //Q NO 7:-




// var number1 = parseFloat(prompt("Enter the first number:"));


// var operator = prompt("Enter the operator (+, -, *, /, %):");


// var number2 = parseFloat(prompt("Enter the second number:"));


// var result;


// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         break;
//     case '-':
//         result = number1 - number2;
//         break;
//     case '*':
//         result = number1 * number2;
//         break;
//     case '/':
//         if (number2 !== 0) {
//             result = number1 / number2;
//         } else {
//             result = "Division by zero is not allowed.";
//         }
//         break;
//     case '%':
//         result = number1 % number2;
//         break;
//     default:
//         result = "Invalid operator.";
// }


// document.write("<p>Result: " + result + "</p>");




//Q NO 8:-


// var userInput = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));


// var convertedTime;
// var period;


// if (userInput >= 0 && userInput <= 2359) {

//     var hours = Math.floor(userInput / 100);
//     var minutes = userInput % 100;


//     if (hours >= 12) {
//         period = "PM";
//     } else {
//         period = "AM";
//     }


//     if (hours > 12) {
//         hours -= 12;
//     }


//     convertedTime = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');
// } else {
//     convertedTime = "Invalid time";
//     period = "";
// }


// document.write("<p>Converted time: " + convertedTime + " " + period + "</p>");



// //Q NO 9:-


// var year = parseInt(prompt("Enter a year (YYYY format):"));


// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     document.write("<p>" + year + " is a leap year.</p>");
// } else {
//     document.write("<p>" + year + " is not a leap year.</p>");
// }




// //Q NO 10:-



// var correctPassword = "mypassword"; // Replace with your correct password

// var userPassword = prompt("Enter your password:");


// if (!userPassword) {
//     document.write("<p>Please enter your password.</p>");
// } else {

//     if (userPassword === correctPassword) {
//         document.write("<p>Correct! The password you entered matches the original password.</p>");
//     } else {
//         document.write("<p>Incorrect password.</p>");
//     }
// }



//Q NO 11:-

// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }
// else {
//     document.write('you are not Fahad')
// }


//Q NO 12:-

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting)
// }
// else{
// greeting = "Good evening";
// document.write(greeting)
// }

//Q NO 13:-




// var frist = +prompt('enter Frist intiger  ')
// var sec = +prompt('Enter second integer')
// if(frist > sec ){
//     document.write(frist,'greater one')
// }
// else if(sec > frist){
//     document.write(sec,'greater one')


// }
// else if(frist === sec){
//     document.write("both are equal ")
// }
// else{
//     document.write('not an integer')
// }


//Q NO 14:-

// var num  = +prompt('Enter a number')
// if(num>0){
//     document.write('The number is positive')

// }
// else if(num<0){
//     document.write("The number is negative")

// }
// else if(num=== 0){
//     document.write('The number is 0')
// }
// else {
//     document.write('NaN')
// }




//Q NO 15:-



// var currentHour = parseInt(prompt("Enter the current hour (in 24-hour clock format):"));

// if (currentHour >= 6 && currentHour < 9) {
//     document.write("<p>Breakfast is served.</p>");
// } else if (currentHour >= 11 && currentHour < 13) {
//     document.write("<p>Time for lunch.</p>");
// } else if (currentHour >= 17 && currentHour < 20) {
//     document.write("<p>It's dinner time.</p>");
// } else {
//     document.write("<p>Sorry, you'll have to wait, or go get a snack.</p>");
// }


//Q NO 16:-


// var myVariable = 42; 


// var dataType = typeof myVariable;

// switch (dataType) {
//     case "number":
//         document.write("<p>The type of the variable is 'number'.</p>");
//         break;
//     case "string":
//         document.write("<p>The type of the variable is 'string'.</p>");
//         break;
//     case "boolean":
//         document.write("<p>The type of the variable is 'boolean'.</p>");
//         break;
//     case "undefined":
//         document.write("<p>The variable is 'undefined'.</p>");
//         break;
//     default:
//         document.write("<p>The type of the variable is not recognized.</p>");
// }


//Q NO 17:-





//Q NO 18:-




//Q NO 19:-




//Q NO 20:-







//..........CHAPTER 14 TO 1............//










//Q NO 1:-
//Q NO 2:-
//Q NO 4:-
//Q NO 5:-
//Q NO 6:-
//Q NO 7:-
//Q NO 8:-
//Q NO 9:-
//Q NO 10:-
//Q NO 11:-
//Q NO 12:-
//Q NO 13:-
//Q NO 14:-
//Q NO 15:-
//Q NO 16:-
//Q NO 17:-
//Q NO 18:-
//Q NO 19:-
//Q NO 20:-
//Q NO 21:-
//Q NO 22:-
// firebase.database().ref('todos').on('child_added',function(data){
//     var list = document.createElement('li')
//   var displayList = document.createTextNode(data.val().value)
//   list.appendChild(displayList)
//   var getList = document.getElementById('list')
//   getList.appendChild(list)
//   var dltbtn = document.createElement('button')
//   var dltBtnText = document.createTextNode('Delete')
//   dltbtn.appendChild(dltBtnText)
//   list.appendChild(dltbtn)
//   dltbtn.setAttribute('onclick','delete1(this)') 
//   dltbtn.setAttribute('id',data.val().key)
//   var editBtn = document.createElement('button')
//   var editBtnText = document.createTextNode('Edit')
//   editBtn.appendChild(editBtnText)
//   list.appendChild(editBtn)
//   editBtn.setAttribute('onclick','edit(this)')
//   editBtn.setAttribute('id',data.val().key)
// })


// function add(){
//   var getInput = document.getElementById('todo-items')
//   var a = firebase.database().ref('todos')
//   var key = a.push().key
//   var obj = {
//       value : getInput.value,
//       key : key
//   }
//   a.child(key).set(obj)

//   getInput.value = ""
// }

// function edit(e){
//   var pr = prompt('enter the updated value',e.parentNode.firstChild.nodeValue)
//   var obj = {
//       key : e.id,
//       value : pr
//   }
//   firebase.database().ref('todos').child(e.id).set(obj)
//   e.parentNode.firstChild.nodeValue= pr
// }

// // function deleted(){
// //     var list = document.getElementById('list')
// //     list.innerHTML = ""
// // }

// function delete1(e){
//   firebase.database().ref('todos').child(e.id).remove()
//   // console.log(e)
//   e.parentNode.remove()
// }
setInterval(updatetime,1000)
function updatetime(){
  let list = document.getElementById('list')
  list.innerHTML = new Date()
}