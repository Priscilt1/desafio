const modalOverlay = document.querySelector('.modal-overlay')


const cards = document.querySelectorAll('.card')

const modal = document.querySelector(".modal")

for (let card of cards) {
    card.addEventListener("click", function(){
        window.open("https://medium.com/@nayaramassi/autoconhecimento-a-mais-importante-das-soft-skills-2930ce3f20a1")
        // const postId = card.getAttribute("id");
        // modalOverlay.classList.add('active')
        // modalOverlay.querySelector("iframe").src = `https://medium.com/@nayaramassi/${postId}`
    })
}


document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");
    modal.classList.remove("maximized")
    modalOverlay.querySelector("iframe").src = ""
})


document.querySelector(".maximize-modal").addEventListener("click", function() {
    if (modal.classList.contains("maximized")) {
        modal.classList.remove("maximized")
    } else {
        modal.classList.add("maximized")
    }
})