var dataBase;
var cardGrid;


window.onload = function(){
	cardGrid = document.getElementsByClassName("logo-library")[0];
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
  			p.innerHTML = dataBase[i].groupFullName;

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
