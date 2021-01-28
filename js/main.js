var revealableItems;
window.addEventListener('load', () => {
	let mainItems = Array.from(document.querySelectorAll('.row>*, footer'));
	mainItems.forEach(e => {
		if (e.getBoundingClientRect().top >= (window.innerHeight * .7))
			e.classList.add('revealable');
	});
	revealableItems = Array.from(document.querySelectorAll('.revealable'));
	//-----
	document.addEventListener('scroll', () => {
		CheckScrollPos();
	})
})

function CheckScrollPos() {
	revealableItems.forEach(e => {
		if (window.pageYOffset >= (document.body.offsetHeight - window.innerHeight))
			e.classList.toggle('revealed', true);
		else if (e.getBoundingClientRect().top < (window.innerHeight * .7))
			e.classList.toggle('revealed', true);
		else if(e.classList.contains('revealed'))
			e.classList.toggle('revealed', false);
	})
}