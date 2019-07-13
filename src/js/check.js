import game from './app';
import blink from './blink';
import winner from './winner';

function check(cells) {
    // horizotal
    if (cells[0].innerHTML !== '' && cells[1].innerHTML !== '' && cells[2].innerHTML !== '') {
        if (cells[0].innerHTML === cells[1].innerHTML && cells[0].innerHTML === cells[2].innerHTML) {
            blink([cells[0].firstChild, cells[1].firstChild, cells[2].firstChild]);
            return winner();
        }
    }

    if (cells[3].innerHTML !== '' && cells[4].innerHTML !== '' && cells[5].innerHTML !== '') {
        if (cells[3].innerHTML === cells[4].innerHTML && cells[3].innerHTML === cells[5].innerHTML) {
            blink([cells[3].firstChild, cells[4].firstChild, cells[5].firstChild]);
            return winner();
        }
    }

    if (cells[6].innerHTML !== '' && cells[7].innerHTML !== '' && cells[8].innerHTML !== '') {
        if (cells[6].innerHTML === cells[7].innerHTML && cells[6].innerHTML === cells[8].innerHTML) {
            blink([cells[6].firstChild, cells[7].firstChild, cells[8].firstChild]);
            return winner();
        }
    }

    // vertical
    if (cells[0].innerHTML !== '' && cells[3].innerHTML !== '' && cells[6].innerHTML !== '') {
        if (cells[0].innerHTML === cells[3].innerHTML && cells[0].innerHTML === cells[6].innerHTML) {
            blink([cells[0].firstChild, cells[3].firstChild, cells[6].firstChild]);
            return winner();
        }
    }
    
    if (cells[1].innerHTML !== '' && cells[4].innerHTML !== '' && cells[7].innerHTML !== '') {
        if (cells[1].innerHTML === cells[4].innerHTML && cells[1].innerHTML === cells[7].innerHTML) {
            blink([cells[1].firstChild, cells[4].firstChild, cells[7].firstChild]);
            return winner();
        }
    }
    
    if (cells[2].innerHTML !== '' && cells[5].innerHTML !== '' && cells[8].innerHTML !== '') {
        if (cells[2].innerHTML === cells[5].innerHTML && cells[2].innerHTML === cells[8].innerHTML) {
            blink([cells[2].firstChild, cells[5].firstChild, cells[8].firstChild]);
            return winner();
        }
    }

    // diagonal
    if (cells[0].innerHTML !== '' && cells[4].innerHTML !== '' && cells[8].innerHTML !== '') {
        if (cells[0].innerHTML === cells[4].innerHTML && cells[0].innerHTML === cells[8].innerHTML) {
            blink([cells[0].firstChild, cells[4].firstChild, cells[8].firstChild]);
            return winner();
        }
    }
    
    if (cells[2].innerHTML !== '' && cells[4].innerHTML !== '' && cells[6].innerHTML !== '') {
        if (cells[2].innerHTML === cells[4].innerHTML && cells[2].innerHTML === cells[6].innerHTML) {
            blink([cells[2].firstChild, cells[4].firstChild, cells[6].firstChild]);
            return winner();
        }
    }

    if (game.step === cells.length) {
        // all cells are fill
        blink(document.getElementsByClassName('cell__image'));
        document.getElementById('game__summary__count').innerText++;
    }
}

export default check;