const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
console.log(dots);
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
// select the info-box pics
const infoSlideImages = document.querySelectorAll(".slide-in");
// select the clothes rail pic
const coding = document.querySelector(".coding");
const costume = document.querySelector(".costume.slide-in");
console.log(coding);

// define the slide-in function for the info-box pic
function slideIn(e) {
	if (index === 1) {
		console.log(index);
		console.log("We need the clothes rail");
		costume.classList.remove("hidden");
		costume.classList.add("active");
		coding.classList.add("hidden");
		console.log("computer has class hidden");
	} else if (index === 0) {
		costume.classList.remove("active");
		coding.classList.add("show");
	}
}

// add event listeners to next and previous buttons and slide-in pics
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
next.addEventListener("click", slideIn);

// thumbnail image controls
function currentSlide(n) {
	console.log(n);
	display((index = n));
	slideIn((index = n));
}
