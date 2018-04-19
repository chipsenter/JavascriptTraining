class Media {
  constructor(title,isCheckedOut) {
    this._title = title;
   	this._isCheckedOut = true;
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
  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }
  toggleCheckOutStatus() {
    let randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 1) {
      return !this._isCheckedOut;
    } else if(randomNumber === 2) {
      return !this._isCheckedOut
    } else {
     console.log('SOLD OUT!')
    }
  }
  getAverageRating() {
    let reducer = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._ratings.length;
    return reducer / lengthOfArray;
  }
  addRating(newRating) {
   this.ratings.push(newRating);
  }

}
// Book Class //
class Book extends Media {
  constructor(title, author, pages, isCheckedOut) {
    super(title, isCheckedOut);
    this._author = author;
    this._pages = pages;


  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

}
// Movie Class //
class Movie extends Media {
  constructor(title, director, runTime, movieCast) {
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
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  shuffle(songs) {
    return Math.floor(Math.random() * songs.length);
  }
}
// Input for the Book Class //
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544 );

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

// Input for the Movie Class
const speed = new Movie('Speed','jan de Bont',116, 'Action/Drama');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);

  const abba = new CD('Best of ABBA', 'ABBA', 20);
  abba.toggleCheckOutStatus();
  console.log(abba.isCheckedOut);
  abba.addRating(4,5);
  abba.addRating(5);
  abba.addRating(5);
  console.log(abba.getAverageRating());
  console.log(abba);
