const btn = document.querySelector(".floating")

btn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

})
