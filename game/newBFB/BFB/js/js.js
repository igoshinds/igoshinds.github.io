const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const lenRad = 2 * Math.PI * radius;
let nextBtn = document.querySelectorAll('.next-page-btn');
let prevBtn = document.querySelectorAll('.back-btn');
let pers = 0;
let b = document.querySelector('.pox');


circle.style.strokeDasharray = `${lenRad} ${lenRad}`;
circle.style.strokeDashoffset = lenRad;

function setProgress(percent) {
    const offset = lenRad - percent / 100 * lenRad;
    circle.style.strokeDashoffset = offset;
}


for (let i = 0; i < nextBtn.length; i++){
    nextBtn[i].addEventListener('click', function(){
        pers += 33,4;
        setProgress(pers);
    })
}

for (let i = 0; i < prevBtn.length; i++){
    prevBtn[i].addEventListener('click', function(){
        pers -= 33,4;
        setProgress(pers);
        console.log(2)
    })
}

