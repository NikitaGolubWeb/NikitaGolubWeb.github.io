(function() {
	var toggles = document.querySelectorAll('.page-header__nav__toggle');
	Array.prototype.forEach.call(toggles, function(toggle) {
		toggle.addEventListener('click', function(e) {
			e.preventDefault();
			e.target.parentNode.classList.toggle('is-open');
		});
	});
}());