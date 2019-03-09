var dataBase;


window.onload = function(){
	let request = new XMLHttpRequest();
	request.open('GET', './database.json', true);

	request.onload = function () {
  		dataBase = JSON.parse(this.response);
  		for (i = 0; i < dataBase.length; i++){
  			let tempSpanSvg = document.createElement("span");
  			tempSpanSvg.innerHTML = "SVG";
  			tempSpanSvg.download= "assets/database/" + dataBase[i].parentGroup + "/" + dataBase[i].groupName + "/display-image.png";
  			let tempSpanPng = document.createElement("span");
  			tempSpanPng.innerHTML = "PNG";
  			let tempSpanAi = document.createElement("span");
  			tempSpanAi.innerHTML = "AI";

  			document.getElementsByClassName("logo-library")[0].appendChild(tempSpanSvg);
  		}
	}

	request.send();
}
