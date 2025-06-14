const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"];

const continentSelect = document.getElementById('continentSelect');

function populateContinents() {
    continents.forEach(continent => {
        const option = document.createElement('option');

        option.value = continent;

        option.textContent = continent;

        continentSelect.appendChild(option);
    });
}

populateContinents();

document.addEventListener("DOMContentLoaded", initializeSlider);

function sliderShow() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);//pauses when the previous back button is pressed
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

//display submit output
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.querySelector("#current-year").textContent = `© ${currentYear}`;
document.querySelector("#last-modified").textContent = `Last updated: ${lastModified}`;