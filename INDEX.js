let greetingElement = document.getElementById("greeting");
greetingElement.textContent = "Hello Universe"
let messageElements = document.getElementsByClassName = "message"
for(let i = 0; i < messageElements;1++){
     messageElements(i). textContent = "Updated Message"
}
let paragraphElements = document.getElementsByTagName("textContent")
    for(let i =o; i<paragraphElements;1++){
        paragraphElements(i).syle.color="blue"    
    }
let fisrtParagraph = document.querySelector("textContent")
fisrtParagraph.textContent="Updated content of 1st paragraph"
let uniqueElement = document.querySelector(".")

let items = document.querySelectorAll(".item");
let colors = {'black','yellow','red'};
let newPargraph = document.createElement('p');
newParagraph.textContent = "Iam new.";
newPargraph.style.color = 'olive';
let appendElement = document.getElementById('new');
appendElement.appendChild(I am OLD.);

//Creating a new paragraph element
var newParagraph = document.createElement('p');
newParagraph.textContent = 'Anitah Samalie.';
let appendElement = document.getElementById('Alex Jesse');
appendElement.appendChild(newPargraph);

let parent = document.getElementById('remove');
let child100 = document.getElementById('child100');
parent.removeChild(child100);