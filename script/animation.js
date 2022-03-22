const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionHeader = entry.target.querySelector(".section-header")
        console.log(sectionHeader)

        if (entry.isIntersecting) {
            sectionHeader.classList.add("animate-pop-in")
            contentContainer.classList.add("slide-in")
            return
        }


        sectionHeader.classList.remove("animate-pop-in")
    })
})

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        const contentContainer = entry.target.querySelector(".test")

        console.log(contentContainer)

        if (entry.isIntersecting) {
            contentContainer.classList.add("fade-in")
            return
        }


        // sectionHeader.classList.remove("animate-pop-in")
    })
})

let target = ".section-header-div"
document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i)
    }
})

let target2 = ".content-container"
document.querySelectorAll(target2).forEach((i) => {
    if (i) {
        observer2.observe(i)
    }
})
