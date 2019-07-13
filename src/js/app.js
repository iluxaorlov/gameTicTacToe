import '../scss/app.scss';
import clear from './clear';
import step from './step';

let game = {
    status: 1,
    step: 0,
    player: 1
};

export default game;

document.getElementById('field').addEventListener('click', function(event) {
    if (game.status === 0) {
        // clear game field
        return clear();
    }

    let element = event.target;

    while (element !== this) {
        if (element.className === 'cell') {
            if (element.innerHTML === '') {
                step(element);
            }
        }

        element = element.parentElement;
    }
});

clear();