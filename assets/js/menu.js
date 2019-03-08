let hamburger = document.getElementsByClassName("hamburger-button");
let hiddenMenu = document.getElementsByClassName("hidden-menu");
let hamburgerButton = hamburger[0].getElementsByClassName("fa-bars");
var isHiddenMenuActive = false;

hamburger[0].onclick = function(){
	if (!isHiddenMenuActive){
		isHiddenMenuActive = true;
		hiddenMenu[0].style.visibility = "visible";
		hiddenMenu[0].style.zIndex = "2";
		hamburgerButton[0].classList.add("fa-times");
	}
	else if(isHiddenMenuActive){
		isHiddenMenuActive = false;
		hiddenMenu[0].style.visibility = "hidden";
		hiddenMenu[0].style.zIndex = "-1";
		hamburgerButton[0].classList.remove("fa-times");
	}
	else{
		console.log("Error #1: isHiddenMenuActive has invalid data");
	}
}