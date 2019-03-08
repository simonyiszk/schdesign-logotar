let hamburger = document.getElementsByClassName("hamburger-button");
let hiddenMenu = document.getElementsByClassName("hidden-menu");
var isHiddenMenuActive = false
hamburger[0].onclick = function(){
	if (!isHiddenMenuActive){
		isHiddenMenuActive = true
		hiddenMenu[0].style.visibility = "visible";
		hiddenMenu[0].style.zIndex = "2";
	}
	else if(isHiddenMenuActive){
		isHiddenMenuActive = false
		hiddenMenu[0].style.visibility = "hidden";
		hiddenMenu[0].style.zIndex = "-1";
	}
	else{
		console.log("Error #1: isHiddenMenuActive invalid data");
	}
}