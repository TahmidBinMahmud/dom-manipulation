/* Task 1 */
var heading = document.getElementById("heading");
console.log(heading.innerText);
//heading.innerText = "Yo What up?"
/* Task 2 using plain JavaScript */

//Task 2a: Click on button to add a 'p' element
var textBtn = document.getElementById("add text")
textBtn.addEventListener('click', function(event){
    var task2A = document.getElementById("task2a")
    var paragraph = document.createElement('p')
    paragraph.innerText = "Hello World"
    task2A.appendChild(paragraph)
})

//Task 2b: Click on buttons to change Background colour

function changeBGColour(event){
    //console.log(event.target.innerText)
    var body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = event.target.innerText.toLowerCase()
    

}

/* Task 4 using jQuery */
