const buttonNumber = document.getElementById('button-number');
const buttonName = document.getElementById('button-name');

buttonNumber.addEventListener('click', fNumber);
buttonName.addEventListener('click', fName);

function fNumber() {
	console.log('number button is pressed');
}
function fName() {
	console.log('name button is pressed');
}