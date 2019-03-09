var dataBase;


window.onload = function(){
	let request = new XMLHttpRequest();
	request.open('GET', './database.json', true);

	request.onload = function () {
  		dataBase = JSON.parse(this.response);
  		for (i = 0; i < dataBase.length; i++){
  			let tempASvg = document.createElement("a");
  			tempASvg.innerHTML = "SVG";
  			tempSpanSvg.download= "assets/database/" + dataBase[i].parentGroup + "/" + dataBase[i].groupName + "/display-image.png";
  			let tempSpanPng = document.createElement("a");
  			tempSpanPng.innerHTML = "PNG";
  			let tempSpanAi = document.createElement("a");
  			tempSpanAi.innerHTML = "AI";

  			document.getElementsByClassName("logo-library")[0].appendChild(tempASvg);
  		}
	}

	request.send();
}
