
    function checkDeviceSize() {
        const width = window.innerWidth;
        if (width < 768 && width > 576) {
            var elements = document.querySelectorAll('[data-dsm]');
            if (elements.length > 0) {
                for (var a = 0; a < elements.length; a++) {
                    //var cssAraay = {'h': 'height', 'bgc': 'background-color'};

                    // Get the HTML element with data-devil attribute and value 'asas'
                    var element = elements[a];

                    var css_val;
                    // Check if the element with data-devil exists
                    if (element) {
                        // Retrieve the value of the data-devil attribute
                        var dataDevilValue = element.getAttribute('data-dsm');
                        element.style = null;

                        spaceArray = dataDevilValue.split(" ");
                        // console.log(spaceArray);

                        for (var i = 0; i < spaceArray.length; i++) {

                            myArray = spaceArray[i];
                            myArray = myArray.split(":");

                            console.log(myArray[0]);

                            for (var [id, values] of cssAraay) {

                                if (id === myArray[0]) {
                                    element.style[values[0]] = myArray[1] + values[1];
                                }
                            }
                        }
                    } else {
                        // console.log('No element with data-devil="asas" found.');
                    }
                }
            } else {
                console.log('No elements with data-devil attribute found.');
            }
        }
    }

    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);


