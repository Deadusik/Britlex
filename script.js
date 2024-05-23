"use strict"

const isMobile = checkIsMobile()

let burgerButton = null
let pcLinks = null
let pcNavButton = null
let menuCloseButton = null
let mobileMenu = null

document.addEventListener('DOMContentLoaded', () => {
    if (isMobile) {
        burgerButton = document.querySelector('.burger-menu')
        pcLinks = document.getElementById('pc-nav-links')
        pcNavButton = document.getElementById('pc-nav-btn')
        menuCloseButton = document.querySelector('.close-button')
        mobileMenu = document.querySelector('.navbar-menu')

        setMobileNavbar()
        setMenuHandlers()
    } else {
        document.body.classList.add('_pc')
    }
})

function checkIsMobile() {
    return window.outerWidth < 766;
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

function setMenuHandlers() {
    if (burgerButton && menuCloseButton) {
        const toggleMenu = () =>
            setMenuVisibility()

        menuCloseButton.addEventListener('click', toggleMenu)
        burgerButton.addEventListener('click', toggleMenu)
    }
}