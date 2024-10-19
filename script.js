const nav = document.getElementById('nav');


window.addEventListener('scroll', () => {
    if (window.screenY > 50){
        nav.classList.add('scrolled');
        nav.classList.remove('transparent');
    } else{
        nav.classList.add('transparent');
        nav.classList.remove('scrolled');
    }
})