import game from './app';

function insert(cell) {
    let image = document.createElement('img');

    switch (game.player) {
        case 1:
            image.className = 'cell__image';
            image.src = './public/img/x.svg';
            break;
        case 0:
            image.className = 'cell__image';
            image.src = './public/img/o.svg';
            break;
    }

    cell.insertAdjacentElement('afterbegin', image);
}

export default insert;