// navbar
const toggleBtn = document.querySelector('.toggle_btn')
const btnIcon = document.querySelector('.toggle_btn i')
const dropDownmenu = document.querySelector('.dropdownMenu')

toggleBtn.onclick = function(){
    dropDownmenu.classList.toggle('open');
    const isOpen = document.classList.contains('open')

    btnIcon.classList = isOpen
    ?'fa-solid fa-square-xmark'
    :'fa-solid fa-bars'
}

// icon changer

function myFunction(x){
    x.classList.toggle("fa-solid fa-square-xmark")
}