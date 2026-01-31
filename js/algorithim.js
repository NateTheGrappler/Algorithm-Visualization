//the dictionary that holds all of the data to fill in 
const algorithmDictionary = 
{   'bubble sort' : {name : 'Bubble Sort', timeComplexity : "O(n^2)", spaceComplexity : "O(1)", shortDescription : "The starter algorithm that is probably the most well known. It is one of the slowest, and generally used for smaller data sets", urlPython: "Images/bubbleSort/python.png", urlJS : "Images/bubbleSort/javascript.png", urlCPP : "Images/bubbleSort/cpp.png",
    fullDescription : "This algorithm takes starts at the first element in the array, and then checks the adjacent one to see which one is bigger. It then swaps the first element if it is bigger than the one in front of it. Otherwise, it moves on to the adjacent element and checks the one that" +
    "comes after. It cycles through the entire array like this, until it gets to the largest element in the array and takes it all the way to the back. It does this for each element until all of them are in order."}
};


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
        this.speedSlider = document.getElementById("speedSlider");
        this.arrayName = "";
        this.algData = algorithmDictionary[""];

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
        this.getArrayName();
        this.fillInDescription();
    }
    fillInDescription()
    {
        //get all of the html elements you want to change
        const headerTitle       = document.getElementById("headerText");
        const headerDesc        = document.getElementById("headerDescription");
        const windowDescription = document.getElementById("fullDescription");
        const timeComplexity    = document.getElementById("timeComplexity");
        const spaceComplexity   = document.getElementById("spaceComplexity");

        //get the information from the big map
        const algorithm = algorithmDictionary[this.arrayName];
        this.algData = algorithm;
        
        //fill in all of the information
        headerTitle.textContent       = algorithm.name;       
        headerDesc.textContent        = algorithm.shortDescription;
        windowDescription.textContent = algorithm.fullDescription;
        timeComplexity.textContent    = "Time Complexity: " + algorithm.timeComplexity;
        spaceComplexity.textContent   = "Space Complexity: " + algorithm.spaceComplexity;
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
    getArrayName()
    {
        const urlParams = new URLSearchParams(window.location.search);
        this.arrayName = decodeURIComponent(urlParams.get('name') || "");
        //console.log(this.arrayName);
    }
    async sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    //-----------------------------------Button Function Calls--------------------------------
    setUpButtons()
    {
        //get all of the top buttons
        const helpWindow = document.getElementById("helpWindow");
        const inputWindow = document.getElementById("inputWindow");
        const codeWindow = document.getElementById("codeWindow");
        const descriptionWindow = document.getElementById("mainDescriptionWindow");

        //add a click to all of them
        document.getElementById("helpButton").addEventListener('click', () => {handleWindowClick(helpWindow)});
        document.getElementById("descriptionButton").addEventListener('click', () => {handleWindowClick(descriptionWindow)});
        document.getElementById("showCodeButton").addEventListener('click', () => {handleWindowClick(codeWindow)})
        document.getElementById("inputButton").addEventListener('click', () => {handleWindowClick(inputWindow)});
        document.getElementById("closeHelp").addEventListener('click', () => {handleWindowClick(helpWindow)});
        document.getElementById("closeCode").addEventListener('click', () => {handleWindowClick(codeWindow)});
        document.getElementById("closeInput").addEventListener('click', () => {handleWindowClick(inputWindow)});
        document.getElementById("closeDescription").addEventListener('click', () => {handleWindowClick(descriptionWindow)});
        function handleWindowClick(window)
        {
            console.log("RAN HERE");
            if(window.style.display == "none")  { window.style.display = "flex"; }
            else                                { window.style.display = "none"; }
        }

        //the generate new array button
        document.getElementById("generateButton").addEventListener('click', ()=>
        {
            this.generateButtonClick();
        });
        document.getElementById("backButton").addEventListener('click', ()=>{
            backButtonClick();
        });

        //the buttons in the show code window
        document.getElementById("pythonButton").addEventListener('click', () =>{
            const image = document.getElementById("codeExampleImage");
            image.src = this.algData.urlPython;
        });
        document.getElementById("jsButton").addEventListener('click', () =>{
            const image = document.getElementById("codeExampleImage");
            image.src = this.algData.urlJS;
        });
        document.getElementById("cppButton").addEventListener('click', () =>{
            const image = document.getElementById("codeExampleImage");
            image.src = this.algData.urlCPP;
        });

        //the generate array window button
        document.getElementById("generateInputButton").addEventListener('click', ()=>{

            //parse and get the input from the user
            const inputBar = document.getElementById('arrayInput');
            const successMessage = document.getElementById('successMessage');
            let newArray = inputBar.value.split(",");
            let intArray = [];

            //loop over each of the items in the array to check if they are an int
            newArray.forEach((item, index) =>{
                const trimmedItem = item.trim();  
                if (/^-?\d+$/.test(trimmedItem)) 
                {
                    console.log(`Item at index ${index} is an integer: ${trimmedItem}`);
                    intArray.push(parseInt(trimmedItem, 10));
                    
                } 
                else 
                {
                    successMessage.textContent = "Unable to successfully generate last inputted array";
                    return;
                }            
            })

            //update message to reflect success or not
            successMessage.textContent = "Your last inputted array was successfully generated."
            this.array = intArray;
            this.minVal.value = Math.min(...intArray);
            this.maxVal.value = Math.max(...intArray);
            this.numberOfElements.value = intArray.length;
            this.renderArray();

        })

        //the lower control buttons
        document.getElementById("startButton").addEventListener('click', () =>
        {
            if(!this.isSorting)
            {
                this.bubbleSort();
            }
        })
        this.speedSlider.addEventListener('input', (e) => {
            this.animationSpeed = 100 - e.target.value;
        });


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

    //---------------------------------------BubbleSort--------------------------------------
    async bubbleSort()
    {
        //update/check the sorting bool
        if(this.isSorting) {return;} 
        this.isSorting = true;

        //actual logic for array
        let n = this.array.length;
        for(let i = 0; i < n-1; i++)
        {
            for(let j = 0; j < n-i-1; j++)
            {
                if(await this.compareElement(j, j+1))
                {
                    await this.swapElement(j, j+1);
                }
            }
        }
        console.log("Sorting has ended");
        console.log(this.array);
        this.isSorting=false
    }

    async compareElement(i, j)
    {
        const elementI = document.getElementById(`element-${i}`);
        const elementJ = document.getElementById(`element-${j}`);

        elementI.classList.add('comparing');
        elementJ.classList.add('comparing');

        //this.comparisions ++;
        //await this.sleep(this.animationSpeed);

        elementI.classList.remove('comparing');
        elementJ.classList.remove('comparing');

        return this.array[i] > this.array[j];

    }
    async swapElement(i, j)
    {
        //if(i === j) {return;}

        const elementI = document.getElementById(`element-${i}`);
        const elementJ = document.getElementById(`element-${j}`);

        elementI.classList.add('swapping');
        elementJ.classList.add('swapping');

        //await this.sleep(this.animationSpeed * 2);

        let largerValue    = this.array[i];
        let smallerValue   = this.array[j];
        this.array[i]      = smallerValue;
        this.array[j]      = largerValue;

        // Animate the swap
        const tempHeight = elementI.style.height;
        elementI.style.height = elementJ.style.height;
        elementJ.style.height = tempHeight;

        //await this.sleep(this.animationSpeed * 2); 

        elementI.classList.remove('swapping');
        elementJ.classList.remove('swapping');
    }

}


//--------------------------------------------------Non Class Section----------------------------------------------------------

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
function backButtonClick()
{
    window.history.back();
}

//------------------------------------------------The Draggable Window pop ups-------------------------------------------------

//get the tops of the windows, the ones you click and drag on
const descriptionTop = document.getElementById("descriptionTopBar");
const helpTop = document.getElementById("helpTopBar");
const codeTop = document.getElementById("codeTopBar");
const inputTop = document.getElementById("inputTopBar");

const descriptionBody = document.getElementById("descriptionBody");
const helpBody = document.getElementById("helpBody");
const codeBody = document.getElementById("codeBody");
const inputBody = document.getElementById("inputBody");

const descriptionName = document.getElementById("descriptionName");

let currentZIndex = 10;

descriptionTop.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});
helpTop.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});
codeTop.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});
inputTop.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});
descriptionBody.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});
helpBody.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});
codeBody.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});
inputBody.addEventListener("mousedown", (e) =>{
    handleWindowDrag(e);
});


function handleWindowDrag(e){
    //get the parent element of the thing that is clicked on
    let parentElement = e.target.parentElement;
    let parentBox = parentElement.getBoundingClientRect();

    //set previous position
    let prevX = e.clientX;
    let prevY = e.clientY;

    //set the window element to go on top of all others
    currentZIndex ++;
    parentElement.style.zIndex = currentZIndex;

    //define the functions to handle the other event listeners
    function mouseUpEventHandler()
    {
        //remove the event handlers so they dont clash
        window.removeEventListener("mousemove", mouseMoveEventHandler);
        window.removeEventListener("mouseup", mouseUpEventHandler)
    }
    function mouseMoveEventHandler(e)
    {
        //different between window object's position and new mouse potion (windowPos - mousePos)
        let movementX = prevX - e.clientX;
        let movementY = prevY - e.clientY;

        //get the actual coordinate position
        let x = parentBox.left - movementX;
        let y = parentBox.top - movementY;

        //checks to not go out of bounds
        if(x < 0)   {x=0;}
        if(y < 0)   {y=0;}
        if(x > window.innerWidth - parentBox.width) { x = window.innerWidth - parentBox.width;}
        if(y > window.innerHeight - parentBox.height) { y =  window.innerHeight - parentBox.height;}

        //set the coordinate
        parentElement.style.top = y+"px";
        parentElement.style.left = x+"px";
    }

    //add the other event listeners
    window.addEventListener("mousemove", mouseMoveEventHandler);
    window.addEventListener("mouseup", mouseUpEventHandler);
}