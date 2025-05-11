const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const imgSrc = document.querySelector('.img-src')





let counter = 0;
function sliderNext(){
    counter++
    if(counter>2){
        counter = 2
    }
    if(counter == 1){
        imgSrc.src = `img/homeimg1.jpg`
    }else if(counter == 2){
        imgSrc.src = `img/homeimg2.jpg`
    }
}
function sliderPrev(){
    counter--
    if(counter<0){counter = 0}
    if(counter == 1){
        imgSrc.src = `img/homeimg1.jpg`
    }else if(counter == 0){
        imgSrc.src = `img/logo-with-mail.jpg`
    }
}

prevBtn.addEventListener("click", ()=>{
    sliderPrev()
})
nextBtn.addEventListener('click', ()=>{
    sliderNext()
})