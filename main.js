const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
// select the info-box pics
const infoSlideImages = document.querySelectorAll(".slide-in");

// use an index variable to track which slide we're on
let index = 0;
// call the function when the page is loaded
display(index);

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
	infoSlideImages[index].style.display = "block";
	infoSlideImages[index].classList.add("active");
}

// next slide function
function nextSlide() {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}

// previous slide function
function prevSlide() {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

// add event listeners to next and previous buttons and slide-in pics
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// thumbnail image controls
function currentSlide(n) {
	console.log(n);
	display((index = n));
}
