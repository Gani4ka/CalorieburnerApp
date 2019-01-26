import createVideo from './template/slider.hbs';
import $ from "jquery";
import "slick-carousel";



export const arrayVideos = [{
        name: 'Утренняя тренировка для зарядки',
        duration: '10 минут',
        colories: '80 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=ecrz1jaLV3A&list=PLUV7j0d8hiH2fO6jOTpwpKdvJA5fjnPaw',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/ecrz1jaLV3A/sddefault.jpg',
    },
    {
        name: '5-ти минутная тренировка на пресс и ягодицы',
        duration: '5 минут',
        colories: '40 ккал',
        inv: 'Коврик и мяч для йоги',
        src: 'https://www.youtube.com/watch?v=iY4hQd24_d0',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/iY4hQd24_d0/sddefault.jpg',
    },
    {
        name: 'Интенсивная тренировка на все группы мышц',
        duration: '30 минут',
        colories: '300 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=-9jok89UtQk',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/-9jok89UtQk/sddefault.jpg',
    },
    {
        name: 'Йога с элементами суставной гимнастики',
        duration: '50 минут',
        colories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=QDR_WB_2EHE',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/QDR_WB_2EHE/0.jpg',
    },
    {
        name: 'Аэробика для дома для начинаючих',
        duration: '50 минут',
        colories: '400 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=d5bznQLUUuc',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/d5bznQLUUuc/sddefault.jpg',
    },
    {
        name: 'Функциональная фитнес тренировка',
        duration: '60 минут',
        colories: '600 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=9tDnPfQWUbM',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/9tDnPfQWUbM/sddefault.jpg',
    },
    {
        name: 'Кардио тренировка с элементами бокса',
        duration: '30 минут',
        colories: '300 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=xSUXMwqZ3z0',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/xSUXMwqZ3z0/sddefault.jpg',
    },
    {
        name: 'Интенсивная круговая тренировка',
        duration: '45 минут',
        colories: '500 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=yapXBQ9vBPQ',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/yapXBQ9vBPQ/sddefault.jpg',
    },
    {
        name: '30-ти минутная тренировка с гантелями',
        duration: '30 минут',
        colories: '250 ккал',
        inv: 'Гантели',
        src: 'https://www.youtube.com/watch?v=Z_UWE3pfl6o',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/Z_UWE3pfl6o/sddefault.jpg',
    },
    {
        name: 'Тренировка для рук с гантелями',
        duration: '14 минут',
        colories: '110 ккал',
        inv: 'Коврик для йоги и гантели',
        src: 'https://www.youtube.com/watch?v=oLOAffuSRds&t',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/oLOAffuSRds/sddefault.jpg',
    },
    {
        name: 'Короткая Табата тренировка',
        duration: '10 минут',
        colories: '100 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=irALl4gr9zA&t',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/irALl4gr9zA/sddefault.jpg',
    },
    {
        name: '30-минутная хип-хоп тренировка по системе Табата',
        duration: '30 минут',
        colories: '350 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=kwkXyHjgoDM',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/kwkXyHjgoDM/sddefault.jpg',
    },
    {
        name: 'Утренняя тренировка на 15 минут',
        duration: '15 минут',
        colories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=1fDHrKRqy34',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/1fDHrKRqy34/sddefault.jpg',
    },
    {
        name: '20-минутная жиросжигающая тренировка по системе Табата',
        duration: '20 минут',
        colories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=lQkD1b5HOPY',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/lQkD1b5HOPY/sddefault.jpg',
    },
    {
        name: '10 минутная тренировка для ягодиц средней сложности',
        duration: '10 минут',
        colories: '80 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=RqfkrZA_ie0',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/RqfkrZA_ie0/sddefault.jpg',
    }
];


/* <iframe id="ytplayer" type="text/html" width="220" height="200"
src="https://www.youtube.com/embed/RqfkrZA_ie0"
frameborder="0" allowfullscreen></iframe> */
window.addEventListener('DOMContentLoaded', viewAllVideos);

function viewAllVideos() {
    const markUp = createVideo({
        arrayVideos
    });
    const out = document.querySelector('.slider-list');
    out.insertAdjacentHTML('afterbegin', markUp);
    $(out).slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,

    });
   
    function showText() {
        const x = window.matchMedia("(max-width: 767px)")
        let div = document.querySelector('.slick-active');
        let text = div.querySelector('.slider-text-pos');
        text.style.display = 'block';
        const allDiv = [...document.querySelectorAll('.slick-slide')];

        if (x.matches) {
            allDiv.forEach(elem => {
                if (!elem.classList.contains('slick-active')) {
                    elem.querySelector('.slider-text-pos').style.display = 'block';
                }
            })
        } else {
            allDiv.forEach(elem => {
                if (!elem.classList.contains('slick-active')) {
                    elem.querySelector('.slider-text-pos').style.display = 'none';
                }
            })
        }
    }

    const conttt = document.querySelector('.slider-list');
    conttt.addEventListener('mousemove', showText);
}