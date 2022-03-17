const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionHeader = entry.target.querySelector(".section-header")
        console.log(sectionHeader)

        if (entry.isIntersecting) {
            sectionHeader.classList.add("animate-pop-in")
            return
        }

        sectionHeader.classList.remove("animate-pop-in")
    })
})


let target = ".section-header-div"
document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i)
    }
})