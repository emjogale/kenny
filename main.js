const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

// use an index variable to track which slide we're on
let index = 0;
// call the function when the page is loaded
display(index);

// define the function
function display(index) {
	slides.forEach((slide) => {
		slide.style.display = "none";
	});
	console.log(slides[index]);
	slides[index].style.display = "block";
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

// add event listeners to next and previous buttons
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
