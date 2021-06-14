// Main-nav
const mainNav = document.querySelector('.main-nav');
const mainNavList = document.querySelector('.main-nav__list')
const mainNavToggle = document.querySelector('.main-nav__toggle');

const onButtonClick = () => {
    if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.add('main-nav--opened');
        mainNav.classList.remove('main-nav--closed');
        window.addEventListener('keydown', onEscKeydown);
        window.addEventListener('click', onWindowClick);
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
    }
};

const onEscKeydown = (evt) => {
    if (evt.keyCode === 27) {
        mainNav.classList.remove('main-nav--opened');
        mainNav.classList.add('main-nav--closed');
        window.removeEventListener('keydown', onEscKeydown);
        window.removeEventListener('click', onWindowClick);
    }
}

const onWindowClick = (evt) => {
    if (!evt.target.closest('.main-nav')) {
        if (mainNav.classList.contains('main-nav--opened')) {
            mainNav.classList.add('main-nav--closed');
            mainNav.classList.remove('main-nav--opened');
            window.removeEventListener('keydown', onEscKeydown);
            window.removeEventListener('click', onWindowClick);
        }
    }
};

mainNavToggle.addEventListener('click', onButtonClick);

// Checkbox-group

const checkboxGroup = document.querySelectorAll('.checkbox-group__list-item input');
const chechboxToggle = document.getElementById('checkbox-all');
const onToggleclick = (evt) => {
    if (evt.target.checked) {
        checkboxGroup.forEach((it) => {
            const currentCheckboxItem = document.getElementById(`${it.id}-item`);
            currentCheckboxItem.classList.add('visually-hidden');
            it.checked = true;
        });
    } else {
        checkboxGroup.forEach((it) => {
            const currentCheckboxItem = document.getElementById(`${it.id}-item`);
            currentCheckboxItem.classList.remove('visually-hidden');
            it.checked = false;
        });
    }
};

checkboxGroup.forEach((checkbox) => checkbox.addEventListener('change', () => {
    const currentCheckboxItem = document.getElementById(`${checkbox.id}-item`);
    if (checkbox.checked) {
        currentCheckboxItem.classList.add('visually-hidden');
    } else {
        currentCheckboxItem.classList.remove('visually-hidden');
    }
}));

chechboxToggle.addEventListener('click', onToggleclick);