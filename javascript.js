
let number = 0;

function askNumber() {
	number = prompt("How many squares do you want?");
	return number
}


function removeDOM() {
	const first = document.getElementById("first")
	//if (first.hasChildNodes) {
		//console.log(first.children) }

	square = document.getElementsByClassName("square")
	first.innerHTML = ""
}


/*function createDiv(input, text="test") {
	const first = document.getElementById("first")
	if (first.hasChildNodes) {
		const toRemove = document.getElementsByClassName("square")
		toRemove.remove()
	}
	for (let x=0; x<input; x++) {
		const container = document.createElement("div")
		container.classList.add("container")
		const body = document.getElementById("first");
		body.appendChild(container);
		for (let i=0; i<input; i++) {
			const div = document.createElement("div");
			div.textContent = text;
			div.classList.add("square")
			container.appendChild(div);
			div.addEventListener("mouseenter", function( event ) {
				event.target.style.color="orange";
				setTimeout(function() {
					event.target.style.color="";
				}, 10000);
			}, false);
		}
	}
}
*/


function createDiv(input, text="test") {
	for (let x=0; x<input; x++) {
		const container = document.createElement("div")
		container.classList.add("container")
		const body = document.getElementById("first");
		body.appendChild(container);
		for (let i=0; i<input; i++) {
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
