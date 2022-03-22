// window.addEventListener("DOMContentLoaded", () => {
//     alert("NOTE: This page is developed only in 1024 by 786")
// })

// swap to map page
document.querySelector("#start-btn").addEventListener("click", () => {
    document.querySelector("#main-page").classList.add("hide-page")
    document.querySelector("#map-page").classList.add("show-page")
    document.querySelector("body").classList.add("clear-bottom")
})

document.querySelector("#back-btn").addEventListener("click", () => {
    document.querySelector("body").classList.remove("clear-bottom")
    document.querySelector("#map-page").classList.remove("show-page")
    document.querySelector("#map-page").classList.add("hide-page")
    document.querySelector("#main-page").classList.remove("hide-page")
})