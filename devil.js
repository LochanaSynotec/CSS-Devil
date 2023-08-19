document.addEventListener('DOMContentLoaded', function () {

    //var cssAraay = {'h': 'height', 'bgc': 'background-color'};

    var cssAraay = new Map([
        ['h', ['height', 'px']],
        ['bgc', ['background-color', '']],
        ['mt', ['margin-top', 'px']],
        ['round', ['border-radius', 'px']]
    ]);



    // Get the HTML element with data-devil attribute and value 'asas'
    var element = document.querySelector('[data-devil]');

    var css_val;
    // Check if the element with data-devil exists
    if (element) {
        // Retrieve the value of the data-devil attribute
        var dataDevilValue = element.getAttribute('data-devil');

        spaceArray = dataDevilValue.split(" ");
        // console.log(spaceArray);

        for (var i = 0; i < spaceArray.length; i++) {

            myArray = spaceArray[i];
            myArray = myArray.split("#");

            console.log(myArray[0]);

            for (var [id, values] of cssAraay) {
               
                if (id === myArray[0]) {
                   
                   // console.log('ID matched:', id);
                    // Perform actions based on the matched ID
                    // For example, you can access the associated values like this:
                   // console.log('Associated values:', values);
                    element.style[values[0]] = myArray[1] + values[1];


                }
            }

           

        }

        // Perform further actions with the value
       // console.log('data-devil value:', element);
    } else {
       // console.log('No element with data-devil="asas" found.');
    }
});

