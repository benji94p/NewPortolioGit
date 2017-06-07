
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
    chooseTheme();
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
    setTimeout(switchImage, 280);
};



//Animation Front page

function showSecond () {
    let secondPara = document.querySelector('#secondp');
    secondPara.style.visibility = "visible";
    secondPara.classList.add("fadeanimation");
}

//Show arrow

function showArrow () {
    arrowDiv.style.display = "";
    arrowDiv.classList.add("fadeanimation");
}

// Select theme

function chooseTheme () {

let card1 = document.querySelector("#card_flex0");
let card2 = document.querySelector ("#card_flex1");
let card3 = document.querySelector('#card_flex2');
let card4 = document.querySelector('#card_flex3');

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");

card2.style.display = "none";
card3.style.display = "none";
card4.style.display = "none";

input1.addEventListener("click", showThemeOne);
input2.addEventListener("click", showThemeTwo);
input3.addEventListener("click", showThemeThree);
input4.addEventListener("click", showThemeFour);

function showThemeOne () {
    card1.style.display = "";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
}

function showThemeTwo () {
    card1.style.display = "none";
    card2.style.display = "flex";
    card3.style.display = "none";
    card4.style.display = "none";
}

function showThemeThree () {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "flex";
    card4.style.display = "none";
}

function showThemeFour () {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "flex";
}


    }

// Trigger Event on scrolling

$(window).scroll(function() {
   var hT = $('#artimage').offset().top,
       hH = $('#artimage').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
       document.querySelector("#artimage").classList.add('artanimation');
   }
});
