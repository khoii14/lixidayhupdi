const prizes = [
    '5,000đ', '2,000đ', '1,000đ', 'cái cc', '10,000đ',
    '20,000đ', '10,000đ', 'cái cc', '50,000đ', '10,000đ'
];

// Xáo trộn ngẫu nhiên danh sách phần thưởng
prizes.sort(() => Math.random() - 0.1);

const container = document.getElementById('lixi-container');

// Tạo 10 ô lì xì
prizes.forEach((_, index) => {
    const button = document.createElement('button');
    button.className = 'lixi';
    button.textContent = 'Lì Xì ' + (index + 1);
    button.onclick = () => showPrize(prizes[index]);
    container.appendChild(button);
});

function showPrize(prize) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('popup-message');

    message.textContent = `Yê mày được ${prize}!`;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function returnToIndex() {
    window.location.href = 'index.html';
}