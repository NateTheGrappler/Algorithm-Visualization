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
    //get the button that was clicked and the inner image, and index of said button
    const clickedButton = this;
    const buttonImage = clickedButton.querySelector(".buttonImage");
    let buttonIndex = clickedButton.id.slice(-1) - 1;

    //check turn count and then update image based on turn
    if(turnCount % 2 == 0)
    {
        //set button to X if even and update board
        buttonImage.src = 'Images/xTicTacToe.png';
        board[buttonIndex] = "X";
    }
    else
    {
        //set button to O if odd and update board
        buttonImage.src = 'Images/oTicTacToe.png';
        board[buttonIndex] = "O";
    }


    //check win/draw and respond
    checkDraw();
    let hasWon = checkWin();
    if(hasWon)
    {
        //loop over board and highlight wins/disable all buttons
        for(let i = 0; i<9; i++)
        {
            if(board[i] == "WIN")
            {
                //update background to gold
                boardButtons[i].style.backgroundColor = "gold";
            }

            //disable button
            boardButtons[i].disabled = true;
        }
    }

    //update the image display, then disable the button, and increment turn
    buttonImage.style.display = "inline-flex";
    clickedButton.disabled=true;
    turnCount++;
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


function checkWin()                                                                     //Win condition checker
{
    //loop over the three vertical/horizontal win conditions
    for(let i = 0; i<9; i+=3)
    {
        if(board[i] == board[i+1] && board[i+1] == board[i+2] && board[i]!="None")
        {
            console.log("Horizontal");
            console.log(board[i]);
            console.log(board[i+1]);
            console.log(board[i+2]);
            //set the winners to reflect win and return true
            board[i]   = "WIN"
            board[i+1] = "WIN"
            board[i+2] = "WIN"
            return true;
        }
    }

    //check over the horizontal positions as well
    for(let i = 0; i<3; i++)
    {
        if(board[i] == board[i+3] && board[i+3] == board[i+6] && board[i]!="None")
        {
            console.log("Vertical");
            //set the winners to reflect win and return true
            board[i]   = "WIN"
            board[i+3] = "WIN"
            board[i+6] = "WIN"
            return true;
        }
    }

    //also check diagonal positions
    if(board[0] == board[4] && board[4] == board[8] && board[0]!="None")
    {
        console.log("DIAGONAL");
        //set the winners to reflect win and return true
        board[0]   = "WIN"
        board[4] = "WIN"
        board[8] = "WIN"
        return true;
    }
    if(board[2] == board[4] && board[4] == board[6] && board[2]!="None")
    {
        console.log("DIAGONAL");
        //set the winners to reflect win and return true
        board[2] = "WIN"
        board[4] = "WIN"
        board[6] = "WIN"
        return true;
    }


    return false;

}
function checkDraw()                                                                    //Cant play anymore checker
{
    if(!board.includes("None"))
    {
        //set all buttons to disabled, and set background to darkblue
        boardButtons.forEach(button =>{
            button.style.backgroundColor = "darkgray"
            button.disabled = true;
        })
    }

}
//---------------------------------Side Button function--------------------------

function resetBoard()                                                                   //Resets the game to be played again
{
    
    //set turn count back to zero and reset the board
    turnCount = 0;
    board = ["None", "None", "None", "None", "None", "None", "None", "None", "None"];

    //get rid of all images and disable all buttons
    boardButtons.forEach(button =>{

        //reset button look
        const buttonImage = button.querySelector('.buttonImage');
        buttonImage.src = "";
        button.style.backgroundColor = "transparent";

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
function playVsFriend(event)                                                            //updates the ui for friend play
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
function playAgainstBot(event)                                                          //updates the ui for robot play
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