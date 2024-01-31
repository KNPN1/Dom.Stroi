// konstruktor2.js
const stagesData = [
    [
        { imageURL: "Img/istockphoto-177228186-612x612.jpg", title: "Свайный", price: 1000 },
        { imageURL: "path_to_image1_2.jpg", title: "Ленточный", price: 1200 },
        { imageURL: "path_to_image1_3.jpg", title: "Монолитный", price: 1500 }
    ],
    [
        { imageURL: "path_to_image2_2.jpg", title: "один этаж", price: 1000 },
        { imageURL: "path_to_image2_3.jpg", title: "два этажа", price: 1200 }
    ],
    [
        { imageURL: "path_to_image3_1.jpg", title: "Плоская", price: 1500 },
        { imageURL: "path_to_image3_1.jpg", title: "Мансардный этаж", price: 1500 },
        { imageURL: "path_to_image3_2.jpg", title: "Скатная", price: 2000 }
    ],
    [
        { imageURL: "path_to_image4_1.jpg", title: "Деревянная обшивка", price: 1800 },
        { imageURL: "path_to_image4_2.jpg", title: "Декоративные панели", price: 2200 },
        { imageURL: "path_to_image4_3.jpg", title: "Штукатурка или краска", price: 2000 }
    ],
    [
        { imageURL: "path_to_image5_1.jpg", title: "Черновая", price: 1200 },
        { imageURL: "path_to_image5_2.jpg", title: "Чистовая", price: 1500 },
        { imageURL: "path_to_image5_3.jpg", title: "Под ключ", price: 1800 }
    ],
];

let currentStage = 0;
let selectedChoices = [];
let totalPrice = 0;

function getImagePath() {
    const choice1 = selectedChoices[1]?.index + 1 || 1;  // выбор на 2 этапе
    const choice2 = selectedChoices[2]?.index + 1 || 1;  // выбор на 3 этапе

    const imageIndex = `${choice1}${choice2}`;
    
    switch (imageIndex) {
        case "11":
            return "/Users/knpn/Desktop/Курсовая/тест конструктор 5/Img/istockphoto-177228186-612x612.jpg";
        case "12":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 2/Img/image12.jpg";
        case "13":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image13.jpg";
        case "21":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 4/Img/image21.jpg";
        case "22":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 5/Img/image22.jpg";
        case "23":
            return "/Users/knpn/Desktop/Курсовая/тест конструктор 5/Img/istockphoto-177228186-612x612.jpg";
        default:
            return "/Users/knpn/Desktop/Курсовая/тест конструктор 5/Img/istockphoto-177228186-612x612.jpg";
    }
}

function loadBlocks() {
    const blocksContainer = document.getElementById('blocksContainer');
    blocksContainer.innerHTML = "";

    stagesData[currentStage].forEach((block, index) => {
        const blockElement = document.createElement('div');
        blockElement.classList.add('block');
        if (index === selectedChoices[currentStage]?.index) {
            blockElement.classList.add('selected');
        }
        blockElement.onclick = () => selectBlock(block, index);
        blockElement.innerHTML = `
            <img src="${block.imageURL}" alt="${block.title}">
            <div class="block-info">
                <p>${block.title}</p>
                <p class="price">+${block.price}</p>
            </div>
        `;

        blocksContainer.appendChild(blockElement);
    });

    const progressContainer = document.getElementById('progressContainer');
    progressContainer.innerHTML = "";

    for (let i = 0; i < stagesData.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('progress-dot');
        dot.classList.toggle('current', i === currentStage);
        progressContainer.appendChild(dot);
    }

    const actionButton = document.getElementById('actionButton');
    if (currentStage === stagesData.length - 1) {
        actionButton.innerText = "Построить дом";
        actionButton.disabled = selectedChoices.length < 3;
    } else {
        actionButton.innerText = "Выбрать";
        actionButton.disabled = true;
    }

    updateProgress();
}

function selectBlock(block, choiceIndex) {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block, index) => {
        block.classList.remove('selected');
        block.style.border = '2px solid #ccc';
    });

    const selectedBlockElement = blocks[choiceIndex];
    selectedBlockElement.classList.add('selected');
    selectedBlockElement.style.border = '2px solid blue';

    selectedChoices[currentStage] = { ...block, index: choiceIndex };
    totalPrice = selectedChoices.reduce((sum, choice) => sum + (choice ? choice.price : 0), 0);

    const actionButton = document.getElementById('actionButton');
    actionButton.disabled = false;

    updateProgress();
}


function performAction() {
    if (currentStage < stagesData.length - 1) {
        nextStage();
    } else {
        displayResult();
    }
}

function nextStage() {
    if (currentStage < stagesData.length - 1) {
        currentStage++;
        loadBlocks();
    }
}

function displayResult() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "";

    const resultTitle = document.createElement('h2');
    resultTitle.innerText = "Результат";
    resultContainer.appendChild(resultTitle);

    const imageIndex = selectedChoices.slice(0, 2).map(choice => choice.index + 1).join("");
    const imagePath = getImagePath(imageIndex);

    const resultImage = document.createElement('img');
    resultImage.classList.add('result-image');
    resultImage.src = imagePath;
    resultContainer.appendChild(resultImage);

    const configIndex = selectedChoices.slice(0, 5).map(choice => choice.index + 1).join("");
    const configText = document.createElement('p');
    configText.classList.add('result-text');
    configText.innerHTML = `Номер комплектации: <span id="configIndexValue">${configIndex}</span>`;
    resultContainer.appendChild(configText);

    const totalPriceText = document.createElement('p');
    totalPriceText.classList.add('result-text');
    totalPriceText.innerHTML = `Общая стоимость: <span id="totalPriceValue">${totalPrice}</span>`;
    resultContainer.appendChild(totalPriceText);

    document.getElementById('constructionContainer').style.display = 'none';
    resultContainer.style.display = 'block';
    loadBlocks(); // добавляем эту строку
}


function updateProgress() {
    const progressContainer = document.getElementById('progressContainer');
    const dots = progressContainer.querySelectorAll('.progress-dot');

    dots.forEach((dot, index) => {
        dot.classList.toggle('selected', index < currentStage);
    });
}

loadBlocks();
