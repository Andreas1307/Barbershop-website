let bookMsg = document.getElementById("book-msg");
let successMsg = '<i class="fa-solid fa-circle-check"></i> <h3>Successfully booked</h3>';

function notificationBar(msg) {
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = msg;
    bookMsg.appendChild(notification)
    


    setTimeout(()=> {
        notification.remove()
    },4300);
}
document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
})

let bar = document.getElementById("bar");
let close = document.getElementById("close");
let navBar = document.querySelector(".home-opt");

if(bar) {
    bar.addEventListener('click', () => {
        navBar.classList.toggle("active")
    })
}

if(close) {
    close.addEventListener('click', () => {
        navBar.classList.remove("active")
    })
}