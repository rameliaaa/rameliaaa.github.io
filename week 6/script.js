// we can use this window to fin certain properties
let windowWidth = window.innerWidth;
// console.log (winodowWidth);
// find out information about url location
// console.log (windowWidth);
// document can be used to find html elements
// console.log (document.title);
// set the title
// document.title = "new title";
// can find the body
// document.body.style.backgroundColor = "red";
// navigator can find more details of hardware/software
// console.log(window.navigator.userAgent);

const myImage = document.querySelector("myImage");

console.log(myImage);

const helloParagraph = document.querySelector("#hello");

console.log(firstParagraph);

const myParagraph = document.querySelectorAll("p");

console.log(myParagraphs);

myParagraphs.forEach(changeParaBG);

function changeParaBG(item) {
  console.log(item);
  item.style.backgroundColor = "red";
}

//first find content of hello p
console.log(helloParagraph.textContent);

function updateCatName() {
  helloParagraph.textContent = `Hi My name is ${myImage.dataset.catname}`;
  // classList.add() adds a class
  // classList.remove() removes a class
  // classicList.toggle() toggles a class
  myImage.classList.toggle("round");
}

//find outer section
const outerSection = document.querySelector(".outer");

// create element using document method
const newPara = document.createElement("p");
newPara.textContent = "I'm a new paragraph!";
newPara.classList.add("coral-box");
document.body.appendChild(newPara);

// look at parapgraph in console
console.log(newPara);

// add new eleemnt to header
const myHeader = document.querySelector("header");
myHeader.innerHTML = `<h2> I love cheese </h2>`;
