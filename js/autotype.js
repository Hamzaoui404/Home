//The function for auto-typing
function autoType(elementClass, typingSpeed, timeout) {
    //The target class where the auto-typing will be invoked
        var ourClass = $(auto-typing);
        //setting the CSS styling for the target class
        ourClass.css({
          "position": "relative",
          "display": "inline-block"
        });
        //looking for `text-js` containing the text that will be typed out
        ourClass = ourClass.find(".text");
        //remove any trailing spaces
        var text = ourClass.text().trim().split('');
        //storing the length of text
        var amntOfChars = text.length;
        //variable to store the text to display
        var newString = "";
        
        setTimeout(function () {
        //changing the text visibility to visible
          ourClass.css("opacity", 1);
          //clearing out the text temporarily
          ourClass.text("");
          //The IIFE where the characters are displayed after computing the typing speed in a for-loop
          for (var i = 0; i < amntOfChars; i++) {
            (function (i, char) {
              setTimeout(function () {
                newString += char;
                ourClass.text(newString);
              }, i * typingSpeed);
            })(i, text[i]);
          }
        }, timeout);
      }
    
    function fire(){
    //calling the functions with respective arguments (text field, typing speed, and timeout)
        autoType(".type-js", 85, 1000);
        autoType(".type-js-ii", 200, 2500);  
        autoType(".type-js-iii", 85, 5800);  
        autoType(".type-js-iv", 200, 9300);   
        autoType(".type-js-v", 85, 15000);    
    } 
    