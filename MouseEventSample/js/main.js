
function onLoaded() {
	let log = document.createTextNode('?');

	function logButtons(e) {
		log.data = `${e.buttons} (${e.type})`;
	}

	document.addEventListener('mouseup', logButtons);
	document.addEventListener('mousedown', logButtons);
	document.addEventListener('mousemove', logButtons);

	document.querySelector('#log').appendChild(log)
}
