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

        //console.log(`Checking: ${actualName} for "${typedInput}"`); // Debug log

        //see if the search is contained in the button names
        if(actualName === '' || actualName.includes(typedInput))
        {
            //change the button to remain as visible
            button.style.display = 'inline-block';
            visibleCount++;
            console.log(`✓ ${actualName} matches`); // Debug log
        }
        else
        {
            //make the button invisible
            button.style.display = 'none';
            //console.log(`✗ ${actualName} doesn't match`); // Debug log
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