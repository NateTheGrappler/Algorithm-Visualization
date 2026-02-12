//the dictionary that holds all of the data to fill in 
const algorithmDictionary = 
{   'bubble sort' : {name : 'Bubble Sort : O(n^2) : O(1)', timeComplexity : "O(n^2)", spaceComplexity : "O(1)", shortDescription : "The starter algorithm that is probably the most well known. It is one of the slowest, and generally used for smaller data sets", urlPython: "Images/bubbleSort/python.png", urlJS : "Images/bubbleSort/javascript.png", urlCPP : "Images/bubbleSort/cpp.png",
    fullDescription : "This algorithm takes starts at the first element in the array, and then checks the adjacent one to see which one is bigger. It then swaps the first element if it is bigger than the one in front of it. Otherwise, it moves on to the adjacent element and checks the one that" +
    "comes after. It cycles through the entire array like this, until it gets to the largest element in the array and takes it all the way to the back. It does this for each element until all of them are in order."},
    
    'merge sort' : {name : 'Merge Sort : O(nlog(n)) : O(n)', timeComplexity : "O(nlog(n))", spaceComplexity : "O(n)", shortDescription : "Recursively splits the data into smaller halves and then merges them while sorting. Very fast in theory, but slower on smaller data sets due to large space complexity.", urlPython: "Images/mergeSort/python.png", urlJS : "Images/mergeSort/javascript.png", urlCPP : "Images/mergeSort/cpp.png",
    fullDescription : "Merge sort recursively calls itself in a log(n) fashion. It first takes the array, finds it's middle, and then splits the array into two new smaller half arrays. It then continuously calls this same splitting function on these other halves. This is done " +
    "until there is a n number of lists all containing a single one of the elements. This is when the function has to go forth to call it's helper function, as a means to merge the arrays. This function uses a while loop in order to iterate over the two arrays inputted, and tests each element to see which is larger or smaller. It does so until the entire lists have been gone through, which is " + 
    "the explanation for the n part of the nlog(n) time complexity. However, after merging, it looks through the arrays to see if there are any other left over values, and appends them to the main return array. Returning a fully sorted array."},

    'quick sort' : {name : 'Quick Sort : O(nlog(n)) : O(log(n))', timeComplexity : "O(nlog(n))", spaceComplexity : "O(log(n))", shortDescription : "Sets a pivot element and then sorts based on smaller or larger than said pivot. It does so recursively, working like merge sort, but just in place.", urlPython: "Images/quickSort/python.png", urlJS : "Images/quickSort/javascript.png", urlCPP : "Images/quickSort/cpp.png", 
    fullDescription: "This sorting algorithm works very similarly to merge sort, in the sense that it recursively splits the array into halves. However, where quick and merge sort differ is in their space complexity. Quick sort sorts the array in place. Meaning it does not need to create a new array constantly in order to sort the array. This is done by setting the last element of the array to"+
    " a 'pivot' element. Then, you create two indexes, j = 0, and i = -1. You compare the element at index j to that of the pivot element, if the pivot element is smaller, you increment j and try again. However, if the element is smaller than j, you increment i by one, and then swap the elements at index j and i. When j has run through the loop, you take the pivot element and put it in the index of i+1. " +
    "This makes it so all elements less than the pivot are on the left, and all larger ones are on the right. You then split the array in two, and repeat the whole process on the left side of the array. Recursively creating a new pivot and new idex. This is repeated until the array is sorted. Leading to a time complexity of O(nlog(n)), but only a space complexity of O(log(n)." },

    'bogo sort' : {name: "Bogo Sort : O(n*n!) : O(1)", timeComplexity: "O(n*n!)", spaceComplexity: "O(1)", shortDescription : "The Best Sort.", urlPython: "Images/bogoSort/python.png", urlJS : "Images/bogoSort/javascript.png", urlCPP : "Images/bogoSort/cpp.png",
    fullDescription: "The algorithm checks to see if the array is sorted, and then if it is not, it randomly shuffles it. After shuffling it checks once more, and so on and so forth until the array is sorted."},

    'selection sort' : {name: "Selection Sort : O(n^2) : O(1)", timeComplexity: "O(n^2)", spaceComplexity: "O(1)", shortDescription : "The most human sort, finding the smallest value, and the putting it in order", urlPython: "Images/selectionSort/python.png", urlJS : "Images/selectionSort/javascript.png", urlCPP : "Images/selectionSort/cpp.png",
    fullDescription: "This sort is very similar to bubble sort, in that it is simple to implement, and that it runs in O(n^2) time. Overall, this algorithm sorts in place, meaning it does not create any new arrays etc. " + 
    "Instead, the algorithm stores the index of the first 'non sorted' portion of the array, and then increments/loops through the array to see if there a smaller value. Upon looping through the whole array, the smallest value found is swapped with the first element of the 'non sorted' array. Process is repeated with the rest of the array until sorted."},

    'insertion sort' : {name: "Insertion Sort : O(n^2) : O(1)", timeComplexity: "O(n^2)", spaceComplexity: "O(1)", shortDescription : "Actively inserts an element in the right place in the array until the array is sorted", urlPython: "Images/insertionSort/python.png", urlJS : "Images/insertionSort/javascript.png", urlCPP : "Images/insertionSort/cpp.png",
    fullDescription: "the algorithm starts at an index of one after the start of the array, so the second element in the array. This is saved as a key value. Then, another iterator goes through every value to the left of the key value. It checks to see if the value is larger than the key value, and if so, it shifts it right. This inserts the " + 
    "given element directly into where it is supposed to go in the array, as the shifting stops once a value less than the key value is found. This is done in an O(n^2) manner until the entire array is solved."},
    
    'shell sort' : {name: "Shell Sort : O(n^1.5) : O(1)", timeComplexity: "O(n^1.5)", spaceComplexity: "O(1)", shortDescription : "An improved version of insertion sort, where gaps pre sort the array before an insertion", urlPython: "Images/shellSort/python.png", urlJS : "Images/shellSort/javascript.png", urlCPP : "Images/shellSort/cpp.png",
    fullDescription: "This algorithm is an improvement of insertion sort. However, instead of inserting an element by performing a multitude of swaps, this algorithm functions by setting a gap, that is usually the size of the array, and swapping elements in that gap. This gap gets smaller and smaller in a log(n) fashion. " + 
    "This allows for elements, that in insertion sort would take multiple swaps, now only require one. The gaps are lessened continuously until the gap is only equal to one, at which point the array is sorted. It was on of the first algorithms to break past the o(n^2) wall."},

    'bucket sort' : {name: "Bucket Sort : O(n)-O(n^2) : O(n + k)", timeComplexity: "O(n)-O(n^2)", spaceComplexity: "O(n + k)", shortDescription : "Creates a large number of buckets(arrays) and then based on index sort values into them. Then sort the buckets and merge back to array", urlPython: "Images/bucketSort/python.png", urlJS : "Images/bucketSort/javascript.png", urlCPP : "Images/bucketSort/cpp.png",
    fullDescription: "The array is divided into an n number of arrays (similar to merge sort). However, each of these arrays is a given bucket, at a given index. The index of this bucket is also the actual category for that bucket. Meaning, that for example the 9th bucket would be for numbers that have a 9 as their first number. Essentially, every one of the elements is split up among the buckets " + 
    "upon which, the inner buckets are sorted using insertion sort, as it works best for smaller arrays. After all buckets are sorted, the buckets are then merged in accordance to their index in the array, leading to a fully sorted array. This works best when there is a wide spread in the array, as it means that more buckets are filled up. Thus, if each bucket only gets one element, " +  
    "the best case for time complexity is considered O(n). However, if the elements are very close, then they all end up with one bucket, and you end up with the time complexity of insertion sort, or whatever sort you use, such as O(n^2)"},

    'counting sort' : {name: "Counting Sort : O(n+k) : O(n+k)", timeComplexity: "O(n+k)", spaceComplexity: "O(n+k)", shortDescription : "Counts the frequency of elements occurring in an array, and then sorts them based on index and frequency value", urlPython: "Images/countingSort/python.png", urlJS : "Images/countingSort/javascript.png", urlCPP : "Images/countingSort/cpp.png",
    fullDescription: "This algorithm creates a count array  that is of the size from 0 to the maximum value of the original array, populating this count array with zeros. The smaller the range of the array, the faster that this algorithm is because the count array is smaller. This count array is created, and then the original array is looped through once, with the count array being indexed at the " + 
    "value of the original array. The count array is incremented by one at said value index. This is done in order to count the frequency of the elements in the array. To then normalize the count array in reference to the original array, all of the previous elements are summed up in the count array. basically in a countarr[i] += countarr[i-1] fashion. " + 
    "After having done this, a third, answer array, is then created at size n where n is the length of the original array. Looping backwards from the original array (to keep things stable), you index this answer array at countArr[originalArr[i]-1], and set this to the value of originalArr[i]. Doing so, you get the fully sorted array i O(n+k) time where k is the max value of your n number of elements" },

    'heap sort' : {name: "Heap Sort : O(nlog(n)) : O(1)", timeComplexity: "O(nlog(n))", spaceComplexity: "O(1)", shortDescription : "An improvement on selection sort, this sort treats the array like a binary heap and sorts by comparison", urlPython: "Images/heapSort/python.png", urlJS : "Images/heapSort/javascript.png", urlCPP : "Images/heapSort/cpp.png",
    fullDescription: "The array is first in a sense made into a binary tree, using the heapify function. In general, the tree only has two child nodes and one parent node. You first check to see if the left child is larger than the parent, then the right, if so, you swap. However, if you continue to do this up the binary tree, you eventually have the largest element " + 
    "at the top of the tree. This element is then swapped with the last element in the list, as which point, you call heapify again and start the process to get the second largest element, putting it at the end of the array, ignoring the already sorted list. This is what leads to the nlog(n) time, because the binary tree allows for log(n) " + 
    "access to getting the correct element, unlike selection sort, which heap sort is based on. However, it still has to be done n amount of times in order to sort the array. The issue is that if this is done recursively, it can become very expensive, and cause slower solve speeds. However, nlog(n) time is always guaranteed." },

    'radix sort' : {name: "Radix Sort : O(n*d) : O(n + k)", timeComplexity: "O(n*d)", spaceComplexity: "O(n + k)", shortDescription : "Sorts the elements without comparison based on the value of their individual digits", urlPython: "Images/radixSort/python.png", urlJS : "Images/radixSort/javascript.png", urlCPP : "Images/radixSort/cpp.png",
    fullDescription: "This algorithm is a non comparison algorithm that sorts the array based on the digits of it's values. Basically, the array takes the maximum value that is in the array, and then, based on the number of digits in that max, it iterates through sorting all of the elements into buckets. There is only " +
    "10 of these buckets, with 0-9. A value's ones place is looked at, and based where it is between 0 and 9, that is the bucket that it is sorted into. This is then done to the tens place and so on and so forth. After all of the eventual digit values are iterated through, the array is complete. Leading to a time of O(n*d) where d is the number of digits in the max val of the array"},

    'tim sort' : {name: "Tim Sort : O(nlog(n)) : O(n)", timeComplexity: " O(nlog(n))", spaceComplexity: "O(n)", shortDescription : "A mixture of selection sort and merge sort, where runs are found, sorted, and then merged into one sorted array", urlPython: "Images/timSort/python.png", urlJS : "Images/timSort/javascript.png", urlCPP : "Images/timSort/cpp.png",
    fullDescription: "This sorting algorithm is a mix of insertion sort and merge sort. At first, it calculates the amount of runs, which is basically a small segment of the array that is already sorted or near sorted. It takes this run, and if it is sorted but in reverse then it sorts it reverses it, otherwise it just continues to calculate the length of this run. " + 
    "Now, if the run is under a length of 32, the algorithm uses insertion sort in order to sort the array, and if it is longer than 32, then it uses merge sort to sort the smaller runs that were sorted with insertion sort. This is done until the array is sorted. It is the sorting algorithm that is used in python's own .sort or in java 7. It is most practical because it works " +
    "well with real life data, which is often times already partially sorted in such smaller runs due to the nature of chance."},

    'intro sort' : {name: "Intro Sort : O(nlog(n)) : O(log(n))", timeComplexity: "O(nlog(n))", spaceComplexity: "O(log(n))", shortDescription : "A mix of heap, quick, and insertion sort in order to maximize efficiency by taking the best elements of all three into one.", urlPython: "Images/introSort/python.png", urlJS : "Images/introSort/javascript.png", urlCPP : "Images/introSort/cpp.png",
    fullDescription: "This algorithm works by maximizing the efficiency of each of the sorts that it is made up of. For example, insertion sort works better than quick sort for smaller arrays because it requires less overhead. So, intro sort uses selection sort when the array is small enough. Equally, if the main sorting method of quicksort, goes too far recursively, it reaches a speed " + 
    "of O(n^2), so to avoid this, intro sort also implements heap sort, which has a O(nlog(n)) time complexity always, even though it is slower on it's own than quick sort due to moving every element in the array. OVerall, it is an adaptive sort that takes the best out of very sorting method it contains."},

    'stalin sort' : {name: "Stalin : O(n) : O(1)", timeComplexity: "O(n)", spaceComplexity: "O(1)", shortDescription : "The sort for all", urlPython: "Images/stalinSort/python.png", urlJS : "Images/stalinSort/javascript.png", urlCPP : "Images/stalinSort/cpp.png",
    fullDescription: "This algorithm checks to see if the value before it is greater than the currently iterated value, if so, it deletes the value. Running in O(n) time, a joke sort."}
};


//---------------------------------------------The Actual Visualization Class--------------------------------------------------
class algorithimVisualizer{

    //Constructor which defines elements and starts functions
    constructor()
    {
        //array and other html buttons
        this.array = [];
        this.resetArray = [];
        this.arrayContainer = document.getElementById("arrayShowcase");
        this.minVal = document.getElementById("minValue");
        this.maxVal = document.getElementById("maxValue");
        this.numberOfElements = document.getElementById("nInput");
        this.speedSlider = document.getElementById("speedSlider");
        this.arrayName = "";
        this.algData = algorithmDictionary[""];
        this.minRUN = 32;

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
            this.array.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        this.resetArray = [...this.array];
        console.log(this.resetArray);
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
        document.getElementById("helpButton").addEventListener('click', () =>        {handleWindowClick(helpWindow)});
        document.getElementById("descriptionButton").addEventListener('click', () => {handleWindowClick(descriptionWindow)});
        document.getElementById("showCodeButton").addEventListener('click', () =>    {handleWindowClick(codeWindow)})
        document.getElementById("inputButton").addEventListener('click', () =>       {handleWindowClick(inputWindow)});
        document.getElementById("closeHelp").addEventListener('click', () =>         {handleWindowClick(helpWindow)});
        document.getElementById("closeCode").addEventListener('click', () =>         {handleWindowClick(codeWindow)});
        document.getElementById("closeInput").addEventListener('click', () =>        {handleWindowClick(inputWindow)});
        document.getElementById("closeDescription").addEventListener('click', () =>  {handleWindowClick(descriptionWindow)});
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
                if(this.arrayName == "bubble sort")          { this.bubbleSort(); }
                else if(this.arrayName == "merge sort")      { this.mergeSortSetup(); }
                else if(this.arrayName == "quick sort")      { this.quickSortStartUp(); }
                else if(this.arrayName == "bogo sort")       { this.bogoSortStartUp();}
                else if(this.arrayName == "selection sort")  { this.selectionSortStartUp();}
                else if(this.arrayName == "insertion sort")  { this.insertionSortStartUp();}
                else if(this.arrayName == "shell sort")      { this.shellSortStartUp();}
                else if(this.arrayName == "bucket sort")     { this.bucketSortStartUp();}
                else if(this.arrayName == "counting sort")   { this.countingSortStartUp();}
                else if(this.arrayName == "heap sort")       { this.heapSortStartUp();}
                else if(this.arrayName == "radix sort")      { this.radixSortStartUp();}
                else if(this.arrayName == "tim sort")        { this.timSortStartUp();}
                else if(this.arrayName == "intro sort")      { this.introSortStartUp();}
                else if(this.arrayName == "stalin sort")     { this.stalinSortStartUp();}
            }
        })
        document.getElementById("pauseButton").addEventListener('click', () =>
        {
            const button = document.getElementById("pauseButton");
            if(button.textContent == "Pause")
            {
                button.textContent = "Resume";
                this.isSorting = false;
            }
            else
            {
                button.textContent = "Pause";
                document.getElementById("startButton").click();
            }
        })
        document.getElementById("stopButton").addEventListener('click', () =>
        {
            this.isSorting = false;
        })
        document.getElementById("resetButton").addEventListener('click', () =>
        {

            this.array.length = 0;
            this.array = [...this.resetArray];
            this.resetElementColor();
            this.renderArray();
            this.isSorting=false;
        })
        this.speedSlider.addEventListener('input', (e) => {
            this.animationSpeed = 501 - e.target.value;
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
                if(!this.isSorting)
                {
                    break;
                }
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
        await this.sleep(this.animationSpeed);

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
    //--------------------------------------MergeSort----------------------------------------
    
    async mergeSortSetup()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.mergeSort(0, this.array.length-1);

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async mergeSort(left, right)
    {
        if(left >= right || !this.isSorting) {return;}
        
        //get the middle index of the function
        const mid = Math.floor((left+right) / 2)
        
        //recursive call to split down elements into single lists
        await this.mergeSort(left, mid);
        if (!this.isSorting) return;

        await this.mergeSort(mid + 1, right);
        if (!this.isSorting) return;

        //call merge function (where the actual animation happens)
        await this.mergeSortHelper(left, mid, right);
    }
    async mergeSortHelper(left, mid, right)
    {
        if (left > mid || mid >= right) return;

        //set up arrays
        const leftArray = this.array.slice(left, mid+1);
        const rightArray = this.array.slice(mid+1, right+1);

        //set up iterative values
        let i = 0, j = 0, k = left;

        //the actual animation bit
        await this.highlightArea(left, right, '#e74c3c');

        while(i<leftArray.length && j < rightArray.length && this.isSorting)
        {
            //the animation for the merge
            const actualIndexI = left+i;
            const actualIndexJ = mid+1+j;
            await this.highlightCompare(actualIndexI, actualIndexJ);

            //the actual merge bit within the array
            if(leftArray[i] < rightArray[j])
            {
                this.array[k] = leftArray[i];
                i++;
            }
            else
            {
                this.array[k] = rightArray[j];
                j++;                
            }

            //update visuals
            await this.updateElementHeight(k);
            this.highlightElement(k, '#bd1300');
            //await this.sleep(this.animationSpeed / 2);
            k++;
        }

        while(i < leftArray.length && this.isSorting)
        {
            //update element to append extra and reflect that in graph
            this.array[k] = leftArray[i];
            await this.updateElementHeight(k);
            this.highlightElement(k, '#bd1300');
            await this.sleep(this.animationSpeed / 3);
            i++; k++;
        }
        while(j < rightArray.length && this.isSorting)
        {
            //update element to append extra and reflect that in graph
            this.array[k] = rightArray[j];
            await this.updateElementHeight(k);
            this.highlightElement(k, '#6a2c25');
            await this.sleep(this.animationSpeed / 3);
            j++; k++;
        }

        //reset the highlight
        this.removeHighlightedArea(left, right);

    }
    async highlightArea(start, end, color)
    {
        for (let i = start; i <= end; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.style.backgroundColor = color;
            element.style.borderColor = color;
            element.style.opacity = '0.8';
        }
        await this.sleep(this.animationSpeed/3);
    }
    removeHighlightedArea(start, end)
    {
        for(let i = start; i <= end; i++)
        {
            const element = document.getElementById(`element-${i}`);
            element.style.backgroundColor = '';
            element.style.borderColor = '';
            element.style.opacity = '1';
        }
    }
    async highlightCompare(i, j)
    {
        const elementI = document.getElementById(`element-${i}`);
        const elementJ = document.getElementById(`element-${j}`);
        
        elementI.style.backgroundColor = '#ff1900';
        elementJ.style.backgroundColor = '#ff1900';
        elementI.style.borderColor     = '#ff1900';
        elementJ.style.borderColor     = '#ff1900';
        
        await this.sleep(this.animationSpeed / 3);
        
        elementI.style.backgroundColor = '';
        elementJ.style.backgroundColor = '';
        elementI.style.borderColor = '';
        elementJ.style.borderColor = '';
    }
    highlightElement(index, color)
    {
        const element = document.getElementById(`element-${index}`);
        element.style.backgroundColor = color;
        element.style.borderColor = color;
    }
    async updateElementHeight(index)
    {
        const element = document.getElementById(`element-${index}`);
        const maxValue = Math.max(...this.array);
        const containerHeight = parseInt(window.getComputedStyle(this.arrayContainer).height);
        const newHeight = (this.array[index] / maxValue) * (containerHeight * 0.95);

        element.style.height = `${newHeight}px`;
        await this.sleep(this.animationSpeed / 3);
    }
    resetElementColor()
    {
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.style.backgroundColor = '';
            element.style.borderColor = '';
            element.style.opacity = '1';
            element.classList.remove('sorted', 'comparing', 'swapping');
        }
    }

    //-----------------------------------QuickSort-----------------------------------------------
    async quickSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.quickSort(this.array, 0, this.array.length-1);

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;


    }
    async quickSort(array, start, end)
    {
        //base case for recursion
        if(start >= end || !this.isSorting)
        {
            return array;
        }

        //set up the new pivot
        let pivot = await this.partition(array, start, end)
        if(!this.isSorting) return array;


        //recusrive call to sort
        await this.quickSort(array, start, pivot-1);
        if(!this.isSorting) return array;
        await this.quickSort(array, pivot+1, end)
    }
    async partition(array, start, end)
    {
        //select and color in pivot
        let pivot = array[end];
        this.highlightPivot(end, '#03de19');
        await this.sleep(this.animationSpeed);

        let i = start - 1;

        for(let j = start; j < end; j++)
        {
            if(!this.isSorting) {break;}

            //set current element style
            this.highlightCurrent(j, true);

            //actual sorting logic where you highlight the sort, change the things in array, and update visual height
            if(array[j] < pivot )
            {
                i++;
                if(i !== j)
                {
                    await this.highlightSwapped(i);
                    await this.highlightSwapped(j);

                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;

                    await this.updateElementHeight(i);
                    await this.updateElementHeight(j);
                    await this.sleep(this.animationSpeed / 2);  
                }          
            }
            //reset the current element style but keep pivot
            if(j !== end) { await this.resetOneElement(j);}
        }

        if(this.isSorting && i !== end)
        {
            i++;

            await this.highlightSwapped(i);
            await this.highlightSwapped(end);

            let temp = array[i];
            array[i] = array[end];
            array[end] = temp;

            await this.updateElementHeight(i);
            await this.updateElementHeight(end);
            await this.sleep(this.animationSpeed / 2);     
        }
  
        await this.resetOneElement(end);
        
        const pivotElement = document.getElementById(`element-${end}`);
        pivotElement.style.backgroundColor = '';
        pivotElement.style.borderColor = '';

        return i;
    }
    async highlightPivot(index, color)
    {
        const element = document.getElementById(`element-${index}`);
        element.style.backgroundColor = color;
        element.style.borderColor = color;
        element.style.zIndex = '10';
        element.style.boxShadow = `0 0 10px ${color}`;
    }
    async resetOneElement(index)
    {
        const element = document.getElementById(`element-${index}`);
        element.style.backgroundColor = '';
        element.style.borderColor = '';
        element.style.zIndex = '';
        element.style.boxShadow = '';
    }
    async highlightSwapped(index, color) 
    {
        const element = document.getElementById(`element-${index}`);
        element.style.backgroundColor = color;
        element.style.borderColor = color;
        element.style.zIndex = '5';
        await this.sleep(this.animationSpeed);
        element.style.backgroundColor = '';
        element.style.borderColor = '';
        element.style.boxShadow = '';
    } 
    async highlightCurrent(index, isPartition = false) 
    {
        const element = document.getElementById(`element-${index}`);
        element.style.backgroundColor = isPartition ? '#ff6b6b' : '#ff1900';
        element.style.borderColor = isPartition ? '#ff6b6b' : '#ff1900';
        element.style.zIndex = '5';
        element.style.boxShadow = '0 0 5px rgba(255, 25, 0, 0.7)';
    } 

    //---------------------------------Bogo Sort-------------------------------------------------
    async bogoSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.bogoSort(this.array);

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    bogoSortChecker()
    {
        for(let i = 0; i < this.array.length-1; i++)
        {
            if(this.array[i] > this.array[i+1])
            {
                return false;
            }
        }
        return true;
    }
    async bogoSort()
    {
        while(!this.bogoSortChecker())
        {
            for(let i = 0; i < this.array.length; i++)
            {
                this.highlightElement(i, '#e50041');
            }

            await this.sleep(this.animationSpeed * 2);

            for(let i = this.array.length-1; i >= 0; i--)
            {
                let j = Math.floor(Math.random() * i+1);
                let temp = this.array[i];
                this.array[i] = this.array[j];
                this.array[j] = temp;

                await this.updateElementHeight(i);
                await this.updateElementHeight(j);

                await this.sleep(this.animationSpeed / 2);

            }

            this.resetElementColor();
            await this.sleep(200);
        }
    }

    //---------------------------------Selection Sort-------------------------------------------------
    async selectionSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.selectionSort(this.array);

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async selectionSort()
    {
        let n = this.array.length;
        for(let i = 0; i < n-1; i++)
        {
            let index = i;
            this.highlightElement(i, '#03de19')
            
            for(let j = i; j < n; j++)
            {
                this.highlightElement(j, '#e02f1f')
                await this.sleep(this.animationSpeed * 1.5)    

                if(this.array[j] < this.array[index])
                {
                    await this.resetOneElement(index);
                    index = j
                    this.highlightElement(index, '#03de19')
                    this.highlightElement(i, '#0c8a18')
                    await this.sleep(this.animationSpeed)
                }
                else
                {
                    await this.resetOneElement(j);
                }
            }
            let temp = this.array[i];
            this.array[i] = this.array[index];
            this.array[index] = temp;


            this.updateElementHeight(i);
            this.updateElementHeight(index);
            await this.sleep(this.animationSpeed)

            this.resetElementColor();
        }
    }

    //---------------------------------Insertion Sort-------------------------------------------------
    async insertionSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.insertionSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async insertionSort()
    {
        let n = this.array.length;

        for(let i = 1; i < n; i++)
        {
            let key = this.array[i];
            this.highlightElement(i, '#03de19');
            await this.sleep(this.animationSpeed/2);
            let j = i - 1;
            
            while(j >= 0 && key < this.array[j])
            {
                
                await this.highlightElement(j+1, '#e02f1f');
                await this.highlightElement(j, '#e02f1f');
                await this.sleep(this.animationSpeed);

                this.array[j+1] = this.array[j];
                this.updateElementHeight(j+1);  
                
                await this.sleep(this.animationSpeed/2);
                await this.resetOneElement(j+1);
                await this.resetOneElement(j);
                
                j-=1;
            }
            this.array[j+1] = key
            this.updateElementHeight(j+1);
            this.highlightElement(j+1, '#03de19');

            await this.sleep(this.animationSpeed)
            this.resetElementColor();
        }
    }

    //---------------------------------Shell Sort-------------------------------------------------
    async shellSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.shellSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async shellSort()
    {
        let n = this.array.length;

        for(let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
            for(let i = gap; i < n; i++)
            {
                let temp = this.array[i];
                this.highlightElement(i, '#e02f1f');
                await this.sleep(this.animationSpeed/2);
                
                let j = i;

                while(j >= gap && this.array[j-gap] > temp)
                {
                    //showcase the gap comparison between elements
                    await this.highlightElement(j, '#e01fd0');
                    await this.highlightElement(j-gap, '#e01fd0');
                    await this.sleep(this.animationSpeed);

                    this.array[j] = this.array[j-gap];
                    this.updateElementHeight(j);  
                    
                    await this.sleep(this.animationSpeed/2);
                    await this.resetOneElement(j-gap);
                    await this.resetOneElement(j);
                    
                    j -= gap;
                }
                this.array[j] = temp;
                this.updateElementHeight(j);  
                this.highlightElement(j, '#e02f1f');
                
                await this.sleep(this.animationSpeed)
                this.resetElementColor();
            }
        }
    }

    //--------------------------------Bucket Sort-----------------------------------------------------
    async bucketSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.bucketSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async bucketInsertionSort(bucket)
    {
        let n = bucket.length

        for(let i = 1; i < n; i++)
        {
            let key = bucket[i];
            let j = i - 1;

            while(j >= 0 && bucket[j] > key)
            {
                bucket[j+1] = bucket[j]
                j--;
            }
            bucket[j+1] = key;
        }
    }
    async bucketSort()
    {
        let n = this.array.length;
        let minVal = Math.min(...this.array);
        let maxVal = Math.max(...this.array);
        let buckets = Array.from({length: n}, () => []);

        //distribution
        for(let i = 0; i<this.array.length; i++)
        {
            let num = this.array[i];
            let normalized = (num - minVal) / (maxVal - minVal);
            let bucketIndex = Math.floor(normalized * n);
            if(bucketIndex == n) { bucketIndex = n -1;}
            buckets[bucketIndex].push(num);

            await this.highlightCurrent(i, '#f39c12'); // Yellow for distribution
            await this.sleep(this.animationSpeed / 5);
            await this.resetOneElement(i);
        }

        //sorting
        for (let bIndex = 0; bIndex < buckets.length; bIndex++) 
        {
            if (buckets[bIndex].length > 0) 
            {
                await this.sleep(this.animationSpeed / 2);
                await this.bucketInsertionSort(buckets[bIndex]);
            }
        }

        //merge
        let index = 0;
        for(let bucketIndex = 0; bucketIndex < buckets.length; bucketIndex++)
        {
            let bucket = buckets[bucketIndex];
            if(bucket.length > 0)
            {
                for(let i = 0; i < this.array.length; i++)
                {
                    if(i >= index && i < index + bucket.length)
                    {
                        await this.highlightElement(i, '#27ae60');
                    }
                }

                await this.sleep(this.animationSpeed / 2);

                for( let num of bucket)
                {
                    this.array[index] = num;
                    await this.updateElementHeight(index);

                    await this.sleep(this.animationSpeed / 5);
                    index++;
                }

                for (let i = 0; i < this.array.length; i++) 
                {
                    await this.resetOneElement(i);
                }
            }
        }
    }

    //--------------------------------Counting Sort-----------------------------------------------------
    async countingSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.countingSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async countingSort()
    {
        let copyArray = [...this.array]
        let largestValue = Math.max(...copyArray);
        let countingArray = new Array(largestValue + 1).fill(0);

        //setting up the count array and displaying it as well
        for(let value of copyArray)
        {
            countingArray[value] += 1;
        }

        for(let i = 1; i <= largestValue; i++)
        {
            countingArray[i] += countingArray[i-1];
        }

        //the actual sorting portion and the visualization of the sort itself
        let resultArray = new Array(copyArray.length);

        for(let i = copyArray.length - 1; i >= 0; i--)
        {
            const value = copyArray[i];
            this.highlightElement(i, '#e74c3c')
            const position = countingArray[value] - 1;
            resultArray[position] = value;
            this.highlightElement(position, '#dc38ad')
            countingArray[value] -= 1;
            await this.sleep(this.animationSpeed * 2);
            await this.resetOneElement(i);
            await this.resetOneElement(position);
        }

        for(let i = resultArray.length - 1; i >= 0; i--)
        {
            this.array[i] = resultArray[i];
            await this.updateElementHeight(i);
            await this.sleep(this.animationSpeed/2);         
        }
    }

    //--------------------------------Heap Sort-----------------------------------------------------
    async heapSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.heapSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async heapify(n, i)
    {
        let largest = i;

        let left  = i * 2 + 1;
        let right = i * 2 + 2;

        if(n > left && this.array[left] > this.array[largest])
        {
            largest = left;
        }
        if(n > right && this.array[right] > this.array[largest])
        {
            largest = right;
        }

        if(largest != i)
        {
            [this.array[i], this.array[largest]] = [this.array[largest], this.array[i]];

            this.highlightElement(i, '#e74c3c');
            this.highlightElement(largest, '#3ce747');
            await this.updateElementHeight(i);
            await this.updateElementHeight(largest);
            await this.sleep(this.animationSpeed);

            await this.resetOneElement(i);
            await this.resetOneElement(largest);
            await this.sleep(this.animationSpeed);

            await this.heapify(n, largest);
        }
    }
    async heapSort()
    {
        let n = this.array.length;

        for(let i = Math.floor(n / 2) - 1; i >=0; i--)
        {
            await this.heapify(n, i);
        }

        for(let i = n-1; i > 0; i--)
        {
            [this.array[0], this.array[i]] = [this.array[i], this.array[0]];

            this.highlightElement(i, '#e74c3c');
            this.highlightElement(0, '#3ce747');
            await this.updateElementHeight(i);
            await this.updateElementHeight(0);
            await this.sleep(this.animationSpeed);

            await this.resetOneElement(i);
            await this.resetOneElement(0);
            await this.sleep(this.animationSpeed);


            await this.heapify(i, 0);
        }

    }

    //--------------------------------Radix Sort-----------------------------------------------------
    async radixSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.radixSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    }
    async countingSortHelper(n, exp)
    {
        let output = new Array(n).fill(0);
        let count = new Array(10).fill(0);

        for(let i = 0; i < n; i++)
        {
            let digit = Math.floor(Math.abs(this.array[i]) / exp) % 10;
            count[digit]++;
        }

        for(let i = 1; i < 10; i++)
        {
            count[i] += count[i-1];
        }

        for(let i = n - 1; i >= 0; i--)
        {
            let digit = Math.floor(Math.abs(this.array[i]) / exp) % 10;
            output[count[digit] - 1] = this.array[i];
            count[digit]--;
        }

        for(let i = 0; i < n; i++)
        {
            this.array[i] = output[i];
        }
        
        for(let i = 0; i < n; i++)
        {
            this.highlightElement(i, '#2a2afb');
            await this.updateElementHeight(i);
            await this.sleep(this.animationSpeed/2);
            await this.resetOneElement(i);            
        }
    }
    async radixSort()
    {
        let n = this.array.length;
        let maxVal = Math.max(...this.array);

        for(let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10)
        {
            await this.countingSortHelper(n, exp);
        }
    }
    //--------------------------------Tim Sort-----------------------------------------------------
    async timSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.timSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    } 
    calcMinRun(n)
    {
        let r = 0
        if(n < this.minRUN)
        {
            return n;
        }

        while(n >= this.minRUN)
        {
            r |= (n & 1);
            n >>= 1;
        }
        return n + r;
    }
    async timInsertionSort(arr, left, right)
    {
        for(let i = left + 1; i <= right; i++)
        {
            let key = arr[i];
            this.highlightElement(i, '#03de19');
            await this.sleep(this.animationSpeed/2);
            let j = i - 1;
            while(j >= left && arr[j] > key)
            {
                await this.highlightElement(j+1, '#e02f1f');
                await this.highlightElement(j, '#e02f1f');
                await this.sleep(this.animationSpeed/4);

                arr[j + 1] = arr[j];
                await this.updateElementHeight(j+1);

                await this.sleep(this.animationSpeed/4);
                await this.resetOneElement(j+1);
                await this.resetOneElement(j);
                j -= 1;
            }
            arr[j+1] = key;
            await this.updateElementHeight(j+1);
            this.resetElementColor();
        }
    }
    async timMerge(arr, l, m, r)
    {
        const left = arr.slice(l, m+1);
        const right = arr.slice(m+1, r+1);

        let i = 0, j = 0, k = l;
        while(i < left.length && j < right.length)
        {
            if(left[i] <= right[j])
            {
                arr[k] = left[i];
                i++;
            }
            else
            {
                arr[k] = right[j];
                j++;
            }
            await this.updateElementHeight(k);
            this.highlightElement(k, '#0357de');
            await this.sleep(this.animationSpeed / 3);
            await this.resetOneElement(k)
            k++;
        }
        while(i < left.length)
        {
            arr[k] = left[i];
            this.highlightElement(k, '#0357de');
            await this.updateElementHeight(k);
            await this.sleep(this.animationSpeed / 3);
            await this.resetOneElement(k)
            i++;
            k++;
        }
        while(j < right.length)
        {
            arr[k] = right[j];
            await this.updateElementHeight(k);
            this.highlightElement(k, '#0357de');
            await this.sleep(this.animationSpeed / 3);
            await this.resetOneElement(k)
            j++;
            k++;
        } 
    }
    async findRun(arr, start, n)
    {
        let end = start + 1;
        if(end == n) return end;

        if(arr[end] < arr[start])
        {
            while(end < n && arr[end] < arr[end -1]) end++;
            let sub = arr.slice(start, end).reverse();
            for(let i = start; i < end; i++)
            {
                arr[i] = sub[i-start];
                await this.updateElementHeight(i);
                this.highlightElement(i, '#de03d0');
                await this.sleep(this.animationSpeed / 3);
                await this.resetOneElement(i);
            } 
        }
        else
        {
            while(end < n && arr[end] >= arr[end - 1]) end++;
        }
        return end
    }
    async timSort() {
        const n = this.array.length;

        const minRun = this.calcMinRun(n);
        const runs = [];

        let i = 0;
        while (i < n) 
        {
            let runEnd = await this.findRun(this.array, i, n);
            let runLen = runEnd - i;

            if (runLen < minRun) 
            {
                let end = Math.min(i + minRun, n);
                await this.timInsertionSort(this.array, i, end - 1);
                runEnd = end;
            }
            runs.push([i, runEnd]);
            i = runEnd;

            while (runs.length > 1) 
            {
                const [l1, r1] = runs[runs.length - 2];
                const [l2, r2] = runs[runs.length - 1];
                const len1 = r1 - l1, len2 = r2 - l2;

                if (len1 <= len2) 
                {
                    await this.timMerge(this.array, l1, r1 - 1, r2 - 1);
                    runs.pop();
                    runs[runs.length - 1] = [l1, r2];
                } 
                else break;
            }
        }

        while (runs.length > 1) 
        {
            const [l1, r1] = runs[runs.length - 2];
            const [l2, r2] = runs[runs.length - 1];
            await this.timMerge(this.array, l1, r1 - 1, r2 - 1);
            runs.pop();
            runs[runs.length - 1] = [l1, r2];
        }

    }

    //---------------------------------Intro Sort------------------------------------------------------
    async introSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.introSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    } 
    async introPartition(arr, start, end) 
    {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] < arr[start]) 
        {
            [arr[start], arr[mid]] = [arr[mid], arr[start]];
            await this.updateElementHeight(start);
            await this.updateElementHeight(mid);
            await this.sleep(this.animationSpeed / 3);
        }
        if (arr[end] < arr[start]) 
        {
            [arr[end], arr[start]] = [arr[start], arr[end]];
            await this.updateElementHeight(start);
            await this.updateElementHeight(end);
            await this.sleep(this.animationSpeed / 3);
        }
        if (arr[mid] > arr[end]) 
        {
            [arr[mid], arr[end]] = [arr[end], arr[mid]];
            await this.updateElementHeight(end);
            await this.updateElementHeight(mid);
            await this.sleep(this.animationSpeed / 3);
        }

        let pivot = arr[mid];
        [arr[mid], arr[end - 1]] = [arr[end - 1], arr[mid]];
        await this.updateElementHeight(end-1);
        await this.updateElementHeight(mid);
        await this.sleep(this.animationSpeed / 3);

        let i = start;
        let j = end - 2;

        while (true) 
        {
            // Fix: Add bounds checking
            while (i <= end - 2 && arr[i] < pivot) { i++; }
            while (j >= start && pivot < arr[j]) { j--; }

            if (i >= j) { break; }

            [arr[i], arr[j]] = [arr[j], arr[i]];
            await this.updateElementHeight(i);
            await this.updateElementHeight(j);
            await this.sleep(this.animationSpeed / 3);
            i++;
            j--;
        }
        [arr[i], arr[end - 1]] = [arr[end - 1], arr[i]];
        await this.updateElementHeight(i);
        await this.updateElementHeight(end-1);
        await this.sleep(this.animationSpeed / 3);

        return i;
    }
    async introHeapify(arr, i, n, offset) 
    { 
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[offset + left] > arr[offset + largest])
        {
            largest = left;
        }
        if (right < n && arr[offset + right] > arr[offset + largest]) 
        {
            largest = right;
        }

        if (largest !== i) 
        {
            [arr[offset + i], arr[offset + largest]] = [arr[offset + largest], arr[offset + i]];
            await this.updateElementHeight(offset + i);
            await this.updateElementHeight(offset + largest);
            await this.sleep(this.animationSpeed / 3);

            await this.introHeapify(arr, largest, n, offset);
        }
    }
    async introHeapSort(arr, start, end) 
    {
        let n = end - start + 1;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) 
        {
            await this.introHeapify(arr, i, n, start);
        }
        for (let i = n - 1; i > 0; i--) 
        {
            [arr[start], arr[start + i]] = [arr[start + i], arr[start]];
            await this.updateElementHeight(start);
            await this.updateElementHeight(start + i);
            await this.sleep(this.animationSpeed / 3);

            await this.introHeapify(arr, 0, i, start);
        }
    }
    async introInsertionSort(arr, start, end) 
    {
        for (let i = start + 1; i <= end; i++) 
        {
            let key = arr[i];
            let j = i - 1;
            while (j >= start && arr[j] > key) 
            {
                arr[j + 1] = arr[j];
                await this.updateElementHeight(j+1);
                await this.sleep(this.animationSpeed / 3);
                j--;
            }
            arr[j + 1] = key;
            await this.updateElementHeight(j+1);
            await this.sleep(this.animationSpeed / 3);
        }
    }
    async introSortHelper(arr, start, end, max_depth) 
    {
        let size = end - start + 1;

        if (size <= 16)
        {
            await this.introInsertionSort(arr, start, end);
            return;
        }
        
        if (start >= end) return;
        
        if (max_depth === 0)
        {
            await this.introHeapSort(arr, start, end);
            return;
        }

        let pivot = await this.introPartition(arr, start, end);
        await this.introSortHelper(arr, start, pivot - 1, max_depth - 1);
        await this.introSortHelper(arr, pivot + 1, end, max_depth - 1);
    }
    async introSort() 
    {
        if (this.array.length <= 1) return this.array;
        
        let max_depth = 2 * Math.floor(Math.log2(this.array.length));
        await this.introSortHelper(this.array, 0, this.array.length - 1, max_depth);
    }

    //---------------------------------Stalin Sort------------------------------------------------------
    async stalinSortStartUp()
    {
        if(this.isSorting) {return;}
        this.isSorting = true;

        //set all elements to default
        this.resetElementColor();

        //actual sorter call
        await this.stalinSort();

        //marked all of them as sorted when done
        for (let i = 0; i < this.array.length; i++) 
        {
            const element = document.getElementById(`element-${i}`);
            element.classList.add('sorted');
            await this.sleep(10);
        }    

        this.isSorting = false;
    } 
    async stalinSort()
    {
        let sorted_list = [this.array[0]];

        for(let i = 1; i < this.array.length; i++)
        {
            if(this.array[i] >= sorted_list[sorted_list.length-1])
            {
                sorted_list.push(this.array[i]);
            }
            else
            {
                this.array[i] = 0;
                await this.highlightElement(i, '#de0303');
                await this.sleep(this.animationSpeed * 3);
                await this.updateElementHeight(i);
            }
        }

        this.array.length = 0;
        this.array = [...sorted_list];

        this.renderArray();
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