//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded",function() { // is a code that an event is listening( Dom to be loded and after to to function)
let buttons = document.getElementsByTagName("button");//tag name you are looking for is button use to return all elements found in array by using for

for (let button of buttons){ // new kind 
    button.addEventListener("click",function(){//this listen for that button to be clicked (code inside the block will run)

        if ( this.getAttribute("data-type")==="submit"){//checking the value of data type and THISrefers to the button that has been just clicked
            alert("You clicked Submit!");//if is submit you will receive a mesage for submit
        } else {
            let gameType = this.getAttribute("data-type");//send the game type to the value of that atribute and will tell you what game type you want to run
            runGame(gameType);
        }
     })
   }
   
   runGame("addition")


})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    // create two random numbers between 1 and 25
    let num1=Math.floor(Math.random() * 25) + 1;
    let num2=Math.floor(Math.random() * 25) + 1;
     
    if (gameType==="addition") {
        displayAdditionQuestion(num1,num2);
    } else{
        alert(`Unknown game type : ${gameType}`);
        throw`Unknown game type : ${gameType} Aborting!`;
    }

}
function checkAnswer(){

}

function calculateCorectAnswer(){
    
}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(operand1,operand2){
    
document.getElementById('operand1').textContent=operand1;
document.getElementById('operand2').textContent=operand2;
document.getElementById('operator').textContent="+";


}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}