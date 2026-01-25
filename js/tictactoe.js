//set up the board and get all board buttons and other vars
const pvpButton = document.getElementById("PVP");
const pvrButton = document.getElementById("PVR");
const undoButton = document.getElementById("Undo");
const redoButton = document.getElementById("Redo");
let board = ["None", "None", "None", "None", "None", "None", "None", "None", "None"];
let redoMoveList = new Array();
let undoMoveList = new Array();
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
        undoMoveList.push(buttonIndex);
        document.getElementById("gameText").textContent = "Player O's Turn";
    }
    else
    {
        //set button to O if odd and update board
        buttonImage.src = 'Images/oTicTacToe.png';
        board[buttonIndex] = "O";
        undoMoveList.push(buttonIndex);
        document.getElementById("gameText").textContent = "Player X's Turn";
    }


    //check win/draw and respond
    let hasWon = checkWin();
    checkDraw();
    if(hasWon)
    {
        //loop over board and highlight wins/disable all buttons
        for(let i = 0; i<9; i++)
        {
            //set background to hold
            if(board[i] == "WIN")
            {
                //update background to gold
                boardButtons[i].style.backgroundColor = "gold";
            }

            //update game text
            if(turnCount % 2 == 0)
            {
                document.getElementById("gameText").textContent = "Player X Wins!";
            }
            else if(turnCount % 2 == 1)
            {
                document.getElementById("gameText").textContent = "Player O Wins!";
            }

            //disable button
            boardButtons[i].disabled = true;
        }
    }

    //update the undo/redo move situation
    undoOrRedoUpdate();

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
        undoButton.addEventListener('click', undoButtonClick);
        undoButton.style.backgroundColor = "lightgray";
    }
    if(redoButton)
    {
        redoButton.addEventListener('click', redoButtonClick);
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

        //change game text
        document.getElementById("gameText").textContent = "Wow! A Draw!";

    }

}
function undoOrRedoUpdate()                                                             //visual update of the undo/redo buttons
{
    console.log(undoMoveList.length)
    if(undoMoveList.length > 0)
    {
        //enable undo move
        undoButton.style.backgroundColor = `rgb(${178}, ${176}, ${232})`;
        undoButton.disabled = false;
    }
    else
    {
        //disable the button
        undoButton.disabled = true;
        undoButton.style.backgroundColor = "lightgray";
    }
    if(redoMoveList.length > 0)
    {
        //enable redo move
        redoButton.style.backgroundColor = `rgb(${178}, ${176}, ${232})`;
        redoButton.disabled = false;
    }
    else
    {
        //disable the button
        redoButton.disabled = true;
        redoButton.style.backgroundColor = "lightgray";
    }
}
//---------------------------------Side Button function--------------------------

function resetBoard()                                                                   //Resets the game to be played again
{
    
    //set turn count back to zero and reset the board
    turnCount = 0;
    board = ["None", "None", "None", "None", "None", "None", "None", "None", "None"];
    undoMoveList = new Array();
    redoMoveList = new Array();

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

    //reset game text
    document.getElementById("gameText").textContent = "Select A Mode!";

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

    document.getElementById("gameText").textContent = "Player Vs Player!";

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

    document.getElementById("gameText").textContent = "Player Vs Robot!";

    //set match type and also change button colors
    matchType = "PVR";
    const pvpButton = document.getElementById("PVP");
    clickedButton.style.backgroundColor = "lightgray";
    pvpButton.style.backgroundColor = "lightgray";

    //disable the buttons
    pvpButton.disabled = true;
    clickedButton.disabled = true;
}
function undoButtonClick()
{
    if(undoMoveList.length > 0)
    {
        //get the button that corresponds to the last index in the undo move list
        const buttonToUndo = boardButtons[undoMoveList[undoMoveList.length-1]];
        const buttonImg = buttonToUndo.querySelector(".buttonImage");

        //add it to the redo move list and then remove it
        redoMoveList.push(undoMoveList[undoMoveList.length-1]);
        undoMoveList.pop();
        
        //clear the button's appearance
        buttonToUndo.disabled = false;
        buttonImg.src = "";
        buttonImg.style.display = "none";

        //turn back the turn count back by one and update text visual
        turnCount -= 1;
        if(turnCount % 2 == 0) {   document.getElementById("gameText").textContent = "Player X's Turn"; }
        else                   {   document.getElementById("gameText").textContent = "Player O's Turn"; }

        undoOrRedoUpdate()  
    }
}
function redoButtonClick()
{
    console.log("Ran redo")
    if(redoMoveList.length > 0)
    {
        //get button and button image
        const buttonToRedo = boardButtons[redoMoveList[redoMoveList.length-1]];
        const buttonImage = buttonToRedo.querySelector(".buttonImage");
        
        //change up button style
        buttonToRedo.disabled = true;
        buttonImage.style.display = "inline-flex";


        //check turn count and then update image based on turn
        if(turnCount % 2 == 0)
        {
            //set button to X if even and update board
            buttonImage.src = 'Images/xTicTacToe.png';
            board[redoMoveList.length-1] = "X";
            undoMoveList.push(redoMoveList.length-1);
            document.getElementById("gameText").textContent = "Player O's Turn";
        }
        else
        {
            //set button to O if odd and update board
            buttonImage.src = 'Images/oTicTacToe.png';
            board[redoMoveList.length-1] = "O";
            undoMoveList.push(redoMoveList.length-1);
            document.getElementById("gameText").textContent = "Player X's Turn";
        }

        //remove the button from the list and increment turn
        redoMoveList.pop();
        turnCount++;
        undoOrRedoUpdate()  

    }
}