// Hamburger menu functionality
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const xIcon = document.querySelector(".xIcon");
const menuIcon = document.querySelector(".menuIcon");
const menuLinks = document.querySelectorAll(".menuLink");

// define the toggleMenu function
function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		xIcon.style.display = "none";
		menuIcon.style.display = "block";
	} else {
		menu.classList.add("showMenu");
		xIcon.style.display = "block";
		menuIcon.style.display = "none";
	}
}
// add a click event listener to the hamburger button
hamburger.addEventListener("click", toggleMenu);

// hide the menu when a link is clicked on
menuLinks.forEach(function (menulink) {
	menulink.addEventListener("click", toggleMenu);
});
