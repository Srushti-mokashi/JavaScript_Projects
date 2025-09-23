const starsEl = document.querySelectorAll(".fa-star");
const emojisEl =document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsEl.forEach((starsEl, index) => {
    starsEl.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index){
    starsEl.forEach((starEl, idx) => {
        if(idx < index + 1){
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    });

    emojisEl.forEach((emojisEl) => {
        emojisEl.style.transform = `translateX(-${index * 50}px)`;
        emojisEl.style.color = colorsArray[index];
    });
}