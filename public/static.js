
const stars = document.getElementById('star');
const moon = document.getElementById('moon');
const MB = document.getElementById('MB');
const txt = document.getElementById('txt')
const btn = document.getElementById('btn')
const Mf = document.getElementById('Mf');
const header= document.querySelector('header');

window.addEventListener('scroll', () => {
     let value = window.scrollY;
    
    stars.style.left = value * 0.25 + 'px';

    moon.style.top = value * 1.05 + 'px';
    MB.style.top = value * 0.5 + 'px';
    Mf.style.top = value * 0 + 'px';
    txt.style.marginRight = value * 4 + 'px';
    txt.style.top = value * 1.5 + 'px';
    btn.style.top = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})