

    function checkDeviceSize() {
        alert('dd');
            var elements = document.querySelectorAll('[data-devil]');
            if (elements.length > 0) {
                for (var a = 0; a < elements.length; a++) {
                    //var cssAraay = {'h': 'height', 'bgc': 'background-color'};

                    var cssAraay = new Map([
                        ['c', ['color', '']],
                        ['bgc', ['background-color', '']],
                        ['bg-img', ['background-image', '']],
                        ['bgr', ['background-repeat', '']],
                        ['bgp', ['background-position', '']],
                        ['bgs', ['background-size', 'px']],
                        ['bg-att', ['background-attachment', '']],
                        ['opt', ['opacity', 'px']],
                        ['ff', ['font-family', '']],
                        ['fs', ['font-size', 'px']],
                        ['fw', ['font-weight', 'px']],
                        ['fsy', ['font-style', '']],
                        ['ta', ['text-align', '']],
                        ['td', ['text-decoration', '']],
                        ['tt', ['text-transform', '']],
                        ['lh', ['line-height', 'px']],
                        ['ls', ['letter-spacing', '']],
                        ['ws', ['word-spacing', '']],
                        ['w', ['width', 'px']],
                        ['h', ['height', 'px']],
                        ['mt', ['margin-top', 'px']],
                        ['mr', ['margin-right', 'px']],
                        ['mb', ['margin-bottom', 'px']],
                        ['ml', ['margin-left', 'px']],
                        ['pt', ['padding-top', 'px']],
                        ['pr', ['padding-right', 'px']],
                        ['pb', ['padding-bottom', 'px']],
                        ['pl', ['padding-left', 'px']],
                        ['brr', ['border', 'px']],
                        ['bw', ['border-width', 'px']],
                        ['bs', ['border-style', '']],
                        ['bc', ['border-color', '']],
                        ['br', ['border-radius', 'px']],
                        ['bsz', ['box-sizing', 'px']],
                        ['p', ['position', '']],
                        ['t', ['top', 'px']],
                        ['r', ['right', 'px']],
                        ['b', ['bottom', 'px']],
                        ['l', ['left', 'px']],
                        ['f', ['float', 'px']],
                        ['cer', ['clear', '']],
                        ['dis', ['display', '']],
                        ['ovf', ['overflow', '']],
                        ['z', ['z-index', '']],
                    ]);



                    // Get the HTML element with data-devil attribute and value 'asas'
                    var element = elements[a];

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
    

    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);


