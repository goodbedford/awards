describe("App", function () {


	describe("toggleDropdown", function () {
		var menuToggle, dropDownNav;


		beforeEach(function() {
			fixture.setBase('spec/fixtures');
			// btn = document.createElement("a");
			// btn.classList.add("menu-toggle");
			// dropDownNav = document.createElement("ul");
		});

		beforeEach(function() {
			this.nav = fixture.load('nav.html');
		});
		
		afterEach(function() {
			fixture.cleanup();
		});
		
		beforeEach(function() {
			menuToggle = fixture.el.querySelector(".menu-toggle");
			dropDownNav = fixture.el.querySelector(".flex-nav");
		});

		it("should have menuToggle btn", function() {
			// console.log("gbtest" ,menuToggle);
			expect(menuToggle.nodeName).toBe('A');
			// expect(menuToggle.classList.length).toBe(2);
		});

		it("should call toggleDropdown when  menuToggle clicked", function() {
			menuToggle.click();
			toggleDropdown.bind(menuToggle, "click", dropDownNav);
			// console.log("gbtest" ,menuToggle);

			expect(dropDownNav.classList).toEqual("flex-nav flex-nav--isOpen");
		})
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