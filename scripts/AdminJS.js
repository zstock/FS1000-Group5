document.addEventListener("DOMContentLoaded", function(event) { 
    //===================LOGIN PANEL===================
    let admin = document.getElementById("adminPanel");//I need this to set some CSS and hide the whole admin panel after logging in.
    let form = document.getElementById("loginForm");//I need the form so I can listen for the form submission
    form.addEventListener("submit", adminLogin);//Listen for login submission

    function adminLogin(event)
    {
        event.preventDefault();//prevent the form from trying to submit for real because we don't have an actual server yet.
        let username = document.getElementById("username");//I need this to grab the username input by the user.
        let password = document.getElementById("password");//I need this to grab the password input by the user.
        if(username.value == "Admin" && password.value == "password")//Check if valid username & password
        {  
            HideLoginScreen();
            ShowAdminPanel();
        }
    }

    function HideLoginScreen()//This function uses some CSS to remove the login panel from the page.
    {
        form.style.display = "none";
    }

    function ShowAdminPanel()//This function uses some CSS to show the admin panel, which started out hidden
    {
        admin.style.display = "block";
    }
    function HideAdminPanel()//This function uses some CSS to show the admin panel, which started out hidden
    {
        admin.style.display = "none";
    }
    //===================ADMIN PANEL===================
    let info = new Array(3);
    for (i=0;i<3;i++){
        info[i] = new Array(3);
    }
    //Robo Sushi info
    info[0][0]="Robo Sushi";
    info[0][1]=4;
    info[0][2]="Robo Sushi may look like an undiscerning plaza spot from the outside, but don't be fooled: this restaurant is the most futuristic food endeavour to hit the Toronto food scene since the introduction of conveyer belt sushi.<br /><br /> Fusing the already wondrous experience of AYCE sushi with the perplexing world of robot tech, Robo Sushi is the first restaurant in the country where hostesses and servers are robots on wheels.<br /><br />While definitely not without its glitches, it feels like a beta version of what our future will one day be like and it's highly entertaining to say the least. The restaurant isn't a fully programmed establishment (yet), it's more of a mixed-service endeavour where robots are the main attraction but humans definitely still run the show.";  
    
    //Bar Ravel info
    info[1][0]="Bar Raval";
    info[1][1]=4;
    info[1][2]="Bar Raval is similar to its sibling restaurant Bar Isabel with a perpetually changing menu of Spanish tapas, but with a casual atmosphere that involves mostly standing room and a bar laden with pintxos.<br /><br />It’s another project of Grant van Gameren, who also has Eastern European pub Tennessee Tavern and mezcal-heavy bars El Rey and Pretty Ugly. Unlike these other places, though, Raval is open early til late for coffee and pastries up to cocktails and conservas.<br /><br />The smallish space is enrobed in swooping wooden curves that recall Gaudi or Dali, bottles lined up along the edges. Mirrors hide in corners behind narrow ledges, making the bar feel like it’s made up of a collection of intimate hidden nooks and crannies.<br /><br />Ms. Primo ($15) is just one of the eccentrically named, exhaustively described cocktails in what isn’t so much a menu but a gallery complete with little pictures of glassware. It’s a seductive and refreshing blend of Tio Pepe, chartreuse, cava, Ketel One, cucumber, lime, melon and mint."
    
    //Famiglia
    info[2][0]="Famiglia";
    info[2][1]=5;
    info[2][2]="Famiglia Baldassarre hand-makes 27 traditional types of wholesale fresh pasta from scratch for some of Toronto’s best restaurants, and also turns into a restaurant for a two-hour lunch service four days a week.<br /><br />This short window where pasta can be purchased for dine-in or takeout, the fact that only a few rotating fillings and shapes are available each day, and the high quality and technique involved in making the food are all part of why this place draws lineups before doors open.<br /><br />There are typically just two pasta shapes with two sauce options on the dine-in menu from noon to 2 p.m., Tuesday to Friday, but nearly 20 are retailed on the same days from noon until 5 p.m."

    let reviewBtns = document.getElementsByClassName("reviewButton");//Need all the review buttons;
    let reviewOverlay = document.getElementById("reviewOverlay");
    
    let restaurantName = document.getElementById("restaurantName");
    let restaurantRating = document.getElementById("restaurantRating");
    let restaurantInfo = document.getElementById("restaurantInfo");

    let approve = document.getElementById("approveSubmission");
    let reject = document.getElementById("rejectSubmission");
    approve.addEventListener("click", Approve);
    reject.addEventListener("click", Reject);
    let currentSelection = null;
    for(i = 0; i<reviewBtns.length;i++)
    {
        reviewBtns[i].addEventListener("click", ReviewSubmission);
    }

    function ReviewSubmission()
    {
        let index = this.value;
        currentSelection = index;
        restaurantName.innerHTML = info[index][0];
        restaurantRating.innerHTML="Rating: <span>";
        for (i=0;i<info[index][1];i++){
            restaurantRating.innerHTML = restaurantRating.innerHTML+"&bigstar;";
        }
        restaurantRating.innerHTML = restaurantRating.innerHTML+"</span>";
        restaurantInfo.innerHTML = info[index][2];

        HideAdminPanel();
        reviewOverlay.style.display = "block";
    }

    function HideOverlay()
    {
        reviewOverlay.style.display = "none";
    }
    function HideRestaurantListing(index)
    {
        reviewBtns[index].style.display = "none";
    }
    function Approve()
    {
        HideRestaurantListing(currentSelection);
        HideOverlay();
        ShowAdminPanel();
    }
    function Reject()
    {
        HideRestaurantListing(currentSelection);
        HideOverlay();
        ShowAdminPanel();
    }
});