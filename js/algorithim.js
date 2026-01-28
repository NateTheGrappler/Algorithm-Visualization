//---------------------------------------------The Actual Visualization Class--------------------------------------------------
class algorithimVisualizer{

    //Constructor which defines elements and starts functions
    constructor()
    {
        //array and other html buttons
        this.array = [];
        this.arrayContainer = document.getElementById("arrayShowcase");
        this.minVal = document.getElementById("minValue");
        this.maxVal = document.getElementById("maxValue");
        this.numberOfElements = document.getElementById("nInput");

        //status
        this.comparisions = 0;
        this.swaps = 0;
        this.animationSpeed = 50;
        this.isSorting = false;

        //intital functions
        this.init();
        this.setUpButtons();
    }

    //------------------------------------functions to call on creation------------------------
    init()
    {
        this.generateArray();
        this.renderArray();
    }

    setUpButtons()
    {

    }

    //------------------------------------Array related functions-----------------------------
    generateArray()
    {
        this.array = [];
        const min = Math.ceil(this.minVal.value); 
        const max = Math.ceil(this.maxVal.value); 

        //create a random number of n elements in rand from min to max
        for(let i = 0; i < this.numberOfElements.value; i++)
        {
            //basically generate a random float from 0 to 1, then multiply it by the possible number of digits to create, then also add the min to it so it is never below the min
            this.array.push(Math.floor((Math.random() * max - min + 1) + min));
        }

        console.log(this.array);
    }

    renderArray() 
    {
        //clear the inner content of the arrayContainer
        this.arrayContainer.innerHTML = '';

        //force a reflow to ensure container has dimensions
        this.arrayContainer.getBoundingClientRect();

        //get the height of the container and the max array value
        const containerStyle = window.getComputedStyle(this.arrayContainer);
        const containerHeight = parseInt(containerStyle.height);
        const containerWidth = parseInt(containerStyle.width);
        const maxValue = Math.max(...this.array);
        
        //loop over each of the values in the array to generate a bar for them
        this.array.forEach((value, index) => {
            const element = document.createElement('div');
            element.className = 'array-element';
            element.id = `element-${index}`;
            
            // Calculate height based on container height
            const height = (value / maxValue) * (containerHeight * 0.95); // 95% of container height
            element.style.height = `${height}px`;
            
            // Calculate width based on number of elements
            const elementWidth = Math.max(1, containerWidth / this.array.length);
            element.style.width = `${elementWidth}px`;
            
            //add the element to the arrayContainer
            this.arrayContainer.appendChild(element);
        });
    }


    //-----------------------------------Button Function Calls--------------------------------
    setUpButtons()
    {
        //the generate new array button
        document.getElementById("generateButton").addEventListener('click', ()=>
        {
            this.generateButtonClick();
        })
    }
    generateButtonClick()
    {
        //get the min and max value just in case they have changed
        this.minVal = document.getElementById("minValue");
        this.maxVal = document.getElementById("maxValue");

        //generate the array and also rerender it
        this.generateArray();
        this.renderArray();
    }

}


//when loading, create the class with all of the information
document.addEventListener("DOMContentLoaded", ()=>
{
    new algorithimVisualizer();
});


//----------------------------------Code that handles the top portion of the array container-----------------------------------
function hideHeader()
{
    console.log("ran function");
    const mainHeader = document.getElementById("mainHeader");
    const mainContent = document.querySelector('.mainContent');
    let   headerStyle = window.getComputedStyle(mainHeader);

    if(headerStyle.display === 'none')
    {
        mainHeader.style.display = "flex";
        mainContent.style.height = 'calc(100vh - 205px)'
    }
    else if(headerStyle.display === 'flex')
    {
        mainHeader.style.display = 'none';
        mainContent.style.height = '100vh';     
    }

}