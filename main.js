const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
console.log(dots);
let dot;
// select the info-box pics
const infoSlideImages = document.querySelectorAll(".slide-in");
// select the flower image
const flower = document.getElementById("flower");
// declare the blinkInterval
let blinkInterval;
// use an index variable to track which slide we're on
let index = 0;

let currentSlide;
// call the function when the page is loaded
display(index);

// define the function to change between open and shut pictures
let isOpen = true;
function blink() {
	if (isOpen) {
		flower.src = "./images/shutEyeFlower.png";
		isOpen = false;
	} else {
		flower.src = "./images/resizedFlower.png";
		isOpen = true;
	}
}

// define the display function
function display(index) {
	slides.forEach((slide) => {
		slide.style.display = "none";
	});
	slides[index].style.display = "block";
	dots.forEach((dot) => {
		dot.style.backgroundColor = "#bbb";
	});
	dots[index].style.backgroundColor = "aqua";
	infoSlideImages.forEach((info) => {
		info.style.display = "none";
	});
	if (index === 2) {
		blinkInterval = setInterval(blink, 1000);
		// console.log(blinkInterval);
		infoSlideImages[index].style.display = "block";
	} else {
		infoSlideImages[index].style.display = "block";
		clearInterval(blinkInterval);
	}
}

// next slide function
function nextSlide() {
	console.log(currentSlide);
	if (currentSlide) {
		index = currentSlide;
	}
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
	currentSlide = false;
}

// previous slide function
function prevSlide() {
	console.log("current slide is ", currentSlide);
	console.log("index is ", index);
	if (currentSlide) {
		index = currentSlide;
	}
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
	currentSlide = false;
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// add an event listener to the dots and display the corresponding slide

dots.forEach((dot, index) => {
	dot.addEventListener("click", (e) => {
		console.log(currentSlide);

		display(index);
		currentSlide = index;
	});
});
