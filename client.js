document.querySelector('#hamburger').addEventListener('click', (e) => {
    document.querySelector('#main-nav').classList.remove('-translate-x-full');
    document.querySelector('#bg-fade-effect').classList.remove('opacity-0');
    document.querySelector('#bg-fade-effect').classList.add('opacity-80');
})

document.querySelector('#close-main-nav').addEventListener('click', (e) => {
    document.querySelector('#main-nav').classList.add('-translate-x-full');
    document.querySelector('#bg-fade-effect').classList.remove('opacity-80');
    document.querySelector('#bg-fade-effect').classList.add('opacity-0');
})