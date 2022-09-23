document.querySelector('#hamburger').addEventListener('click', (e) => {
    document.querySelector('#main-nav').classList.remove('left-full');
    document.querySelector('#main-nav').classList.add('inset-0');
})

document.querySelector('#close-main-nav').addEventListener('click', (e) => {
    document.querySelector('#main-nav').classList.add('left-full');
    document.querySelector('#main-nav').classList.remove('inset-0');
})