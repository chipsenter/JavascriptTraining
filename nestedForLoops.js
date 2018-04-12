let myPlaces = ['Grums', 'Karlstad', 'Goteborg'];
let friendPlaces = ['Stockholm', 'Charlottenberg', 'Karlstad'];

//Run a nested for Loop to compare to Arrays and spit of the match!
	for(let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){
    for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++ ){
      if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
        console.log('Match: ' + myPlaces[myPlacesIndex]);
      }
    }
  }
