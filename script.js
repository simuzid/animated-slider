const slider = document.querySelector('.slider');
const list = document.querySelector('.list')
const thumbnail = document.querySelector('.thumbnail')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let AutoPlay = setTimeout(() => {
    next.click()
}, 3000)

next.addEventListener('click', () =>{
    initSlider('next')

})
prev.addEventListener('click', () =>{
    initSlider('prev')

})
const initSlider =(type) => {
    const slideritems =list.querySelectorAll('.items')
    const slideritem = thumbnail.querySelectorAll('.item')

if(type === 'next'){
    list.appendChild(slideritems[0])
    thumbnail.appendChild(slideritem[0])
    slider.classList.add('next')
    
}
else{
   const lastitemsPosition = slideritems.length - 1;
   const lastitemPosition = slideritems.length - 1;
    list.prepend(slideritems[lastitemsPosition])
    thumbnail.prepend(slideritem[lastitemPosition])
    slider.classList.add('prev')
}
setTimeout(() => {
    slider.classList.remove('next');
    slider.classList.remove('prev');
}, 2000);
clearTimeout(runAutoPlay)
runAutoPlay = setTimeout(() => {
    next.click()
}, 3000)
}
