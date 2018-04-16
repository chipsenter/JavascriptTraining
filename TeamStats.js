const team = {
  _players: [
     {firstName: "Pablo",
		 lastName: "Sanchez",
		 age: 11}
  ],
  _games: [
    {opponent: "Broncos",
     teamPoints: 42,
     opponentPoints: 27}
  ],
 get players() {
   return this._players;
 },
 get games() {
   return this._games;
 },
 addPlayer(firstName, lastName, age) {
   let player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this._players.push(player);
 },
 addGame(oppsName, myPoints, oppsPoints) {
   let game = {
     opponent: oppsName,
     points: myPoints,
     opponentsPoints: oppsPoints
   };
   this._games.push(game);
 }
};
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("LA Kings", 50, 76);
team.addGame("Avalanche", 60, 45);
team.addGame("Bruins", 15, 110);
console.log(team);
console.log(team.players);
