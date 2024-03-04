/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== for Mobile device SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')


function searchToggle() {
    const searchIcon = document.getElementById("search-btn").style.display='none';
    const navToggle = document.getElementById("nav-toggle").style.display='none';
    const activeImage = document.getElementById("activeImage").style.display='none';
    const mobileSearchbar = document.getElementById("mobile-searchbar").style.display='block';
}
function backToggle() {
    const mobileSearchbar = document.getElementById("mobile-searchbar").style.display='none';
    const searchIcon = document.getElementById("search-btn").style.display='block';
    const navToggle = document.getElementById("nav-toggle").style.display='block';
    const activeImage = document.getElementById("activeImage").style.display='block';
}

// for Categorise See all dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById('sidebar');

    sidebar.addEventListener('click', function(e) {
        var target = e.target.closest('.aiz-side-nav-item');

        // Check if the clicked element is a dropdown toggle
        if (target) {
            target.classList.toggle('active'); 
            var submenu = target.querySelector('.side-dropdown');

            if (submenu) {
                submenu.classList.toggle('show');
            }
        }
    });
});


