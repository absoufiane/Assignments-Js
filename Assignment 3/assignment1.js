// Function the game 
function game() {
    var num = parseInt(Math.random() * 10 + 1);  //Num is a variable so that the number is between 10 and 1
    var inputNumber = prompt("input a guess number between 1 to 10"); 
    if(isNaN(inputNumber)) {  //testing the user write number or not
    alert("Please, write a Number");
    } else {
        if(num == inputNumber) {
            alert("Good Work Number is = " + num);
        } else {
            alert("Not matched Number is = " + num);
        }
    }
}