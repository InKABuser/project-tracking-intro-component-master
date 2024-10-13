const primaryNav= document.getElementById('primary-nav');
const navToggle = document.getElementsByClassName('icon-hamburger')[0];

navToggle.addEventListener('click', () => {
    let visibility = primaryNav.getAttribute('data-visible');
     if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
     } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
     }
})