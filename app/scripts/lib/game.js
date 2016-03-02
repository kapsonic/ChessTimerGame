// Game super class
class Game {
  constructor(name) {
    this.name = name;
    this.players = [];
    this.isInPlay = false;
  }

  isPlaying() {
    return this.isInPlay;
  }

  registerPlayer(player) {
    this.players.push(player);
  }

  isWin() {
    console.error('Not defined');
  }

  start() {
    console.error('Not defined');
  }

  reset() {
    console.error('Not defined');
  }

  getName() {
    return this.name;
  }

  notifyPlayerAction() {
    console.error('Not defined');
  }

  proceed() {

  }

  end() {

  }
}

