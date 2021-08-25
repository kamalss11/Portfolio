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

function cls(){
    nav.classList.remove("active")
    bars.classList.remove("active")
}

$('#contact').submit((e)=>{
    e.preventDefault();
    var formData = {
        'entry.1557085568':$('#name').val(),
        'entry.1053142223':$('#mail').val(),
        'entry.802367497':$('#ph').val(),
        'entry.1980512966':$('#msg').val(),
    }

    $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScbQF9ZjVEFV0_Si1epOmcV1eYZq7TrEiL4K9-CtdBOFVrYaA/formResponse',
        data: formData,
        dataType: 'jsonp',
        crossDomain: true,
        dataType: "xml",
        success: function (data) {
        },
        error: function (data) {
            $('#success').css("display","block");
            setTimeout(()=>{
                $('#success').css("display","none");
            },5000)
        $('#contact').trigger('reset')
        },
    });
})

// OFF developer tools
// $(document).keydown(function (event) {
//    if (event.keyCode == 123) { // Prevent F12
//        return false;
//   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
//       return false;
//     }
// });

// Right click > Inspect

// $(document).on("contextmenu", function (e) {        
//     e.preventDefault();
// });
