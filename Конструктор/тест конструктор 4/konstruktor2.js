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

function getImagePath(imageIndex) {
    switch (imageIndex) {
        case "111":
            return "/Users/knpn/Desktop/Курсовая/тест конструктор 4/Img/istockphoto-177228186-612x612.jpg";
        case "112":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image112.jpg";
        case "113":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image113.jpg";
        case "121":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image121.jpg";
        case "122":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image122.jpg";
        case "123":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image123.jpg";
        case "131":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image131.jpg";
        case "132":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image132.jpg";
        case "133":
            return "/Users/knpn/Desktop/Курсовая/тест конструктор 4/Img/istockphoto-177228186-612x612.jpg";
        case "211":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image211.jpg";
        case "212":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image212.jpg";
        case "213":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image213.jpg";
        case "221":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image221.jpg";
        case "222":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image222.jpg";
        case "223":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image223.jpg";
        case "231":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image231.jpg";
        case "232":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image232.jpg";
        case "233":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image233.jpg";
        case "311":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image311.jpg";
        case "312":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image312.jpg";
        case "313":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image313.jpg";
        case "321":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image321.jpg";
        case "322":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image322.jpg";
        case "323":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image323.jpg";
        case "331":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image331.jpg";
        case "332":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image332.jpg";
        case "333":
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/image333.jpg";
        default:
            return "/Users/knpn/Desktop/Курсовая/тест конструктора 3/Img/defaultImage.jpg";
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

    // Формируем номер изображения на основе первых трех выборов
    const imageIndex = selectedChoices.slice(0, 3).map(choice => choice.index + 1).join("");
    const imagePath = getImagePath(imageIndex);
    const resultImage = document.createElement('img');
    resultImage.classList.add('result-image');
    resultImage.src = imagePath;
    resultContainer.appendChild(resultImage);

    // Формируем номер комплектации на основе первых трех выборов
    const configIndex = selectedChoices.slice(0, 3).map(choice => choice.index + 1).join("") +
                       selectedChoices.slice(0, 2).map(choice => choice.index + 1).join("");
    const configText = document.createElement('p');
    configText.classList.add('result-text');
    configText.innerText = `Номер комплектации: ${configIndex}`;
    resultContainer.appendChild(configText);

    document.getElementById('constructionContainer').style.display = 'none';
    resultContainer.style.display = 'block';
}

function updateProgress() {
    const progressContainer = document.getElementById('progressContainer');
    const dots = progressContainer.querySelectorAll('.progress-dot');

    dots.forEach((dot, index) => {
        dot.classList.toggle('selected', index < currentStage);
    });
}

loadBlocks();
