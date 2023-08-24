const SPEED = 50;
const TEXT = [
    "Cześć!",
    "Mam na imie Piotrek i zajmuję się tworzeniem aplikacji internetowych.",
    "Obecnie pracuje głównie z wykorzystaniem React JS.",
];

const TEXTEN = [
    "Hi!",
    "My name is Piter and I create websites and web applications.",
    "Currently working mainly with React JS.",
];


export default class Typing {
    constructor(lang = 'en') {
        this.box = document.querySelector('.intro__typing');
        this.lang = lang;
        this.text = this.lang === 'pl' ? TEXT : TEXTEN;

        this.textIndex = 0;
        this.wordIndex = 0;
        this.activeDOMElement = this.box;

        this.timeOut;

        this.oldTime = 0;

        setTimeout(() => this.write(), 1000);
    }

    write = (newTime) => {
        if (newTime - this.oldTime > SPEED) {
            const letter = this.text[this.textIndex].substr(this.wordIndex, 1);
            if (this.wordIndex === this.text[this.textIndex].length) {
                if (this.textIndex === this.text.length - 1) {
                    return;
                }
                this.timeOut = setTimeout(this.goToNextLine, 1000);
            }
            else if (this.wordIndex === 0 || letter === '^') {
                const p = document.createElement('p');
                this.box.appendChild(p);

                this.activeDOMElement = p;
            }

            this.oldTime = newTime;


            if (letter !== '^') this.activeDOMElement.innerHTML += letter;

            this.wordIndex++;
        }

        requestAnimationFrame(this.write);
    }

    changeLang = () => {
        this.lang = this.lang === 'pl' ? 'en' : 'pl';
        this.text = this.lang === 'pl' ? TEXT : TEXTEN;
        this.box.textContent = '';
        this.activeDOMElement = this.box;
        this.textIndex = 0;
        this.wordIndex = 0;
        this.oldTime = 0;
        clearTimeout(this.timeOut);
        this.write();
    }

    goToNextLine = () => {
        this.textIndex++;
        this.wordIndex = 0;
        requestAnimationFrame(this.write);
    }
}