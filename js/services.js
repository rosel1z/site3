// СЕКЦИЯ 1, РАКСКРЫВАЮЩИЙСЯ СПИСОК

const $ = item => document.querySelector(item);
const $$ = items => document.querySelectorAll(items);

$$('.box').forEach(element => element.addEventListener('click', show))

function show(event) {
    console.log(event.target.innerText)
    $('.open').classList.remove('open')
    switch (event.target.innerText) {
        case "Парикмахерские услуги":
            $('.hairSegment').classList.add('open')
            break;
        case "Визаж, макияж, уход за лицом":
            $('.makeUpSegment').classList.add('open')
            break;
        case "Эпиляция":
            $('.epilationSegment').classList.add('open')
            break;
        case "Косметология и пилинг":
            $('.cosmetologySegment').classList.add('open')
            break;
        case "Различные виды массажа, SPA":
            $('.massageSegment').classList.add('open')
            break;
        case "Маникюр и педикюр":
            $('.manicureSegment').classList.add('open')
            break;
        case "Ресницы":
            $('.eyelashesSegment').classList.add('open')
            break;
        case "Брови":
            $('.eyebrowsSegment').classList.add('open')
            break;
    }
}


// СЕКЦИЯ 3, СЛАЙДЕР
let root = document.documentElement;
let marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
let marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


let button = document.querySelector('.btnSignUp');
let cancel = document.querySelector('.cancel');
let modal = document.querySelector('.dark');

button.addEventListener('click', opn);
cancel.addEventListener('click', close);

function opn() {
    modal.classList.remove('close');
    modal.classList.add('opn');
}

function close() {
    modal.classList.remove('opn');
    modal.classList.add('close');
}