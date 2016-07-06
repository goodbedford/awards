describe("App", function () {
	var btn, dropDownNav;

	describe("toggleDropdown", function () {

		beforeEach(function() {
			btn = document.createElement("a");
			btn.classList.add("menu-toggle");
			dropDownNav = document.createElement("ul");
		});

		it("should return false if missing open class", function() {
			expect(toggleDropdown("click", dropDownNav)).toEqual(false);

		});
	});


	xit("should have btn menuToggle class", function () {
		// var btn = document.createElement("a");
		// var dropDownNav = document.createElement("ul");
		// btn.classList.add("menu-toggle");
		expect(menuToggle.className).toBe("menu-toggle");
	});

	xit("should have hasOpenClass function", function () {
		var classes = ["flex-nav"];
		var result = hasOpenClass(classes);
		expect(result).toBe(false);
	});
	xit("should have a toggleDropdown function defined", function () {
		var btn;

		expect(toggleDropdown).toBeDefined();
	});


});