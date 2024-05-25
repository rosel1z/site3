
const $ = item => document.querySelector(item);
const $$ = items => document.querySelectorAll(items);


$$('.box').forEach(element => element.addEventListener('click', show))

function show(event) {
    console.log(event.target.innerText)
    $('.open').classList.remove('open')
    switch (event.target.innerText) {
        case "Парикмахерские услуги":
            $('.hair').classList.add('open')
            break;
        case "Визаж, макияж, уход за лицом":
            $('.makeUp').classList.add('open')
            break;
        case "Эпиляция":
            $('.epilation').classList.add('open')
            break;
        case "Косметология и пилинг":
            $('.cosmetology').classList.add('open')
            break;
        case "Различные виды массажа, SPA":
            $('.massage').classList.add('open')
            break;
        case "Маникюр и педикюр":
            $('.manicure').classList.add('open')
            break;
        case "Ресницы":
            $('.eyelashes').classList.add('open')
            break;
        case "Брови":
            $('.eyebrows').classList.add('open')
            break;
    }
}

