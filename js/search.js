//get a list of the buttons and also the search bar itself
const searchBar = document.getElementById("search-input");
const buttons = document.getElementById("buttonContainerDiv").querySelectorAll('button')

//add in an event listener to the search bar
searchBar.addEventListener('input', function(e)
{
    //get the thing that was typed in
    const typedInput = e.target.value.toLowerCase().trim();

    let visibleCount = 0;

    //loop through the buttons and see what their name is
    buttons.forEach(button =>
    {
        //get the inner span of the button and real name
        const titleSpan = button.querySelector(".algTitle");
        const actualName = titleSpan.textContent.toLowerCase().trim();


        //see if the search is contained in the button names
        if(actualName === '' || actualName.includes(typedInput))
        {
            //change the button to remain as visible
            button.style.display = 'inline-block';
            visibleCount++;
        }
        else
        {
            //make the button invisible
            button.style.display = 'none';
        }

    });

    //show that the results given are empty
    if(visibleCount === 0)
    {
        //tell no results were found
        console.log("No results were found");
        document.getElementById("noResultsDiv").style.display = "block";
    }
    else
    {
        document.getElementById("noResultsDiv").style.display = "none";
    }

});

//prevent page reload on search
document.querySelector('.searchBar').addEventListener('submit', function(e) {
    e.preventDefault();
});


//Send over other query data to the next side

//for each button add in the click handler function
buttons.forEach(button => {
    //add event listener
    button.addEventListener("click", ()=>{
        const titleSpan = button.querySelector(".algTitle");
        const actualName = titleSpan.textContent.toLowerCase().trim();
        handleClick(actualName)
    }) ;
});

//function to handle sending data dn redirecting
function handleClick(functionName)
{
    console.log(functionName);
    window.location.href = `algorithim.html?name=${encodeURIComponent(functionName)}`;
}