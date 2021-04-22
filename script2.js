const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var counter = 1;

next.addEventListener('click',function(){
    counter++;
    update();


})

prev.addEventListener('click',function(){
    counter--;
    update();
    
})


function update(){
    if(counter>circles.length){
        counter=circles.length;
    } else if( counter<1){
        counter=1;
    };

    circles.forEach(function(item,index){
        item.classList.remove("active");
        if(index<counter){
            item.classList.add('active');
        } 
    });

    progress.style.width = (counter-1) / (circles.length-1) * 100 + "%";

    if (counter === circles.length){
        next.setAttribute("disabled","");
    } else if (counter < circles.length){
        next.removeAttribute("disabled");
    };
    
    if (counter === 1){
        prev.setAttribute("disabled","");
    } else if (counter > 1){
        prev.removeAttribute("disabled");
    }
}