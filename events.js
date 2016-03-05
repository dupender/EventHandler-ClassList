// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var y = document.getElementById("output-target");
var x = document.getElementsByClassName("article-section")
// When you use getElementsByClassName you create an array of elements with the same class name, article-section in this case is the id.
for(var i=0; i< x.length; i++) {
  // x[i].addEventListener("click", referenceToFunction(callback))
  // callback = when something ("click") happens, run the function
   x[i].addEventListener("click", outputT);//you don't want to make outputT a call to a function here because it will run on page load, you want it to run on a click event - so then you need a reference to a function
  }

  //Because the function outputT needs the properties within the "click" event, MouseEvent is the argument that would give the addEventListner access to  those properties 
 function outputT(MouseEvent) {
    console.log(MouseEvent);
  // MouseEvent is an object that gives you nested properties including target:section.article-section, open it up and you get more properties.  YOu get classname then innerText and innerHTML
  // target is the element you have clicked on in the DOM
  // current target is where the event listner (where the id = "") is attached
    var elementText = MouseEvent.target.innerHTML;
    y.innerHTML = "You clicked on the " + elementText + " section";
            };

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById("page-title").addEventListener("mouseenter", hoverText)

function hoverText() {
    document.getElementById("output-target").innerHTML = "You moved your mouse over the header "
  };

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").addEventListener("mouseleave", exitHover)

function exitHover() {
    document.getElementById("output-target").innerHTML = "You left me"
  };

// When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keypress", mirrorText);
function mirrorText() {
    document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value;
  };

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function() {
    document.getElementById("guinea-pig").classList.add("blue");   
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", function() {
/*The first section's text should be bold by element.classList.*/
  document.getElementById("guinea-pig").classList.add("xx-large");   
});

  // When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", function(){
    document.getElementById("guinea-pig").classList.add("solid");   
  });

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", function(){
    document.getElementById("guinea-pig").classList.add("rounded");   
  });



