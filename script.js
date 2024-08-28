document.addEventListener('DOMContentLoaded', function() {
    const chessboard = document.querySelector('.chessboard');
    let isWhite = true;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add(isWhite ? 'white' : 'black');
            chessboard.appendChild(square);
            isWhite = !isWhite;
        }
        isWhite = !isWhite; // Alternate starting color each row
    }
});
