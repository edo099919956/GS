const next   = document.getElementById("btn-next"),
      prev   = document.getElementById("btn-perv"),
      slides = document.querySelectorAll(".slider"),
      dots   = document.querySelectorAll(".dot");
let index = 0; 
const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
}
const activeDot = n => {
    for(dot of dots){
        dot.classList.remove("active");
    }
    dots[n].classList.add("active");
}
const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepore_all(index);
    }else{
        index++;
        prepore_all(index);
    }
}
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepore_all(index);
    }else{
        index--;
        prepore_all(index);
    }
}
const prepore_all = ind =>{
    activeSlide(ind);
    activeDot(ind);
}
dots.forEach((item, indexDot) =>{
    item.addEventListener("click", () => {
        index = indexDot;
        prepore_all(index);
    })
})
next.addEventListener("click",nextSlide);
prev.addEventListener("click",prevSlide);