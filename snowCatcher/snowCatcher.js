const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    snowflake.addEventListener('click', () => {
        catchSnowflake(snowflake);
    });

    snowflake.addEventListener('mouseenter', () => {
        catchSnowflake(snowflake);
    });

    gameContainer.appendChild(snowflake);

    setTimeout(() => {
        if (snowflake.parentElement) {
            snowflake.remove();
        }
    }, parseFloat(snowflake.style.animationDuration) * 1000);
}

function catchSnowflake(snowflake) {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    snowflake.remove();
}

function gameLoop() {
    createSnowflake();
    setTimeout(gameLoop, 1000); // Adjust this timeout for snowflake appearance rate
}

gameLoop();
