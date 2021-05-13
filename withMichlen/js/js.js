let circles = document.querySelectorAll('.circle');
let area = document.querySelector('.areaPlay');
let shiftColor = false; 
let clear_all_btn = document.querySelector('.clear_all');
let allArea = document.querySelector('.container');

allArea.addEventListener('mousemove', function(){
	area.style = `border: 1px solid ${webstore.borderColor};`;
})

function shift(current){
	circles[current].addEventListener('mousemove', function(){
		if (shiftColor)
			circles[current].style = `background-color: ${webstore.currentColor}`;
	})

}

area.addEventListener('click', function(){
	if (!shiftColor)
		shiftColor = true;
	else
		shiftColor = false;
})

for (let i = 0; i < circles.length; i++){
	shift(i);
}

clear_all_btn.addEventListener('click', function(){
	for (let i = 0; i < circles.length; i++) {
		circles[i].style = `background-color: ${webstore.clear}`;
	}
})
