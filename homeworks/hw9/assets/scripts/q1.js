/**
 * Sets the background color of #q1-container
 *
 * @param {string} color The background color that #q1-container should change to
 */
function setBackgroundColor(color) {
    const q1Container = document.getElementById("q1-container");
    q1Container.style.backgroundColor = color;
}
  

//
// Part 2: Code the function redButtonClicked() and make the browser run the function for you when #q1-btn-red is clicked
//

// For the red button
// Use the color #EF476F, or change it up to your liking
// If you do decide to change the color, probably also consider updating the corresponding button color in CSS :)


function redButtonClicked() {
    
    setBackgroundColor('#EF476F');
}

const redButton = document.getElementById('q1-btn-red');


redButton.addEventListener('click', redButtonClicked);


// After you finish part 1 & 2, the clicking the red button should turn the background color red!

//
// Part 3: Program the yellow button similar to what you did with the red button
//

// For the yellow button
// Use the color #FFD166, or change it up to your liking

// TODO: Define a function like yellowButtonClicked() that sets the background color


function yellowButtonClicked() {
    setBackgroundColor('#FFD166');
}

// TODO: Set the browser to run the function yellowButtonClicked() when someone clicks #q1-btn-yellow

const yellowButton = document.getElementById('q1-btn-yellow');
yellowButton.addEventListener('click', yellowButtonClicked);



//
// Part 4: A little more practice, let's do the same for the rest of the buttons
//

// For the green button
// Use the color #06D6A0, or change it up to your liking

// TODO: Make the green button work similarly
function greenButtonClicked() {
    setBackgroundColor('#06D6A0');
}

const greenButton = document.getElementById('q1-btn-green');
greenButton.addEventListener('click', greenButtonClicked);




// For the light blue button
// Use the color #118AB2, or change it up to your liking

// TODO: Make the light blue button work similarly

function lightBlueButtonClicked() {
    setBackgroundColor('#118AB2');
}

const lightBlueButton = document.getElementById('q1-btn-lightblue');
lightBlueButton.addEventListener('click', lightBlueButtonClicked);


// For the blue button
// Use the color #073B4C, or change it up to your liking

// TODO: Make the blue button work similarly
function blueButtonClicked() {
    setBackgroundColor('#073B4C');
}

const blueButton = document.getElementById('q1-btn-blue');
blueButton.addEventListener('click', blueButtonClicked);