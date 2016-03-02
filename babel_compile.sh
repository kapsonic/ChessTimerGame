rm -rf dist_offline
mkdir -p dist_offline/styles
babel app/scripts/lib/event_bus.js app/scripts/lib/game.js app/scripts/lib/player.js app/scripts/timer.js app/scripts/chess_player.js app/scripts/chess_game.js app/scripts/main.js > dist_offline/app.js

cp app/index_offline.html dist_offline/index.html
cp app/styles/main.scss dist_offline/styles/main.css

