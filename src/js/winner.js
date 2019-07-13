import game from './app';

function winner() {
    switch (game.player) {
        case 0:
            document.getElementById('game__player__one__count').innerText++;
            break;
        case 1:
            document.getElementById('game__player__two__count').innerText++;
            break;
    }

    document.getElementById('game__summary__count').innerText++;
}

export default winner;