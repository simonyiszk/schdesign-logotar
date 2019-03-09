var dataBase;


window.onload = function(){
	fetch('https://schdesign-logotar.netlify.com/database.json').then(response => {
  return response.json();
}).then(data => {
  dataBase = JSON.parse(data);
  console.log(dataBase.lenght());
  var tempDisplayImage = document.createElement("img");
  tempDisplayImage.src = "./assets/database/" + dataBase[0].parentGroup + "/" + database[0].name + "/display-image.png";
}).catch(err => {
  // What do when the request fails
  console.log('The request failed!'); 
});
}
