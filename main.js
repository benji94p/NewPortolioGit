
/* BURGER MENU EVENT HANDLER */
let burgerLink = document.querySelector(".menu");
let burgerMenu = document.querySelector(".hamburger");

burgerMenu.addEventListener("click", showMenu);

function showMenu () {


    if (burgerLink.style.display === 'none') {
        burgerLink.style.display = 'block';
        let parallax = document.querySelector ('.parallax');
    }
    else {
        burgerLink.style.display = 'none';
    }
}

/* SKILLS SWITCHER */

window.onload= first();

function first () {
    setTimeout(showSecond, 2000);
    setTimeout(switchImage, 3000);
    setTimeout(showArrow, 4000);
}

var string = "";
let pSwith = document.querySelector("#switcher");
let arrowDiv = document.querySelector("#arrowcontainer");
arrowDiv.style.display = "none";
pSwith.style.display = "none";
function switchImage () {

    pSwith.style.display = "";
    if(string == "") {
        string = "Psd to HTML";
        pSwith.innerHTML = string ;
    }
    else if (string == "Psd to HTML") {
        string ="CSS";
        pSwith.innerHTML = string ;
    }
    else if (string == "CSS") {
        string = "Bootstrap";
        pSwith.innerHTML = string ;
    }
    else if (string == "Bootstrap") {
        string = "Logo design";
        pSwith.innerHTML = string ;
    }
    else if (string == "Logo design") {
        string = "jQuery";
        pSwith.innerHTML = string ;
    }
    else if (string == "jQuery") {
        string = "UserInterface";
        pSwith.innerHTML = string ;
    }
    else if (string =="UserInterface") {
        string = "";
    }
    setTimeout(switchImage, 200);
};


//Animation Front page

function showSecond () {
    let secondPara = document.querySelector('#secondp');
    secondPara.style.visibility = "visible";
    secondPara.classList.add("fadeanimation");
}

//Hover show description

let dportfolio = document.querySelector("#d_portfolio");
dportfolio.onmouseover = function(){
    console.log("fz");
    dportfolio.style.display = "block";
};

//Show arrow

function showArrow () {
    arrowDiv.style.display = "";
    arrowDiv.classList.add("fadeanimation");
}
