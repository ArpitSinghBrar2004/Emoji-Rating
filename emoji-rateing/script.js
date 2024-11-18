const emojisEL= document.querySelectorAll (".fa-regular")
const starsEl= document.querySelectorAll (".fa-star")
console.log(starsEl)
starsEl.forEach((starsEl,index) =>{
    starsEl.addEventListener("click",()=>{
        updateRating(index)
    });
});

function updateRating(index){
    starsEl.forEach((starsEl, idx)=>{
        if(idx < index+1){
            starsEl.classList.add("active");
        }
        else{
            starsEl.classList.remove("active");
        }
        });
    emojisEL.forEach((emojiEl)=>{
        emojiEl.style.transform = `translatex(-${index*50}px)`
    });
}
