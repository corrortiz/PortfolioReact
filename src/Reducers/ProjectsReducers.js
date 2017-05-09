import Imagen from '../Assets/Images/PoleTrick/1.png';
import QuteImg from '../Assets/Images/QuteMachine/1.png';
import LocalImg from '../Assets/Images/LocaWheter/1.png';
import WikiImg from '../Assets/Images/WikiLook/1.png';
import TiwchImg from '../Assets/Images/Twich/1.png';
import PomoImg from '../Assets/Images/Pomodore/1.png';
import SimonSayImg from '../Assets/Images/Simone/1.png';
import CalcuImg from '../Assets/Images/Calcul/1.png';
import CRUD from '../Assets/Images/CRUD Sample/1.png';
import BrewIt from '../Assets/Images/BrewIt/1.png';

export default function () {
    return[
        {
            id:0,
            imgenes:BrewIt,
            nombre: 'BREW IT! Reusable coffee filters',
            subtema: 'Multi language information page',
            paragraph: `Brew it, is a nascent company that wanted to have a web presence with a minimalist style giving priority to the beautiful photos of their products.
                        This company is in montreal canada and by law must have a French version of any website.
                        To achieve these two goals the client and I decided to use material desing from google and react for the internazionalization of the page thus achieving a change of language without having to reload the complete page.
                        The result is this beautiful page where you can find resuables coffee filters, if you are in Canada or North America you should try them, they are good for the environment and generate a rich coffee.`,
            linkLive: 'http://brewitfilters.com',
            lenguajes: ['React', 'Javascript', 'Amazon S3']
        },
        {
            id:1,
            imgenes:CRUD,
            nombre: 'Sample CRUD App React and Java',
            subtema: 'SPA example',
            paragraph: `This is a sample program done with React on the client side and java on the server side.
                        On the client side I used, Redux, React-Form, Axios, React-Promises and Semantic UI.
                        On the server side I use Spring boot with web and acurator the endpoints were mapped manually following the entity-repository-service-controller logic, it connects to a MySQL database that is online in AWS RDS for connection to this I use HikariCP.
                        To put the app live I use heroku, there are two ways the first is using the server to render the app or through a separate server using node.js.
                        I decided to use the first form and so I have the server together with the client.`,
            linkLive: 'https://sample-api-aohys.herokuapp.com/',
            lenguajes: ['Java', 'Javascript', 'Node']
        },
        {
            id:2,
            imgenes:Imagen,
            nombre: 'Pole Trick Online Store',
            subtema: 'Online Store',
            paragraph: 'This is an online store based on WordPress and WooCommerce, using only free plugins is given full functionality like wholesale price, newsletter managed through mailchimp, style customization and components to the theme used and SEO optimization of all pages and components Of the store, this store is hosted at AWS in a EC2 instance, so come to visit and buy a pole fitness garment.',
            linkLive: 'http://poletrickshop.com/',
            lenguajes: ['WoordPress', 'WooComerce', 'PHP', 'AWS', 'JavaScript', 'CSS', 'HTML']
        },
        {
            id:3,
            imgenes:QuteImg,
            nombre: 'Quote Machine FCC',
            subtema: 'FCC Challenge ',
            paragraph: 'A small page interacting with a random quote api, then posting the result in twitter this is one of the medium projects of free code camp.',
            linkLive: 'https://codepen.io/CorrOrtiz/full/kkqPmq/',
            lenguajes: ['FCC', 'HTML', 'CSS', 'JavaScript', 'Materialize']
        },
        {
            id:4,
            imgenes:LocalImg,
            nombre: 'Local Weather FCC',
            subtema: 'FCC Challenge ',
            paragraph: 'This is a page that interact with the open weather API and can change the display of the weather from celsius to fahrenheit.',
            linkLive: 'http://codepen.io/CorrOrtiz/full/VKRjAV',
            lenguajes: ['FCC', 'HTML', 'CSS', 'JavaScript', 'Materialize']
        },
        {
            id:5,
            imgenes:WikiImg,
            nombre: 'Wiki Look FCC',
            subtema: 'FCC Challenge ',
            paragraph: 'This is a page part of the curriculum of free code camp, this page interacts with the wikipedia API making a search of the term send from the page and returns and show all result in the wikipedia page.',
            linkLive: 'https://codepen.io/CorrOrtiz/full/rjVQyP/',
            lenguajes: ['FCC', 'HTML', 'CSS', 'JavaScript', 'Materialize']
        },
        {
            id:6,
            imgenes:TiwchImg,
            nombre: 'Twitchtv FCC',
            subtema: 'FCC Challenge ',
            paragraph: 'In this page we use the Twitchtv JSON API for viewing the status of various channels inside Twitchtv, this is part of the free code camp curriculum.',
            linkLive: 'https://codepen.io/CorrOrtiz/full/mReeWE/',
            lenguajes: ['FCC', 'HTML', 'CSS', 'JavaScript', 'Materialize']
        },
        {
            id:7,
            imgenes:PomoImg,
            nombre: 'Pomodoro Clock FCC',
            subtema: 'FCC Challenge ',
            paragraph: 'In this page we create a pomodoro clock which can be modified the duration of the pomodoros and the rest periods.',
            linkLive: 'https://codepen.io/CorrOrtiz/full/XpdQVw/',
            lenguajes: ['FCC', 'HTML', 'CSS', 'JavaScript', 'Materialize']
        },
        {
            id:8,
            imgenes:SimonSayImg,
            nombre: 'Simon Game FCC',
            subtema: 'FCC Challenge ',
            paragraph: 'In this page we created a simon game, We use jquery and the framework materialize each button have its own animation and when you lose or win there is a distinctive animation, this is part of the free code camp curriculum.',
            linkLive: 'https://codepen.io/CorrOrtiz/full/XpRWbG/',
            lenguajes: ['FCC', 'HTML', 'CSS', 'JavaScript', 'Materialize']
        },
        {
            id:9,
            imgenes:CalcuImg,
            nombre: 'FCC Calculator',
            subtema: 'FCC Challenge ',
            paragraph: 'This page works as a simple javascript calculator, this is part of the free code camp curriculum.',
            linkLive: 'https://codepen.io/CorrOrtiz/full/WRwNbw',
            lenguajes: ['FCC', 'HTML', 'CSS', 'JavaScript', 'Materialize']
        },
    ]
}