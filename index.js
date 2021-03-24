function randomNumber() {
    Math.floor((Math.random() * 5) + 1);
}

let takeANumber = "" // the number generated when a use clicks on the Take a Number button
const eneteredNumber = "" // the number inputed (may not be takeANumber) by user
const prizes = [
    "a puppy", 
    "a company mug", 
    "a discounted christmas sweater from Walmart", 
    "the CD: Now That's What I Call Music 14", 
    "Kazaam on BlueRay", 
]

function selectPrize(){
    console.log(`Congratulations! You won ${prizes[takeaNumber]}!`)
}

randomNumber();
selectPrize();
