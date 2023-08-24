const translation = [
    {
        id: 'about',
        pl: 'O mnie',
        en: 'About'
    },
    {
        id: 'projects',
        pl: 'Projekty',
        en: 'Projects'
    },
    {
        id: 'contact',
        pl: 'Kontakt',
        en: 'Contact'
    },
    {
        id: 'name',
        pl: 'Imie: <span>Piotr</span>',
        en: 'Name: <span>Piotr</span>'
    },
    {
        id: 'lastname',
        pl: 'Nazwisko: <span>Błaszczak</span>',
        en: 'Last name: <span>Błaszczak</span>'
    },
    {
        id: 'age',
        pl: 'Wiek: <span>19</span>',
        en: 'Age: <span>19</span>'
    },
    {
        id: 'location',
        pl: 'Lokalizacja: <span>Warszawa, Polska</span>',
        en: 'Location: <span>Warsaw, Poland</span>'
    },
    {
        id: 'aboutme',
        pl: 'O mnie',
        en: 'About me'
    },
    {
        id: 'aboutcontent',
        pl: `Cześć, mam na imie Piotrek i moją pasją jest tworzenie aplikacji internetowych.
        Pierwszą stronę internetową napisałem w wieku 14 lat. W tym roku zdałem mature i od października
        będę studentem informatyki na PJATK. W swoich projektach przaykładam uwagę do warstwy wizualnej i
        technicznej, wykorzystuje nowoczesne rozwiązania webowe a tworzenie nowych layoutów daje mi dużą
        satysfakcje. Obecnie szukam pracy w Warszawie na stanowisku Junior Front End Developer ;)`,
        en: `Hi, my name is Piter and my passion is web application development.
        I wrote my first website when I was 14. This year I passed high school and from October
        I will be a computer science student at PJATK. In my projects, I pay attention to the visual layer and
        technology, using modern web solutions and creating new layouts gives me a lot
        satisfactions. I'm currently looking for a job in Warsaw as a Junior Front End Developer ;)`
    },
    {
        id: 'technologies',
        pl: `Technologie`,
        en: `Technologies`
    },
    {
        id: 'languages',
        pl: `Jakie znam języki?`,
        en: `What about languages?`
    },
    {
        id: 'english',
        pl: `Jakie znam języki?`,
        en: `What about languages?`
    },
    {
        id: 'polish',
        pl: `Polski <span>Narodowy</span>`,
        en: `Polish <span>Native</span>`
    },
    {
        id: 'english',
        pl: `Angielski <span>Komunikatywny (B2)</span>`,
        en: `English <span>Communicative (B2)</span>`
    },
    {
        id: 'servicesTitle',
        pl: `Czym się zajmuje?`,
        en: `What am I doing?`
    },
    {
        id: 'programming',
        pl: `programowanie`,
        en: `programming`
    },
    {
        id: 'graphics',
        pl: `Grafika`,
        en: `graphics`
    },
    {
        id: 'programmingService',
        pl: `Strony WWW, Aplikacje internetowe, Blogi`,
        en: `Websites, Web applications, Blogs`
    },
    {
        id: 'graphicsService',
        pl: `Interfejsy aplikacji, Obróbka grafik
        (Photoshop)`,
        en: `Application interfaces, Graphic processing
        (photoshop)`
    },
    {
        id: 'projectsPortfolio',
        pl: `Portfolio aplikacji`,
        en: `Application portfolio`
    },
    {
        id: 'dmDescription',
        pl: `Drwaing master to gra internetowa pozwalająca sprawdzić twoją pamięc i umiejętności
        rysowania. W projekcie wykorzystałem takie technologie jak React Router czy MobX do
        globalnej kontroli stanu. Aplikacja jest responsywna i ma dostosowane rysunki zarówno pod
        wersje mobilną jak i desktopową :)`,
        en: `Drwaing master is an online game that tests your memory and drawing skills. In the project I used technologies such as React Router or MobX for global state. The application is responsive and has customized drawings for both mobile and desktop versions :)`
    },
    {
        id: 'viewApp',
        pl: `Zobacz aplikacje`,
        en: `View App`
    },
    {
        id: 'viewCode',
        pl: `Zobacz Kod`,
        en: `View Code`
    },
    {
        id: 'viewApp2',
        pl: `Zobacz aplikacje`,
        en: `View App`
    },
    {
        id: 'viewCode2',
        pl: `Zobacz Kod`,
        en: `View Code`
    },
    {
        id: 'ccmDescription',
        pl: `CCM to platforma inwestycyjna pozwalająca na zakup i sprzedaż popularnych kryptowalut po
        obecnych kursach. Ze względu na ograniczenia użytego przeze mnie API ceny odświeżane są co 5
        minut. W projekcie wykorzystałem takie biblioteki jak Redux, React Router, moment czy
        react-chartjs-2. Aplikacja korzysta również z local storage.`,
        en: `CCM is an investment platform that allows you to buy and sell popular cryptocurrencies at
        current rates. Due to the limitations of the API I used, prices are refreshed every 5 minutes. In the project I used libraries such as Redux, React Router, moment or
        react-chartjs-2. The application also uses local storage

`
    },
    {
        id: 'contactTtitle',
        pl: `Kontakt`,
        en: `Contact`
    },
    {
        id: 'textMe',
        pl: `Napisz do mnie`,
        en: `Text me`
    },
    {
        id: 'cv',
        pl: `Pobierz CV`,
        en: `Download CV`
    },
    {
        id: 'submit',
        pl: `Wyślij`,
        en: `Submit`
    },
    {
        id: 'footer',
        pl: `Projekt i realizacja - <span class="bold"><a
        href="piotrblaszczak.pl">piotrblaszczak.com</a></span>`,
        en: `Design and implementation - <span class="bold"><a
        href="piotrblaszczak.pl">piotrblaszczak.com</a></span>`
    }
];

export default class Tranlaste {

    constructor() {
        this.currentLang = 'en';

        this.name = document.querySelector('[name="name"]');
        this.email = document.querySelector('[name="email"]');
        this.message = document.querySelector('[name="message"]');
    }

    changeLang = (element) => {
        if (this.currentLang === 'pl') this.currentLang = 'en';
        else this.currentLang = 'pl';
        if (element) element.src = this.currentLang === 'pl' ? "images/uk.png" : "images/pollang.png";
        this.translate();
    }

    translate = () => {
        translation.forEach(element => {
            const box = document.getElementById(element.id);
            box.innerHTML = this.currentLang === 'pl' ? element.pl : element.en;
        });

        this.name.placeholder = this.currentLang === 'pl' ? 'Twoje imie' : 'Your name';
        this.email.placeholder = this.currentLang === 'pl' ? 'Twój email' : 'Your email';
        this.message.placeholder = this.currentLang === 'pl' ? 'Twoja wiadomość' : 'Your message';
    }
}