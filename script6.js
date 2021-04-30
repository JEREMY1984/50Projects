const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',slideIn);

function slideIn(){
    const triggerHeight = window.innerHeight / 5 * 4;
    boxes.forEach(function(item){
        const itemTop = item.getBoundingClientRect();
        if(itemTop.top < triggerHeight){
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    })
}

slideIn();