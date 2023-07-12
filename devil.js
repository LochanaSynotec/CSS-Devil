document.addEventListener('DOMContentLoaded', function() {

    var cssAraay = {'h': 'height''px', 'bgc': 'background-color'};



    // Get the HTML element with data-devil attribute and value 'asas'
    var element = document.querySelector('[data-devil]');

    var css_val;
    // Check if the element with data-devil exists
    if (element) {
      // Retrieve the value of the data-devil attribute
      var dataDevilValue = element.getAttribute('data-devil');

      spaceArray=dataDevilValue.split(" ");
      console.log(spaceArray);

      for (var i = 0; i < spaceArray.length; i++){
         // console.log(spaceArray[i]);
          myArray=spaceArray[i];
          myArray = myArray.split("-");

        //   if (myArray[0]=='h') {
        //     element.style.height = '100px';
        //   } else {
            
        //   }
        console.log(myArray[i]);
        


          if (myArray[i] in cssAraay) {
            var valueOfA = cssAraay[myArray[i]];
            element.style[valueOfA] = myArray[1];

            console.log(element.style[valueOfA] = myArray[i]+'px'); // Output: 200
          } else {
            console.log("Key 'a' does not exist");
          }
    





        }

      // Perform further actions with the value
      console.log('data-devil value:', element);
    } else {
      console.log('No element with data-devil="asas" found.');
    }
  });
  


  