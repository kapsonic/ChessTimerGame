var player1 = new ChessTimerPlayer(1, 'Player 1');
var player2 = new ChessTimerPlayer(2, 'Player 2');

var chess = new ChessTimerGame('Damco Chess Game');
chess.registerPlayer(player1);
chess.registerPlayer(player2);

document.getElementById('start').onclick = () => {
  chess.reset();
  if (!chess.isPlaying()) {
    chess.start()
  }
}

document.getElementById('reset').onclick = () => {
  chess.reset();
}

document.getElementById('player1').onclick = () => {
  if (chess.isPlaying()) {
    chess.proceed(player1);
  } else {
    alert('Game is not in play');
  }

}

document.getElementById('player2').onclick = () => {
  if (chess.isPlaying()) {
    chess.proceed(player2);
  } else {
    alert('Game is not in play');
  }
}

player1.getTimerInstance().setDisplay(document.querySelector('#player1-timer'));
player2.getTimerInstance().setDisplay(document.querySelector('#player2-timer'));
