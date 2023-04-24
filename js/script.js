// const pagination = document.querySelectorAll('.ball')
// const slides = document.querySelectorAll('.slides > div')

// // function()

// pagination.forEach((curr, idx) => {
//     curr.addEventListener('click', () => {
//         loseAll()
//         curr.classList.add('current')
//         slides[idx].classList.add('show')
//     })
// })

// function loseAll() {
//     pagination.forEach((curr) => {
//         curr.classList.remove('current')
//     })
//     slides.forEach((slide) => {
//         slide.classList.remove('show')
//     })
// }

const bullet = document.querySelectorAll('.swiper-pagination-bullet')

// Transition Delay Feedback Section
const rates = document.querySelectorAll('.client-feedback-rate')

rates.forEach(rate => {
    const stars = rate.querySelectorAll('i')
    stars.forEach((star, idx) => {
        star.style.transitionDelay = `${idx * .1}s`
    })
})


// Menu and Scroll to
const logo = document.querySelector('.logo')
const links = document.querySelectorAll('.navbar-list_link')
const sections = document.querySelectorAll('section')

function scrollToWhere(here) {
    window.scrollTo({
        top: here,
        behavior: "smooth",
    })
}

logo.addEventListener('click', () => {
    scrollToWhere(0)
})

links.forEach((link, idx) => {
    link.addEventListener('click', () => {
        const here = sections[idx + 1].offsetTop
        scrollToWhere(here)
    })
})

const Navbar = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },
    cacheSelectors: function () {
        this.nav = document.querySelector(`.navbar`)
    },
    bindEvents: function () {
        window.addEventListener(`scroll`, this.Events.fixNav.bind(this))
        window.addEventListener('load', this.Events.fixNav.bind(this))
    },
    Events: {
        fixNav: function () {
            if (window.scrollY > this.nav.offsetHeight + 150) {
                this.nav.classList.add(`active`)
            } else {
                this.nav.classList.remove(`active`)
            }
        }
    }
}
Navbar.init()

const button = document.getElementById(`toggle`)
const navMobile = document.querySelector(`.navbarMobile`)


button.addEventListener(`click`, () => {
    navMobile.classList.toggle('active')
    button.classList.toggle('active')
})




// FAQ MOBILE
const buttons = document.querySelectorAll('.toggle')
const faqs = document.querySelectorAll('.faqsMobile .faq')

faqs.forEach(faq => {

    faq.onclick = () => faq.classList.toggle('show')
})
