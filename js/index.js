import Typing from './Typing.js';

class Website {
    constructor() {
        this.hiddenLeftElements = document.querySelectorAll('.hiddenLeft');
        this.hiddenRightElements = document.querySelectorAll('.hiddenRight');
        this.hiddenDownElements = document.querySelectorAll('.hiddenDown');
        this.hiddenElements = document.querySelectorAll('.hidden');

        this.homeButton = document.getElementById('home');
        this.aboutButton = document.getElementById('about');
        this.projectsButton = document.getElementById('projects');
        this.contactButton = document.getElementById('contact');

        this.header = document.querySelector('.header');
        this.about = document.querySelector('.about');
        this.projects = document.querySelector('.projects');
        this.contact = document.querySelector('.contact');

        this.headerBackgroundElement = document.querySelector('.header__background');
        this.hamburgerElement = document.querySelector('.header__hamburger');
        this.menu = document.querySelector('.header__list');

        this.init();
    }

    init = () => {
        this.initEventListeners();
        this.showIntro();
        this.scrollAnimation();
    }

    initEventListeners = () => {
        this.homeButton.addEventListener('click', () => this.scrollTo(this.header));
        this.aboutButton.addEventListener('click', () => this.scrollTo(this.about));
        this.projectsButton.addEventListener('click', () => this.scrollTo(this.projects));
        this.contactButton.addEventListener('click', () => this.scrollTo(this.contact));

        this.hamburgerElement.addEventListener('click', this.toggleHamburgerActive);


        window.addEventListener('scroll', this.hideMenu);
    }

    showIntro = () => {
        new Typing();
    }

    scrollAnimation = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        this.hiddenLeftElements.forEach((el) => observer.observe(el));
        this.hiddenRightElements.forEach((el) => observer.observe(el));
        this.hiddenElements.forEach((el) => observer.observe(el));
        this.hiddenDownElements.forEach((el) => observer.observe(el));
    }

    scrollTo = (elementToScroll) => {
        if (this.menu.classList.contains('header__list--active')) {
            this.toggleHamburgerActive();
            setTimeout(() => elementToScroll.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            }), 450);
            return;
        }
        elementToScroll.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    toggleHamburgerActive = () => {
        this.hamburgerElement.classList.toggle('header__hamburger--active');
        this.headerBackgroundElement.classList.toggle('header__background--active');
        this.menu.classList.toggle('header__list--active');
    }

    hideMenu = () => {
        if (!this.menu.classList.contains('header__list--active')) return;
        this.toggleHamburgerActive();
    }

}

const cv = new Website();