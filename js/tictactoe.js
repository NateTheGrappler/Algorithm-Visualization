//set up the board and get all board buttons and other vars
const pvpButton = document.getElementById("PVP");
const pvrButton = document.getElementById("PVR");
const undoButton = document.getElementById("Undo");
const redoButton = document.getElementById("Redo");
let board = ["None", "None", "None", "None", "None", "None", "None", "None", "None"];
const boardButtons = document.getElementById("containerDiv").querySelectorAll('button');
let turnCount = 0;
let matchType = "None";



//function to navigate back to alg page
function goBack()                                                                       //goes back to the previous page
{
    console.log("Went Back");
    window.history.back();
}

function handleBoardClick()                                                             //function that runs whenever a person makes a move
{
    //get the button that was clicked and the inner image
    const clickedButton = this;
    const buttonImage = clickedButton.querySelector(".buttonImage");
    

    //check turn count and then update image based on turn
    if(turnCount % 2 == 0)
    {
        //set button to X if even
        buttonImage.src = 'Images/xTicTacToe.png';
    }
    else
    {
        //set button to O if odd
        buttonImage.src = 'Images/oTicTacToe.png';
    }

    //increment the turn count
    turnCount++;

    //update the image display, then disable the button
    buttonImage.style.display = "inline-flex";
    clickedButton.disabled=true;
}

document.addEventListener("DOMContentLoaded", function(){                               //function that is called upon entry into the page

    //check to see if found then add function
    if(pvpButton)
    {
        pvpButton.addEventListener('click', playVsFriend);
    }
    if(pvrButton)
    {
        pvrButton.addEventListener('click', playAgainstBot);
    }
    if(undoButton)
    {
        //pvrButton.addEventListener('click', playAgainstBot);
        undoButton.style.backgroundColor = "lightgray";
    }
    if(redoButton)
    {
        //pvrButton.addEventListener('click', playAgainstBot);
        redoButton.style.backgroundColor = "lightgray";
    }


    //loop over the buttons
    boardButtons.forEach(button =>
    {
        //disable the button
        button.disabled = true;

        //also add in the click event to each button
        button.addEventListener('click', handleBoardClick);
    });
})

//---------------------------------Side Button function--------------------------

function resetBoard()                                                                   //Resets the game to be played again
{
    
    //set turn count back to zero and reset the board
    turnCount = 0;
    board = ["None", "None", "None", "None", "None", "None", "None", "None", "None"];

    //get rid of all images and disable all buttons
    boardButtons.forEach(button =>{

        const buttonImage = button.querySelector('.buttonImage');
        buttonImage.src = "";

        //disable all buttons and disappear all images
        button.disabled = true;
        buttonImage.style.display = "none";
    })

    //reset all of the avaliable buttons
    pvpButton.style.backgroundColor  = `rgb(${178}, ${176}, ${232})`;
    pvpButton.disabled = false;
    pvrButton.style.backgroundColor  = `rgb(${178}, ${176}, ${232})`;
    pvrButton.disabled = false;
    undoButton.style.backgroundColor = "lightgray";
    redoButton.style.backgroundColor = "lightgray";
}
function playVsFriend(event)
{
    console.log("CLICKED");
    const clickedButton = event.target || this;

    //enable all buttons
    boardButtons.forEach(button =>{

        button.disabled = false;
    });

    //set match type and also change button colors
    matchType = "PVP";
    const pvrButton = document.getElementById("PVR");
    clickedButton.style.backgroundColor = "lightgray";
    pvrButton.style.backgroundColor = "lightgray";

    //disable the buttons
    pvrButton.disabled = true;
    clickedButton.disabled = true;

}
function playAgainstBot(event)
{
    console.log("CLICKEDD");
    const clickedButton = event.target || this;

    //enable all buttons
    boardButtons.forEach(button =>{

        button.disabled = false;
    });

    //set match type and also change button colors
    matchType = "PVR";
    const pvpButton = document.getElementById("PVP");
    clickedButton.style.backgroundColor = "lightgray";
    pvpButton.style.backgroundColor = "lightgray";

    //disable the buttons
    pvpButton.disabled = true;
    clickedButton.disabled = true;
}