// const bar = document.getElementById('bar');
// const navbar = document.getElementById('navbar');

// if(bar) {
//     bar.addEventListener('click', () => {
//         navbar.classList.add('active');
//     })
// }

const bar = document.querySelector("#bar")
const navbar1= document.querySelector("#navres")

count = 0

bar.addEventListener("click", function(){
    if(count == 0){
        navbar1.style.opacity = 1
        count = 1
    }

    else if(count == 1){
        navbar1.style.opacity= 0
        count = 0
    }

})