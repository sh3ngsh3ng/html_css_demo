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

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        const contentContainer = entry.target.querySelector(".content-container-inner")

        console.log(contentContainer)

        if (entry.isIntersecting) {
            contentContainer.classList.add("fade-in")
            // document.querySelector("#scroll-up-icon").style.display=("block")
            return
        }


        contentContainer.classList.remove("fade-in")
        // document.querySelector("#scroll-up-icon").style.display=("none")
    })
})


let target = ".section-header-div"
document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i)
    }
})

let target2 = ".animation-wrapper"
document.querySelectorAll(target2).forEach((i) => {
    if (i) {
        observer2.observe(i)
    }
})


const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            document.querySelector("#scroll-up-icon").style.display=("block")
            return
        }

        document.querySelector("#scroll-up-icon").style.display=("none")
    })
})

observer3.observe(document.querySelector("#section1"))
// SPA JVS

