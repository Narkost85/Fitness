let gSel = (x, col, time) => document.querySelector(`${x}`).style = `transform: translate(${col}); transition: ${time};`;
let timer = 0;
let current = 0;
let current1 = 0;
let current2 = 0;
let query = addres => document.querySelector(`${addres}`).getBoundingClientRect();
let countup1 = document.querySelector('.section1 .info3 .one');
let countup2 = document.querySelector('.section1 .info3 .two');
let countup3 = document.querySelector('.section1 .info3 .three');
let countup4 = document.querySelector('.section1 .info3 .four');

let rand;

window.addEventListener('scroll', () => {
    if (window.scrollY > query('.section1 .info1').top + 400) {
        gSel('.section1 .info1', '0, 0', '2s');
    }else {
        gSel('.section1 .info1', '0, 400px', '2s');
    }
    if (window.scrollY > query('.section7 .info1').top + 1000) {
        gSel('.section7 .info1', '0px, 0px', '4s');
    }else {
        gSel('.section7 .info1', '1000px, 0', '4s');
    }
    if (window.scrollY > query('.section7 .info2').top + 1000) {
        gSel('.section7 .info2', '0px, 0px', '4s');
    }else {
        gSel('.section7 .info2', '-1000px, 0', '4s');
    }
    if (window.scrollY > query('.section8 .info2').top + 4000) {
        gSel('.section8 .info2', '0px, 0px', '4s');
    }else {
        gSel('.section8 .info2', '0px, 400px', '4s');
    }
    if (window.scrollY > query('.section8 .info3').top + 4000) {
        gSel('.section8 .info3', '0px, 0px', '4s');
    }else {
        gSel('.section8 .info3', '0px, 400px', '4s');
    }
    if (window.scrollY > query('.section8 .info4').top + 4000) {
        gSel('.section8 .info4', '0px, 0px', '4s');
    }else {
        gSel('.section8 .info4', '0px, 400px', '4s');
    }
    if (window.scrollY > query('.section8 .info1').top + 4000) {
        gSel('.section8 .info1', '0px, 0px', '4s');
    }else {
        gSel('.section8 .info1', '0px, 400px', '4s');
    }
    if (window.scrollY > query('.section10 .info .info2').top + 5000) {
        gSel('.section10 .info .info2', '0px, 0px', '4s');
    }else {
        gSel('.section10 .info .info2', '-400px, 0px', '4s');
    }
    if (window.scrollY > query('.section10 .info .info4').top + 5000) {
        gSel('.section10 .info .info4', '0px, 0px', '4s');
    }else {
        gSel('.section10 .info .info4', '-400px, 0px', '4s');
    }
    if (window.scrollY > query('.section10 .info .info5').top + 5000) {
        gSel('.section10 .info .info5', '0px, 0px', '4s');
    }else {
        gSel('.section10 .info .info5', '400px, 0px', '4s');
    }
    if (window.scrollY > query('.section10 .info .info7').top + 5000) {
        gSel('.section10 .info .info7', '0px, 0px', '4s');
    }else {
        gSel('.section10 .info .info7', '400px, 0px', '4s');
    }
    if (window.scrollY > query('.section4 .info1').top + 1000) {
        gSel('.section4 .info1', '0px, 0px', '4s');
    }else {
        gSel('.section4 .info1', '500px, 0', '4s');
    }
    if (window.scrollY > query('.section4 .info3').top + 1000) {
        gSel('.section4 .info3', '0px, 0px', '4s');
    }else {
        gSel('.section4 .info3', '-500px, 0', '4s');
    }
    if (window.scrollY > query('.section1 .info3').top + 200) {
        let set = setInterval(() => {
            rand = Math.random() * 90;
            if(timer < 30) {
                timer++;
                countup1.innerText = `${timer + '+'}`;
            }
            if (current < 100) {
                current++;
                countup2.innerText = `${current + '+'}`;
            }
            if(current1 < 310) {
                current1++;
                countup3.innerText = `${current1 + '+'}`;
            }
            if(current2 < 10) {
                current2++;
                countup4.innerText = `${current2 + 'k' + '+'}`;
            }
        }, rand);
    }
    
});




