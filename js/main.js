// VARIABLES
const toggleBtn = document.getElementById('toggle-btn')
const toggleBtnIcon = document.querySelector('#toggle-btn i')
const mobileMenu = document.querySelector('.mobile-menu')
const navBar = document.getElementById('navbar')
const navItem = [...document.querySelectorAll('.nav-item')]
const logoName = document.querySelector('.logo-name')

const scrollDownItens = [navBar, ...navItem, logoName]

// MOBILE MENU
toggleBtn.onclick = ()=> {
    mobileMenu.classList.toggle('open')
    const isOpen = mobileMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

    // Definir a altura inicial com base na posição de rolagem
    if (isOpen) {
        if (window.scrollY > 0) {
            mobileMenu.style.height = 'calc(100dvh - 60px)'
        } else {
            mobileMenu.style.height = 'calc(100dvh - 90px)'
        }
    } else {
        mobileMenu.style.height = '0'
    }
}

// CARD HOVER EFFECT
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card')

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const button = card.querySelector('.action-btn')
            button.style.opacity = '1'
            button.style.transform = 'translateY(0)'
        })

        card.addEventListener('mouseleave', () => {
            const button = card.querySelector('.action-btn')
            button.style.opacity = '0'
            button.style.transform = 'translateY(10px)'
        })
    })
})

// HEADER SCROLLDOWN
window.addEventListener('scroll', ()=>{
    scrollDownItens.map((element)=>{
        element.classList.toggle('scroll-down', window.scrollY > 0)
    })

    if (mobileMenu.classList.contains('open')) {
        if (window.scrollY > 0) {
            mobileMenu.style.height = 'calc(100dvh - 60px)'
            console.log('Height set to calc(100dvh - 60px)')
        } else {
            mobileMenu.style.height = 'calc(100dvh - 90px)'
            console.log('Height set to calc(100dvh - 90px)')
        }
    }
})

// PRELOADER
window.addEventListener('load', ()=>{
    let loaderContainer = document.querySelector('.preloader-container')
    let pageContent = document.querySelector('.content')
    if(loaderContainer) {
        setTimeout(()=>{
            pageContent.style.display = 'block'
            loaderContainer.style.opacity = 0
            setTimeout(()=>{
                loaderContainer.style.display = 'none'
            }, 500)
        }, 1000)
    }
})
