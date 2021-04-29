const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const container = document.querySelector('.search')

btn.addEventListener('click',function(){
    container.classList.toggle('active');
    input.focus();
})