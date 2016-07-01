describe("App", function() {

	it("should have btn menuToggle class", function() {
		var btn = document.createElement("a");
		btn.classList.add("menu-toggle");
		expect(btn.className).toBe("menu-toggle");

	});
	xit("should have a toggleDropdown function defined", function() {
		var btn

		expect(toggleDropdown).toBeDefined();
	});


});