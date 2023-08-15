import Typing from './Typing.js';

class Website {
    constructor() {
        this.showIntro();
        this.init();
    }

    showIntro = () => {
        new Typing();
    }

    init = () => {
        // window.addEventListener('touchmove', (e) => this.scroll(e))
    }



}

const cv = new Website();