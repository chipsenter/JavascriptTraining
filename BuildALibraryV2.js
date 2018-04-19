class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(inputCheckedOut) {
    this._isCheckedOut(inputCheckedOut);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let reducer = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const myArray = this._ratings.length;
    return reducer / myArray;
  }
  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author,title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, movieCast) {
    super(title);
    	this._director = director;
    	this._runTime = runTime;
    	this._movieCast = movieCast;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
}

class CD extends Media {
  constructor(songTitles, title, songs ) {
    super(title);
  	this._songTitles = songTitles;
    this._songs = songs;
  }
  get songTitles() {
    return this._songTitles;
  }
  get songs() {
    return this._songs;
  }
}

//Book Instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

//Movie Instance
const speed = new Movie('Jan de Bont', 'Speed', 116, 'Action');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);

//CD Instance
const abba = new CD('Best of ABBA', 'ABBA', 20);
abba.toggleCheckOutStatus();
console.log(abba.isCheckedOut);
abba.addRating(4,5);
abba.addRating(5);
abba.addRating(5);
console.log(abba.getAverageRating());
console.log(abba);
