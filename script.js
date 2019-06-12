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

//Task 2c: Click on button to get redirected to Google
function redirectToGoogle(event){
    window.location.assign("http://www.google.com")
}

/* Task 4 using jQuery */

//Task 4a: Click a button to add a 'p' element with jQuery
$('#addtextjQ').click(function(event){
    var paragraph = $('<p>').text("Hello World")
    $("#task4a").append(paragraph)
})

//Task 4b
function changeBG(event){
    var color = event.target.innerText.toLower()
    $('body').css('background-color', color)
}

//Task 4c
$('#addition').click(function(event){
    var sum = Number($('#num1').val()) + Number($('#num2').val())
    $('#sum').text(sum)
})