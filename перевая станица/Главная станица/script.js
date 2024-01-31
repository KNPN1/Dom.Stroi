// Добавим сохранение текущей темы в localStorage при смене темы
const themeToggle = document.querySelector('.toggle__btn');
const theme = document.querySelector('body');

// Устанавливаем начальную тему
const savedTheme = localStorage.getItem('theme');
document.body.classList.toggle('body--dark', savedTheme === 'dark');
themeToggle.classList.toggle('toggle__btn--on', savedTheme === 'dark');

// Добавим обработчик события для кнопки темы
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('body--dark');
    const isDark = document.body.classList.contains('body--dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    themeToggle.classList.toggle('toggle__btn--on', isDark);
});ф

// Уберем анимацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    theme.style.transition = 'none';
});

// Установим таймаут, чтобы анимация не сработала после загрузки страницы
setTimeout(function () {
    theme.style.transition = ''; // Восстановим стандартное значение transition
}, 0);




// вот до сюда применялись только для header 