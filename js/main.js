
const body = document.querySelector("body");
const navbar = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 40) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

// nav hide 


menuBtn.onclick = () => {
    navbar.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    navbar.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabled");
}



let navLinks = document.querySelectorAll("li a");
    for(var i = 0; i < navLinks.length; i++){
        navLinks[i].addEventListener("click", function(){
            navbar.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabled");
        })
    }


    let mixerPortfolio = mixitup(".work-container", {
        selectors: {
            target: '.work-card'
        },
        animation: {
            duration: 300
        }
    });

    // link Active work 
const linkwork = document.querySelectorAll(".work-item");
function activeWork() {
    linkwork.forEach(l=>l.classList.remove("active-work"))
    this.classList.add("active-work");
}
linkwork.forEach(l=>l.addEventListener("click", activeWork))