(function (){
    
    const btnMenu = document.querySelector(".mobile-menu");
    const menu = document.querySelector(".nav-content-mobile");

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle("ativa");
    });
})()