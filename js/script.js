var photos = document.getElementById('photos'); 

for(var counter = 0; counter < 3; counter += 1){
	var div = document.createElement('div');
	var newImg = document.createElement("img");

	div.className = "carousel-item "
	newImg.src = "img/" + counter + ".png"
	newImg.className = "d-block w-100"
	
	if(counter==0) {
		div.className += "active";
	}
	div.appendChild(newImg)
	photos.appendChild(div)










}



