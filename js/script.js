
// Transition Delay Feedback Section and Animation Delay Section 1
const Delay = {
    init: function () {
        this.cacheSelectors()
        this.bindEvents()
    },
    cacheSelectors: function () {
        this.section1text = document.querySelector('.section-1-content')
        this.rates = document.querySelectorAll('.client-feedback-rate')
    },
    bindEvents: function () {
        const childrenEl = [...this.section1text.children]

        childrenEl.forEach((texts, idx) => {
            texts.style.animationDelay = `${(idx + 2) * 0.2}s`
        })
        this.rates.forEach(rate => {
            const stars = rate.querySelectorAll('i')
            stars.forEach((star, idx) => {
                star.style.transitionDelay = `${idx * .1}s`
            })
        })

    }
}
Delay.init()


// Navbar Desktop Fix, Navbar and NavbarMobile Smooth Scroll to Sections + Translate Sections Effect
const Navbar = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },
    cacheSelectors: function () {
        this.nav = document.querySelector(`.navbar`)
        this.navMobile = document.querySelector(`.navbarMobile`)

        this.links = document.querySelectorAll('.navbar-list_link')
        this.linksMobile = document.querySelectorAll('.navbar-list_linkMobile')
        this.logo = document.querySelector('.logo')
        this.button = document.getElementById(`toggle`)

        this.sections = document.querySelectorAll('section')
    },
    bindEvents: function () {
        window.addEventListener(`scroll`, this.Events.fixNav.bind(this))
        window.addEventListener('load', this.Events.fixNav.bind(this))
        window.addEventListener('scroll', () => {
            const x = window.innerHeight * 0.9
            this.sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top

                if (sectionTop < x) {
                    section.classList.add(`translate`)
                }
            })
        })

        this.logo.addEventListener('click', () => {
            this.Events.scrollToWhere(0)
        })
        this.links.forEach((link, idx) => {
            link.style.animationDelay = `${(idx + 2) * 0.2}s`
            link.addEventListener('click', () => {
                const here = this.sections[idx + 1].offsetTop
                this.Events.scrollToWhere(here)
            })
        })
        this.linksMobile.forEach((link, idx) => {
            link.addEventListener('click', () => {
                const here = this.sections[idx + 1].offsetTop
                this.Events.scrollToWhere(here)
            })
        })

        this.button.addEventListener(`click`, () => {
            this.navMobile.classList.toggle('active')
            this.button.classList.toggle('active')
        })

    },
    Events: {
        fixNav: function () {
            if (window.scrollY > this.nav.offsetHeight + 150) {
                this.nav.classList.add(`desktop`)
            } else {
                this.nav.classList.remove(`desktop`)
            }
        },
        scrollToWhere: function (here) {
            window.scrollTo({
                top: here,
                behavior: "smooth",
            })
        }
    }
}
Navbar.init()


// Section 3 Text Show/Hide + FAQ answers Show/Hide
const Toggle = {
    init: function () {
        this.cacheSelectors()
        this.bindEvents()
    },
    cacheSelectors: function () {
        this.vejaMais = document.querySelector(`.seeMore`)
        this.vejaMenos = document.querySelector(`.seeLess`)
        this.dots = document.querySelector('.dots')
        this.toggleText = document.querySelector('.toggleText')

        this.buttons = document.querySelectorAll('.toggle')
        this.faqs = document.querySelectorAll('.faqsMobile .faq')
    },
    bindEvents: function () {
        this.vejaMais.addEventListener('click', () => {
            this.dots.style.display = 'none'
            this.toggleText.style.display = 'inline'
            this.vejaMenos.classList.add('show')
            this.vejaMais.classList.remove('show')
        })
        this.vejaMenos.addEventListener('click', () => {
            this.dots.style.display = 'inline'
            this.toggleText.style.display = 'none'
            this.vejaMenos.classList.remove('show')
            this.vejaMais.classList.add('show')
        })

        this.faqs.forEach(faq => {
            faq.onclick = () => faq.classList.toggle('show')
        })
    }
}

Toggle.init()

