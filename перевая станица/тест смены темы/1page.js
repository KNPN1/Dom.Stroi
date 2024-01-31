document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    

    const body = document.body;

    // Добавляем слушатель события для кнопки переключения темы
    themeToggleBtn.addEventListener('click', function() {
        // Переключаем класс 'dark-theme' у body
        body.classList.toggle('dark-theme');
        const isDarkTheme = body.classList.contains('dark-theme');

        // Сохраняем предпочтение темы в localStorage
        saveThemePreference(isDarkTheme);

        // Обновляем текст кнопки и применяем тему
        updateButtonText(themeToggleBtn, isDarkTheme);
        applyTheme(themeToggleBtn, goToPageBtn, isDarkTheme);
    });

    // Проверяем сохраненную тему при загрузке страницы
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    // Обновляем текст кнопок при загрузке страницы
    const isDarkTheme = body.classList.contains('dark-theme');
    updateButtonText(themeToggleBtn, isDarkTheme);
    applyTheme(themeToggleBtn, goToPageBtn, isDarkTheme);
});

// Функция для сохранения предпочтения темы в localStorage
function saveThemePreference(isDarkTheme) {
    const themePreference = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', themePreference);
}

// Функция для обновления текста кнопки в зависимости от темы
function updateButtonText(themeToggleBtn, isDarkTheme) {
    if (isDarkTheme) {
        themeToggleBtn.innerText = 'Светлая';
    } else {
        themeToggleBtn.innerText = 'Темная';
    }
}

// Функция для применения темы к другим элементам на странице (в данном случае, к goToPageBtn)
function applyTheme(themeToggleBtn, goToPageBtn, isDarkTheme) {
    // Ваша реализация применения темы к другим элементам, если это необходимо
}
