var BACKGROUNDS = 5;

(function() {
	document.getElementById('background').style.background = "url(/assets/landing/" + randint(1, BACKGROUNDS) + ".jpg) no-repeat center center fixed";
	document.getElementById('background').style.backgroundSize = 'cover';
	console.log(randint(10, 20));
})();
