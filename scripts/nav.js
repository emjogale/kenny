// Hamburger menu functionality
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const xIcon = document.querySelector(".xIcon");
const menuIcon = document.querySelector(".menuIcon");

// define the toggleMenu function
function toggleMenu() {
	menu.classList.toggle("show");
	xIcon.classList.toggle("hide-icon");
	xIcon.classList.toggle("show-icon");
	menuIcon.classList.toggle("show-icon");
	menuIcon.classList.toggle("hide-icon");
	setAriaExpanded();
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
	hamburger.setAttribute("aria-expanded", expanded);
}

// add a click event listener to the hamburger button
hamburger.addEventListener("click", toggleMenu);
