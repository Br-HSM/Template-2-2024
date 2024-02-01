// Scroll Animation
const observeEL = new IntersectionObserver((element) => {
    element.forEach((element) => {
       if(element.isIntersecting){
        element.target.classList.add("show");
       }
       else {
        element.target.classList.remove("show");
       }
    });
});



const hiddenEL = document.querySelectorAll(".hidden");

hiddenEL.forEach((EL) => observeEL.observe(EL));
// ---

// burger menu
function showSideBar() {
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
}

function hideSideBar() {
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
}
// ---