// filter
let list = document.querySelectorAll(".list")
let items = document.querySelectorAll(".product div")

for(let i = 0;i<list.length;i++){
    list[i].addEventListener("click",function(){
        for(let j = 0;j<list.length;j++){
            list[j].classList.remove("active")
        }
        this.classList.add("active")

        let datafilter = this.getAttribute('data-filter')

        for(let k=0;k<items.length;k++){
            items[k].classList.remove("active")
            items[k].classList.add("hide")

            if(items[k].getAttribute('data-item') == datafilter || datafilter == "all"){
                items[k].classList.add("active")
                items[k].classList.remove("hide")
            }
        }
    })
}


// totop
const toTop = document.querySelector(".to-top");
const nav = document.querySelector(".nav")
// window.addEventListener("scroll",function(){
//     nav.classList.toggle("active",window.scrollY > 300);

// })

// window.addEventListener("scroll",()=>{
//     if (window.pageYOffset > 800){
//         toTop.classList.add("tp");
//     }
//     else{
//         toTop.classList.remove("tp");
//     }
// });

const bars = document.querySelector(".bars")

bars.addEventListener("click",navigation)

function navigation(){
    bars.classList.toggle("active")
    nav.classList.toggle("active")
}