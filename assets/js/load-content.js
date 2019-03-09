var dataBase;


window.onload = function(){
	fetch('./database.json').then(response => {
  return response.json();
}).then(data => {
  dataBase = JSON.parse(data);
  console.log(dataBase.lenght());
}).catch(err => {
  // What do when the request fails
  console.log('The request failed!'); 
});
}
