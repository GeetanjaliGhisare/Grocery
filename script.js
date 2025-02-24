


let bars = document.querySelector(".hidden-bars");
let navlink = document.querySelector(".nav2-links");
let close = document.querySelector(".close");

if (bars) {
    bars.addEventListener("click", ()=>{
        navlink.classList.add('active');
    })
}

if(close) {
    close.addEventListener("click", ()=>{
        navlink.classList.remove('active')
    })
}