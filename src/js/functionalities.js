function openPage(pageName) {
    newLocation = "../pages/" + pageName + ".html";
    window.location.replace(newLocation);
}

function activateSlide(sliderId, newSlide) {
    //console.log(element);
    var activeSlide = document.getElementById(sliderId);
    const currentActiveSlide = activeSlide.querySelector(".active");
    
    currentActiveSlide.setAttribute("aria-current", false);
    currentActiveSlide.classList.remove("active")

    newSlide.setAttribute("aria-current", true);
    newSlide.classList.add("active")
}