"use strict"

let isMobile = false

let burgerButton = null
let pcLinks = null
let pcNavButton = null
let menuCloseButton = null
let mobileMenu = null

document.addEventListener('DOMContentLoaded', () => {
    setMobilePageByCondition()
    setMenuHandlers()
})

window.addEventListener('resize', () => {
    setMobilePageByCondition()
})

function setMobilePageByCondition() {
    isMobile = checkIsMobile()

    if (isMobile) {
        setMoblePage()
    } else {
        removeMobileNavbar()
    }
}

function setMoblePage() {
    pcLinks = document.getElementById('pc-nav-links')
    pcNavButton = document.getElementById('pc-nav-btn')
    mobileMenu = document.querySelector('.navbar-menu')

    setMobileNavbar()
}

function checkIsMobile() {
    return window.outerWidth < 767;
}

function setMenuVisibility() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('navbar-menu_active')
    }
}

function setMobileNavbar() {
    if (burgerButton && pcLinks && pcNavButton) {
        burgerButton.classList.add('burger-menu_active')
        pcLinks.classList.add('navbar-links_hidden')
        pcNavButton.classList.add('outline-button_hidden')
    }
}

function removeMobileNavbar() {
    if (burgerButton && pcLinks && pcNavButton) {
        burgerButton.classList.remove('burger-menu_active')
        pcLinks.classList.remove('navbar-links_hidden')
        pcNavButton.classList.remove('outline-button_hidden')
    }
}

function setMenuHandlers() {
    burgerButton = document.querySelector('.burger-menu')
    menuCloseButton = document.querySelector('.close-button')

    if (burgerButton && menuCloseButton) {
        const toggleMenu = () =>
            setMenuVisibility()

        menuCloseButton.addEventListener('click', toggleMenu)
        burgerButton.addEventListener('click', toggleMenu)
    }
}