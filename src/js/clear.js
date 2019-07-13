import game from './app';

function clear() {
    let cells = document.getElementsByClassName('cell');

    for (let cell of cells) {
        cell.innerHTML = '';
    }

    switch (game.player) {
        case 1:
            document.getElementById('game__player__one__count').style.opacity = 1;
            document.getElementById('game__player__two__count').style.opacity = 0.1;
            break;
        case 0:
            document.getElementById('game__player__two__count').style.opacity = 1;
            document.getElementById('game__player__one__count').style.opacity = 0.1;
            break;
    }

    // start new game
    game.status = 1;
    game.step = 0;
}

export default clear;