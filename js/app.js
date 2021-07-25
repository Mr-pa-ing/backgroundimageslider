const body = document.body;
const slides = document.querySelectorAll('.slide');
let btnleft = document.getElementById('left');
let btnright = document.getElementById('right');
// console.log(btnright);

let activeslide = 0;

function setbody(){
	body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}
setbody();

function setactiveslide(){
	slides.forEach(slide=>slide.classList.remove('active'));
	slides[activeslide].classList.add('active');
}
// setactiveslide();

btnright.addEventListener('click',function(){
	activeslide++;
	if (activeslide > slides.length -1) {
		activeslide = 0;
	}
	setbody();
	setactiveslide();
});
btnleft.addEventListener('click',function(){
	activeslide--;
	if( activeslide < 0){
		activeslide = slides.length -1;
	}
	setbody();
	setactiveslide();
})