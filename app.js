function edisty() {
	var progressBar = document.getElementById("edistyminen");
	var value = 0;
	var interval = setInterval(function() {
		value++;
		progressBar.value = value;
		if(value >= 100) {
			clearInterval(interval);
		}
	}, 10);	
}