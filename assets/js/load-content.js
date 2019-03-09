var dataBase;
var cardGrid;
var menuItems;
var hiddenMenuItems;


window.onload = initGridControl

function initGridControl(){
	menuItems = document.getElementsByClassName("menu-items")[0];
	menuItems.addEventListener("click", function(){
		let targetElement = event.target
		if (targetElement.tagName == "A"){
			buildGrid(event.target.dataset.group);
		}
	});
}

function buildGrid(groupNameFromCaller) {
	console.log(groupNameFromCaller);

	cardGrid = document.getElementsByClassName("logo-library")[0];
	document.body.removeChild(cardGrid);
	cardGrid = document.createElement("div");
	cardGrid.classList.add("logo-library");
	document.body.appendChild(cardGrid);

	let request = new XMLHttpRequest();
	request.open('GET', 'assets/js/database.json', true);

	request.onload = function () {
  		dataBase = JSON.parse(this.response);
  		console.log(dataBase);
  		for (i = 0; i < dataBase.length; i++){
  			let tempASvg = document.createElement("a");
  			tempASvg.innerHTML = "SVG";
  			tempASvg.href= "assets/database/" + dataBase[i].parentGroup + "/" + dataBase[i].groupName + "/" + dataBase[i].groupName + ".svg";
  			tempASvg.download = dataBase[i].groupName + ".svg"

  			let tempAPng = document.createElement("a");
  			tempAPng.innerHTML = "PNG";
  			tempAPng.href= "assets/database/" + dataBase[i].parentGroup + "/" + dataBase[i].groupName + "/" + dataBase[i].groupName + ".png";
  			tempAPng.download = dataBase[i].groupName + ".png"

  			let tempAAi = document.createElement("a");
  			tempAAi.innerHTML = "AI";
  			tempAAi.href= "assets/database/" + dataBase[i].parentGroup + "/" + dataBase[i].groupName + "/" + dataBase[i].groupName + ".ai";
  			tempAAi.download = dataBase[i].groupName + ".ai"

  			let tempBotSpan = document.createElement("span");
  			tempBotSpan.appendChild(tempASvg);
  			tempBotSpan.appendChild(tempAPng);
  			tempBotSpan.appendChild(tempAAi);

  			let groupFullName = document.createElement("p");
  			groupFullName.innerHTML = dataBase[i].groupFullName;

  			let tempSecondLayerSpan = document.createElement("span");
  			tempSecondLayerSpan.appendChild(groupFullName); 
  			tempSecondLayerSpan.appendChild(tempBotSpan);

  			let groupLogoImage = document.createElement("img");
  			groupLogoImage.src = "assets/database/" + dataBase[i].parentGroup + "/" + dataBase[i].groupName + "/display-image.png";
  			groupLogoImage.alt = dataBase[i].groupFullName;

  			let tempCard = document.createElement("span");
  			tempCard.appendChild(groupLogoImage);
  			tempCard.appendChild(tempSecondLayerSpan);

  			cardGrid.appendChild(tempCard);
  		}
	}

	request.send();
}
