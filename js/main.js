
const mobButton = document.querySelector('.mob-nav');
const mobContent = document.querySelector('.mob-content');
function loadNav(){
	mobContent.classList.toggle('active');
		
}



mobButton.addEventListener('click',loadNav);





const buttonClick = document.querySelectorAll('.button');
const contentLoad = document.querySelector('.section-content');
const resources = [
					{
						heading : 'Substainablility',
						image	: '<i class="button fab fa-pagelines"></i>',
						content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nibh et elit accumsan sagittis et eget tellus. Maecenas euismod lacus vel erat dignissim tincidunt. Suspendisse placerat, magna a venenatis viverra, felis augue commodo eros, non molestie lacus tortor in tellus. Etiam sit amet cursus diam, quis accumsan nulla. Sed ornare rhoncus arcu a tincidunt. Nulla blandit lectus eget nunc vehicula facilisis. Phasellus velit nisl, congue in pellentesque sit amet, mattis ac erat. Mauris tincidunt imperdiet turpis fermentum gravida. Ut nec urna quis magna bibendum viverra.',
						content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nibh et elit accumsan sagittis et eget tellus. Maecenas euismod lacus vel erat dignissim tincidunt. Suspendisse placerat, magna a venenatis viverra, felis augue commodo eros, non molestie lacus tortor in tellus. Etiam sit amet cursus diam, quis accumsan nulla. Sed ornare rhoncus arcu a tincidunt. Nulla blandit lectus eget nunc vehicula facilisis. Phasellus velit nisl, congue in pellentesque sit amet, mattis ac erat. Mauris tincidunt imperdiet turpis fermentum gravida. Ut nec urna quis magna bibendum viverra.'		
					},
					{
						heading : 'Profitibility',
						image	: '<i class="button fas fa-solar-panel"></i>',
						content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nibh et elit accumsan sagittis et eget tellus. Maecenas euismod lacus vel erat dignissim tincidunt. Suspendisse placerat, magna a venenatis viverra, felis augue commodo eros, non molestie lacus tortor in tellus. Etiam sit amet cursus diam, quis accumsan nulla. Sed ornare rhoncus arcu a tincidunt. Nulla blandit lectus eget nunc vehicula facilisis. Phasellus velit nisl, congue in pellentesque sit amet, mattis ac erat. Mauris tincidunt imperdiet turpis fermentum gravida. Ut nec urna quis magna bibendum viverra.'
							

					},
					{
						heading : 'Efficiency',
						image	: ' <i class="button fas fa-wind"></i>',
						content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nibh et elit accumsan sagittis et eget tellus. Maecenas euismod lacus vel erat dignissim tincidunt. Suspendisse placerat, magna a venenatis viverra, felis augue commodo eros, non molestie lacus tortor in tellus. Etiam sit amet cursus diam, quis accumsan nulla. Sed ornare rhoncus arcu a tincidunt. Nulla blandit lectus eget nunc vehicula facilisis. Phasellus velit nisl, congue in pellentesque sit amet, mattis ac erat. Mauris tincidunt imperdiet turpis fermentum gravida. Ut nec urna quis magna bibendum viverra.',
						content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nibh et elit accumsan sagittis et eget tellus. Maecenas euismod lacus vel erat dignissim tincidunt. Suspendisse placerat, magna a venenatis viverra, felis augue commodo eros, non molestie lacus tortor in tellus. Etiam sit amet cursus diam, quis accumsan nulla. Sed ornare rhoncus arcu a tincidunt. Nulla blandit lectus eget nunc vehicula facilisis. Phasellus velit nisl, congue in pellentesque sit amet, mattis ac erat. Mauris tincidunt imperdiet turpis fermentum gravida. Ut nec urna quis magna bibendum viverra.'	

					}
				];

function contentLoader(ev){
	let evButton = ev.target.className;



if (evButton === "button fab fa-pagelines"){
	contentLoad.innerHTML = `<h1>${resources[0].heading}<h1>
							 <div class="section-content-img">${resources[0].image}</div>
							 <div class="section-content-text">
							 	<p>${resources[0].content1}</p>
							 	<p>${resources[0].content2}</p>
							 </div>`;


} else if(evButton === "button fas fa-solar-panel"){
	contentLoad.innerHTML = `<h1>${resources[1].heading}<h1>
							 <div class="section-content-img">${resources[1].image}</div>
							 <div class="section-content-text">
							 	<p>${resources[1].content1}</p>
							 </div>`;

} else {
	contentLoad.innerHTML = `<h1>${resources[2].heading}<h1>
							 <div class="section-content-img">${resources[2].image}</div>
							 <div class="section-content-text">
							 	<p>${resources[2].content1}</p>
							 	<p>${resources[2].content1}</p>
							 </div>`;
}

};



buttonClick[0].addEventListener('click', contentLoader);
buttonClick[1].addEventListener('click', contentLoader);
buttonClick[2].addEventListener('click', contentLoader);




//Jquery

$(document).ready(() => {

$('.button').on('click', (event) => {
	$(".line-start").hide();
	$('.section-content').hide();
	$('.section-content').fadeIn('fast');
});


$('.fa-pagelines').on('click', () => {

$('.line-i-1').animate({
	width : '50px'
}, 200);
$('.line-i-2').animate({
	width : '0px'
}, 200);
$('.line-i-3').animate({
	width : '0px'
}, 200);

});

$('.fa-solar-panel').on('click', () => {

$('.line-i-2').animate({
	width : '70px'
}, 200);
$('.line-i-1').animate({
	width : '0px'
}, 200);
$('.line-i-3').animate({
	width : '0px'
}, 200);

});

$('.fa-wind').on('click', () => {
$('.line-i-3').animate({
	width : '50px'
}, 200);
$('.line-i-2').animate({
	width : '0px'
}, 200);
$('.line-i-1').animate({
	width : '0px'
}, 200);

});






});








