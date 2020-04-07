let alertBtn = 
document.querySelectorAll('.slide-info');

for (var i = 0; i < alertBtn.length; i++ ){
	alertBtn[i].addEventListener("click", fresherAlert);

};

function fresherAlert() {
	alert("More information about this event will be available soon");
};

