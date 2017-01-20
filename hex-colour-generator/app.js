// generate color
function getColor() {
	return '#' + Math.random().toString(16).slice(2, 8);
}
// set background color style - based on this script http://stackoverflow.com/a/11868398/2588066
function setBackground() {
	var bgColor = getColor();
	var hex = bgColor.slice(1, 7); // removes '#' from Hex code
	document.body.style.background = bgColor;
	document.getElementById("hex").innerHTML = bgColor;
	// detects background brightness
	var r = parseInt(hex.substr(0, 2), 16);
	var g = parseInt(hex.substr(2, 2), 16);
	var b = parseInt(hex.substr(4, 2), 16);
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	if (yiq >= 128) {
		document.getElementById("cmd").style.color = 'black';
	} else {
		document.getElementById("cmd").style.color = 'white';
	}
}
// change color on spacebar press 
document.body.onkeyup = function(e) {
	if (e.keyCode == 32) {
		setBackground();
	}
};
// change color on mouse click
$(function() {
	$(document).on('click', function(e) {
		if (e.target.className === 'btn') {
			$('#success').css('display', '');
			$('#success').fadeOut(2000);
			$('button').blur();
			document.getSelection().removeAllRanges();
		} else {
			setBackground();
		}
	});
});
// clipboard button
var clipboard = new Clipboard('.btn');