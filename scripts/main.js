// slide show functionality
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const typing = document.querySelector(".typing");
const notes = document.querySelectorAll(".notes");
const rail = document.querySelector(".costume.slide-in");
console.log(rail);
let computedStyles = window.getComputedStyle(rail);

// console.log(notes);
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
	// add the typing class to start the hello world animation
	if (index === 0) {
		if (typing.classList.contains("nonActive")) {
			typing.classList.remove("nonActive");
		}
	}

	if (index !== 0) {
		// append the .nonActive class to .typing to hide the text if it isn't the coding slide
		typing.classList.add("nonActive");
	}
	if (index === 2) {
		blinkInterval = setInterval(blink, 1000);
		// console.log(blinkInterval);
		infoSlideImages[index].style.display = "block";
	} else if (index === 1) {
		console.log("ok here is the clothes rails chance");
		infoSlideImages[index].style.display = "block";
		rail.style.left = "-255px";
		console.log(
			"the picture left position is " + computedStyles.getPropertyValue("left")
		);
		clearInterval(blinkInterval);
		typing.classList.remove("hideText");
	} else {
		infoSlideImages[index].style.display = "block";
		clearInterval(blinkInterval);
		typing.classList.remove("hideText");
	}
	notes.forEach((note) => {
		note.style.display = "none";
	});
	notes[index].style.display = "block";
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
		display(index);
		currentSlide = index;
	});
});
