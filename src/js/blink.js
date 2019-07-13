import game from './app';

function blink(elements) {
    // stop any actions while animation
    game.status = -1;
    document.getElementById('game__player__one__count').style.opacity = 1;
    document.getElementById('game__player__two__count').style.opacity = 1;

    let animation = setInterval(() => {
        for (let element of elements) {
            element.style.opacity = 0;
        }

        setTimeout(() => {
            for (let element of elements) {
                element.style.opacity = 1;
            }
        }, 250);
    }, 500);

    setTimeout(() => {
        clearInterval(animation);
        // reset game
        game.status = 0;
    }, 1750);
}

export default blink;