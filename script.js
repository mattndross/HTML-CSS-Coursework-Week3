const cakeBtn = document.querySelector('.cake-btn')
const linkContainer = document.querySelector('.menu-link-container')

cakeBtn.addEventListener('click', function(){
    console.log("open menu");

    if (linkContainer.classList.contains('display-none')) { //opens menu
        linkContainer.classList.remove('display-none');
    }
    else {
        linkContainer.classList.add('display-none');
    }
})