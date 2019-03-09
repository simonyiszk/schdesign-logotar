window.onload = function(){
	let hamburger = document.getElementsByClassName("hamburger-button")[0];
	let hiddenMenu = document.getElementsByClassName("hidden-menu")[0];
	let hamburgerButton = hamburger.getElementsByClassName("fa-bars")[0];
	var isHiddenMenuActive = false;

	hamburger.onclick = function(){
		if (!isHiddenMenuActive){
			isHiddenMenuActive = true;
			hiddenMenu.style.visibility = "visible";
			hiddenMenu.style.zIndex = "2";
			hamburgerButton.classList.toggle("fa-times");
		}
		else if(isHiddenMenuActive){
			isHiddenMenuActive = false;
			hiddenMenu.style.visibility = "hidden";
			hiddenMenu.style.zIndex = "-1";
			hamburgerButton.classList.toggle("fa-times");
		}
		else{
			console.log("Error #1: isHiddenMenuActive has invalid data");
		}
	}
}

