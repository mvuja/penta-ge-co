// CHANGE HEIGHT OF MENU WHEN SCROLLING
const mainHeader = document.querySelector('#main-header')
const mainHTML = document.documentElement
const mainBody = document.body
window.addEventListener('scroll', () => {
    if (mainHTML.scrollTop > 40) {
        mainHeader.classList.add('active')
    } else {
        mainHeader.classList.remove('active')
    }
})

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active')
    mainHTML.classList.toggle('no-scroll')
    mainBody.classList.toggle('no-scroll')
})



// MAGNETIC BUTTONS
const cursor = document.querySelector('.cursor')
const btns = document.querySelectorAll('.btn')

btns.forEach(el => el.addEventListener('mousemove', function(e) {
    cursor.classList.add('active')
    const pos = this.getBoundingClientRect()
    const mx = e.clientX - pos.left - pos.width/2
    const my = e.clientY - pos.top - pos.height/2
    
    this.style.transform = 'translate('+ mx * 0.1 +'px, '+ my * 0.2 +'px)'
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.2 +', 0, 12deg)'
    this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)'
}))

btns.forEach(el => el.addEventListener('mouseleave', function() {
    cursor.classList.remove('active')
    this.style.transform = 'translate3d(0px, 0px, 0px)'
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)'
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)'
}))

// --- CURSOR
document.addEventListener('mousemove', function(e) {
    cursor.style.left = (e.pageX - 25) + 'px'
    cursor.style.top = (e.pageY - 25) + 'px'
})