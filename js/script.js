const sliderImages = [
    "img/01.jpg", 
    "img/02.jpg", 
    "img/03.jpg", 
    "img/04.jpg", 
    "img/05.jpg"
];

const itemsContainer = document.querySelector(".items-container");
const thumbnailsContainer = document.querySelector(".thumbnails-container");

for (let i = 0; i < sliderImages.length; i++) {
    const thisImg = sliderImages[i];
    const itemsElement = `
        <div class="item">
            <img src="${thisImg}" alt ="">
        </div>`;
    const thumbnailsElement = `
        <div class="thumbnail">
        <img src="${thisImg}" alt="">
        </div>`
    itemsContainer.innerHTML += itemsElement;
    thumbnailsContainer.innerHTML += thumbnailsElement;
}

const items = document.getElementsByClassName("item");
const thumbnails = document.getElementsByClassName("thumbnail");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");
thumbnails[sliderPosition].classList.add("active");

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function () {
    items[sliderPosition].classList.remove("active");
    thumbnails[sliderPosition].classList.remove("active");
    if (sliderPosition < sliderImages.length - 1) {
        sliderPosition++;
    } else {
        sliderPosition = 0;
    }
    items[sliderPosition].classList.add("active");
    thumbnails[sliderPosition].classList.add("active");
});

const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function () {
    items[sliderPosition].classList.remove("active");
    thumbnails[sliderPosition].classList.remove("active");
    if (sliderPosition > 0) {
        sliderPosition--;
    } else {
        sliderPosition = sliderImages.length - 1;
    }
    items[sliderPosition].classList.add("active");
    thumbnails[sliderPosition].classList.add("active");
});