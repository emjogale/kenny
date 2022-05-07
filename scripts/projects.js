// project data
const portfolio = [
	{
		id: 1,
		title: "leegale.co.uk",
		link: "https://leegale.co.uk",
		description: "Journalist's archive website",
		img: "./images/leegale-homepage-resized-2.png",
		alt: "screenshot of leegale.co.uk",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore quia accusantium voluptatum atque explicabo, ex totam aut nobis odio.",
	},

	{
		id: 2,
		title: "sign-up form",
		link: "https://sign-up-form-gilt.vercel.app",
		description: "A form with input validation",
		img: "./images/sign-up-form.jpg",
		alt: "screenshot of sign-up form",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
	},
];

// select items
const img = document.getElementById("project-img");
const title = document.getElementById("project-title");
const description = document.getElementById("description");
// const alt = document.getElementById("project-img");
const text = document.getElementById("info");
const link = document.getElementById("link");

const h2link = document.getElementById("h2link");
console.log(h2link);

const prevBtn = document.querySelector(".prev-btn");
console.log(prevBtn);
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// set starting item
let currentItem = 0;
// load initial item
window.addEventListener("DOMContentLoaded", function () {
	showProject(currentItem);
});
// show person based on item
function showProject(project) {
	const item = portfolio[project];
	img.src = item.img;
	title.textContent = item.title;
	description.textContent = item.description;
	info.textContent = item.text;
	link.href = item.link;
	h2link.href = item.link;
}
// show next person
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > portfolio.length - 1) {
		currentItem = 0;
	}
	showProject(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = portfolio.length - 1;
	}
	showProject(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
	currentItem = Math.floor(Math.random() * portfolio.length);
	showProject(currentItem);
});
