const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionHeader = entry.target.querySelector(".section-header")

        if (entry.isIntersecting) {
            sectionHeader.classList.add("animate-pop-in")
            return
        }

        sectionHeader.classList.remove("animate-pop-in")
    })
})

observer.observe(document.querySelector(".section-header-div"))