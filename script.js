btn = document.querySelector('.button-theme')
btn_slider = document.querySelector('.btn-slider')
test = document.querySelector('ul')
btn.addEventListener('click',function(){
    btn.classList.toggle('active')
    btn_slider.classList.toggle('active')
    document.body.classList.toggle('dark')
})

