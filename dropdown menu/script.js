const slides = document.querySelectorAll(".slider");
let counter = 0;

slides.forEach((slide,index) =>{
slide.style.left = `${index * 100}%`
})

const goNext = () =>{
    counter++;
    slideImage()
}
const goPrev = ()=>{
    counter--;
    slideImage()
}

const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

setInterval(()=>{
    counter++;
    if(counter===slides.length){
        counter = 0;
    }
    slideImage()
},3000)