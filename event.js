let button = document.getElementById("myButton");
function onButtonClick(){
    alert("You have clicked me1");
    button.removeEventListener('Click',onButtonClick);
}
button.addEventListener('click',onButtonClick);
let btn = document.getElementById("myButtonTwo");
btn.addEventListener('Click',function(){
    alert("I am the Anonymous function");
});