function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleDescription(id){
    const element = document.getElementById(id);
    element.classList.toggle("show");
}