import game from './app';
import insert from './insert';
import check from './check';

function step(cell) {
    if (game.status === 0 || game.status === -1) return;

    switch (game.player) {
        case 1:
            // hide player one
            document.getElementById('game__player__one__count').style.opacity = 0.1;
            // and show player two
            document.getElementById('game__player__two__count').style.opacity = 1;
            // insert cross
            insert(cell);
            // change player
            game.player = 0;

            break;
        case 0:
            // hide player two
            document.getElementById('game__player__two__count').style.opacity = 0.1;
            // and show player one
            document.getElementById('game__player__one__count').style.opacity = 1;
            // insert round
            insert(cell);
            // change player
            game.player = 1;

            break;
    }

    game.step++;
    // everytime check game
    check(document.getElementsByClassName('cell'));
}

export default step;