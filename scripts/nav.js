// Hamburger menu functionality
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const xIcon = document.querySelector(".xIcon");
const menuIcon = document.querySelector(".menuIcon");

// define the toggleMenu function
function toggleMenu() {
	if (menu.classList.contains("show")) {
		menu.classList.remove("show");
		xIcon.style.display = "none";
		menuIcon.style.display = "block";
	} else {
		menu.classList.add("show");
		xIcon.style.display = "block";
		menuIcon.style.display = "none";
	}
}

// set aria-expanded true or false on hamburger button
function setAriaExpanded() {
	let expanded = hamburger.getAttribute("aria-expanded");
	console.log();
	if (expanded == "false") {
		expanded = "true";
	} else {
		expanded = "false";
	}
}
// add a click event listener to the hamburger button
hamburger.addEventListener("click", toggleMenu);
