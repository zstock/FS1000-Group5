    
    var divs = new Array();
    divs[0] = "errName";
    divs[1] = "errRestaurant";
    divs[2] = "errAddress";
    divs[3] = "errType";
    divs[4] = "errReview";
    function validate()
        {
            var inputs = new Array();
            inputs[0] = document.getElementById('name').value;
            inputs[1] = document.getElementById('restaurant').value;
            inputs[2] = document.getElementById('address').value;
            inputs[3] = document.getElementById('type').value;
            inputs[4] = document.getElementById('review').value;
            var errors = new Array();
            errors[0] = "<span style='color:red'>Please enter your Name!</span>";
            errors[1] = "<span style='color:red'>Please enter Restaurant's Name!</span>";
            errors[2] = "<span style='color:red'>Please enter Restaurant's Adrress!</span>";
            errors[3] = "<span style='color:red'>Please enter Type of Cuisine!</span>";
            errors[4] = "<span style='color:red'>Please enter your Review!</span>";
            for (i in inputs)
            {
                var errMessage = errors[i];
                var div = divs[i];
                if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
                else 
                document.getElementById(div).innerHTML= "OK!"
            }
        }
            function finalvalidate() 
            { 
                var count = 0;
            for(i=0;i<5;i++)
            {
                var div = divs[i];
                if(document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
            }
            /*if(count == 5)
            document.getElementById("errFinal").innerHTML = "All the data you entered is Correct!";*/
            }

    
    