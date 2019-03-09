var dataBase;


window.onload = function(){
	let request = new XMLHttpRequest();
	request.open('GET', './database.json', true);

	request.onload = function () {
  		dataBase = JSON.parse(this.response);
  		console.log(dataBase.length);
	}

	request.send();
}
