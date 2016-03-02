(function () {
  'use strict';


  describe('Chess Game', function () {
    it('should get started with start()', function () {
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      var player2 = new ChessTimerPlayer(2, 'Great Player');

      var chess = new ChessTimerGame('Damco Chess Game');
      chess.registerPlayer(player1);
      chess.registerPlayer(player2);

      chess.start();
      assert.equal(chess.isPlaying(), true);
    });

    it('should get first player to make a move first', function () {
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      var player2 = new ChessTimerPlayer(2, 'Great Player');

      var chess = new ChessTimerGame('Damco Chess Game');
      chess.registerPlayer(player1);
      chess.registerPlayer(player2);


      assert.equal(chess.proceed(player1), true);
    });

    it('should not get second player to make a move first', function () {
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      var player2 = new ChessTimerPlayer(2, 'Great Player');

      var chess = new ChessTimerGame('Damco Chess Game');
      chess.registerPlayer(player1);
      chess.registerPlayer(player2);


      assert.equal(chess.proceed(player2), false);
    });

    it('should get reset and out of play with reset()', function () {
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      var player2 = new ChessTimerPlayer(2, 'Great Player');

      var chess = new ChessTimerGame('Damco Chess Game');
      chess.registerPlayer(player1);
      chess.registerPlayer(player2);
      chess.start();
      assert.equal(chess.isPlaying(), true);
      chess.reset();
      assert.equal(chess.isPlaying(), false);
    });

    it('should get right opponent', function () {
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      var player2 = new ChessTimerPlayer(2, 'Great Player');

      var chess = new ChessTimerGame('Damco Chess Game');
      chess.registerPlayer(player1);
      chess.registerPlayer(player2);
      assert.equal(chess._getOpponent(player1), player2);
    });
  });

  describe('Chess Player', function () {
    it('should get the time started when harmed', function(){
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      player1.harm();

      assert.equal(player1.getTimerInstance().isStarted(), true);
    });

    it('should stop the timer when play the chance (Intentionally failed for demo)', function() {
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      player1.harm();

      assert.equal(player1.getTimerInstance().isStarted(), false /*true*/);
      player1.play();
      assert.equal(player1.getTimerInstance().isStarted(), false);
    });

    it('should reset the timer when player is reset by the chess game', function() {
      var player1 = new ChessTimerPlayer(1, 'Genius Player');
      player1.harm();
      player1.reset();
      assert.equal(player1.getTimerInstance().isStarted(), false);
    });
  });

  describe('Timer', function(){
    it('should start with start api', function() {
      var timer = new Timer(4*60);
      timer.start();
      assert.equal(timer.isStarted(), true);
    });
    it('should stop with stop api', function() {
      var timer = new Timer(4*60);
      timer.start();
      assert.equal(timer.isStarted(), true);

      timer.stop();
      assert.equal(timer.isStarted(), false);
    });
  });


})();
