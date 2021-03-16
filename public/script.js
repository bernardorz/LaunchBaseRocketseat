const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".material-icons")
const cards = document.querySelectorAll(".card")

for (let card of cards){
    card.addEventListener("click", () => {
        const videoId = card.getAttribute("id");
        //modalOverlay.classList.add("active");
        //modalOverlay.querySelector(".modal-overlay iframe").src = `https://www.youtube.com/embed/${videoId}`
       
        window.location.href = `/video?id=${videoId}`
  
    })
}


// closeModal.addEventListener("click", () => {
//     modalOverlay.classList.remove("active")
//     modalOverlay.querySelector(".modal-overlay iframe").src = ""

// })


