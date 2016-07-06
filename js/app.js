"use strict";

var menuToggle = document.querySelector(".menu-toggle");
var dropDownNav = document.querySelector(".flex-nav");
var body = document.querySelector("body");
var menuRow = document.querySelector(".header__content--flex-menu-row");
var red = "red";

function toggleDropdown(event, target) {
	var classes = Array.prototype.slice.call(target.classList);
	console.log("classes", classes);

	function hasOpenClass(classesArr) {
		var isOpen = [];
		isOpen = classesArr.filter(function (item) {
			return item === "flex-nav--isOpen"
		});
		if (isOpen.length) {
			return true;
		} else {
			return false;
		}
	}

	if (hasOpenClass(classes)) {
		target.classList.remove("flex-nav--isOpen");
		this.classList.remove("header__btn--isOpen");
	} else {
		target.classList.add("flex-nav--isOpen");
		this.classList.add("header__btn--isOpen");

	}
}

function fixTop(event, target) {

}

if (menuToggle) {
	menuToggle.addEventListener("click", toggleDropdown.bind(menuToggle, event, dropDownNav));
}

window.addEventListener("scroll", function (event) {
	console.log("scrollling");
	var windowHeight = window.scrollY;
	var header = document.querySelector(".flex-header-wrapper");
	if (windowHeight > 40) {
		console.log(" window scrooll moved greater than 100px");
		menuRow.classList.add("fix-top");
		header.style.marginBottom = "65px";

	} else {
		menuRow.classList.remove("fix-top");
		header.style.marginBottom = "0px";

	}

})
