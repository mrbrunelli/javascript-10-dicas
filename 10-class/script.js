class SmoothScroll {
    constructor(links) {
        this.linksElements = document.querySelectorAll(links)

        this.addClickEvent()
    }

    handleClick(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        window.scrollTo({
            top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
            behavior: 'smooth'
        })
    }

    addClickEvent() {
        this.linksElements.forEach(link => {
            link.addEventListener('click', this.handleClick)
        })
    }
}

class ActiveSmoothScroll extends SmoothScroll {
    constructor(links, sections) {
        super(links)
        this.sectionElements = document.querySelectorAll(sections)
        this.handdleScroll = this.handdleScroll.bind(this)
        this.handdleScroll()
        this.activeNavScroll()
    }

    handdleScroll() {
        this.sectionElements.forEach((section, i) => {
            if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
                this.linksElements[i].classList.add('active')
            } else {
                this.linksElements[i].classList.remove('active')
            }
        })
    }

    activeNavScroll() {
        window.addEventListener('scroll', this.handdleScroll)
    }
}

const scroll = new ActiveSmoothScroll("a[href^='#']", "section")
