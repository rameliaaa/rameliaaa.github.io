// keep track of possible selections 
const options = {"ROCK", "PAPER", "SCISSORS"};
// find our user selection buttons
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const rockscissors = document.querySelector("#scissors-button");
// find selection and result sections
const selection = document.querySelector("#selection");
const result = document.querySelector("#result");

// write event listerners for user selction
// when they click we want to send the correct array index
rockButton.addEventListener ("click", function(){
 checkResult (0);
});
paperButton.addEventListener ("click", function(){
 checkResult (1);
});

rockscissors.addEventListener ("click", function(){
 checkResult (2);
});

function checkResult(mySelection){
    console.log(mySelction);
    // find user selction from array
    let userSelction = options [mySelction];
    console.log(userSelection)
    // find computer selction
    let randomSelect = Math.floor (Math.random() * 3);
    console.log(randomSelct);
    let computerSelction = options [randomSelct];
    // display both user and computers selction in the DOM
    selection.innerHTML =
    <P></P> id=`my-choice`>
    <span class="$[userSelection.toLowerCase()"
}