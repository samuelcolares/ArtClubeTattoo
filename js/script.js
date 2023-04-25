
// Transition Delay Feedback Section and Animation Delay Section 1
const section1text = document.querySelector('.section-1-content').children
const rates = document.querySelectorAll('.client-feedback-rate')
rates.forEach(rate => {
    const stars = rate.querySelectorAll('i')
    stars.forEach((star, idx) => {
        star.style.transitionDelay = `${idx * .1}s`
    })
})
Array.from(section1text).forEach((texts, idx) => {
    texts.style.animationDelay = `${(idx + 2) * 0.2}s`
})

// Menu and Scroll to
const sections = document.querySelectorAll('section')
const logo = document.querySelector('.logo')
const links = document.querySelectorAll('.navbar-list_link')
const linksMobile = document.querySelectorAll('.navbar-list_linkMobile')

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
    link.style.animationDelay = `${(idx + 2) * 0.2}s`
    link.addEventListener('click', () => {
        const here = sections[idx + 1].offsetTop
        scrollToWhere(here)
    })
})

linksMobile.forEach((link, idx) => {
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
                this.nav.classList.add(`desktop`)
            } else {
                this.nav.classList.remove(`desktop`)
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


// Section 3 Text Show/Hide
const vejaMais = document.querySelector(`.seeMore`)
const vejaMenos = document.querySelector(`.seeLess`)
const dots = document.querySelector('.dots')
const toggleText = document.querySelector('.toggleText')

vejaMais.addEventListener('click', () => {
    dots.style.display = 'none'
    toggleText.style.display = 'inline'
    vejaMenos.classList.add('show')
    vejaMais.classList.remove('show')
})
vejaMenos.addEventListener('click', () => {
    dots.style.display = 'inline'
    toggleText.style.display = 'none'
    vejaMenos.classList.remove('show')
    vejaMais.classList.add('show')
})


window.addEventListener('scroll', () => {
    const x = window.innerHeight * 0.9
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top

        if (sectionTop < x) {
            section.classList.add(`translate`)
        }
    })
})