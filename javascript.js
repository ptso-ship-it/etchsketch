
function createDiv(text) {
	for (let x=0; x<4; x++) {
		const container = document.createElement("div")
		container.classList.add("container"+x)
		const body = document.getElementById("first");
		body.appendChild(container);
		for (let i=0; i<4; i++) {
		const div = document.createElement("div");
		div.textContent = text;
		div.classList.add("square")
		container.appendChild(div);
		div.addEventListener("mouseenter", function( event ) {
			event.target.style.color="orange";
			setTimeout(function() {
				console.log("timoeout")
				event.target.style.color="";
			}, 10000);
		}, false);
		}
	}
}

createDiv("test");