let topMenuShinkValue = 650;
let preloader = document.body.querySelector('#preloader');
let contentLoaded = false;
// disableScroll();

window.onload = function(){
	//** preloader ----------->
	var preloaderHide = function () 
	{
		preloader.classList.add('hide-preloader');
		// now add display: none; to #preloader after 200 ms
		var intervalToDisablePreloader = setInterval(function(){
			preloader.classList.add('disabled');
			enableScroll(); // re-enable scroll
			clearInterval(intervalToDisablePreloader); // clear this interval
		}, 200);
	};
	
	if (preloader) 
	{
		disableScroll(); // disable scroll
		// hide preloader after 100 ms
		var intervalToHidePreloader = setInterval(function(){
			preloaderHide();
			clearInterval(intervalToHidePreloader);
			contentLoaded = true;
		}, 100);
	}
	//** <--------------- end preloader
	// console.log('page loaded!');
}


let scrollState = '';

function disableScroll() {
	// console.log($('body').prop('class'));
	if(scrollState == 'enabled') return;
	if ($('body').hasClass('stop-scrolling') == false) $('body').addClass("stop-scrolling");
	scrollState = 'enabled';
	
}

function enableScroll() {
	// console.log($('body').prop('class'));
	if(scrollState == 'disabled') return;
	if ($('body').hasClass('stop-scrolling') == true) $('body').removeClass("stop-scrolling");
	scrollState = 'disabled';
}
