const themeToggle = document.querySelector('.toggle__btn'),
    theme =  document.querySelector('body')
    textColor = document.querySelector('.text')

themeToggle.addEventListener('click', () => {
    theme.classList.toggle('body--dark');
    themeToggle.classList.toggle('toggle__btn--on');
    textColor.classList.toggle('text--white');
})