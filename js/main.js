const doc = document;
const colors = ["red", "yellow", "blue", "green"];
let currentIndex = 0;

// Отримання посилань на кнопки та div-елемент
const forwardButton = doc.querySelector(".forwardButton");
const backwardButton = doc.querySelector(".backwardButton");
const colorChangeDiv = doc.querySelector(".colorChangeDiv");

// Функція для зміни фонового кольору вперед
forwardButton.onclick = function() {
    colorChangeDiv.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
};

// Функція для зміни фонового кольору назад
backwardButton.onclick = function() {
    currentIndex = (currentIndex - 1 + colors.length) % colors.length;
    colorChangeDiv.style.backgroundColor = colors[currentIndex];
};

