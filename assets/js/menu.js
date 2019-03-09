var hamburger;
var hiddenMenu;
var hamburgerButton;
var isHiddenMenuActive = false;

window.onload = initMenu

function initMenu() {
	hamburger = document.getElementsByClassName("hamburger-button")[0];
	hiddenMenu = document.getElementsByClassName("hidden-menu")[0];
	hamburgerButton = hamburger.getElementsByClassName("fa-bars")[0];

	hamburger.onclick = toggleHamburger;

	hiddenMenu.addEventListener("click", function(){
		let targetElement = event.target
		if (targetElement.tagName == "A"){
			toggleHamburger();
			buildGrid(event.target.dataset.group);
		}
	});
}

function toggleHamburger(){
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


