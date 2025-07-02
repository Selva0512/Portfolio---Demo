//sidebar while mobile layout start//
const sideBar = document.getElementById("sideBar");
const openButton = document.getElementById("openButton");
const closeBar = document.getElementById("close");

let sideBarState = false;
// Function to open/close sidebar
function toggleSideBar() {
    if (!sideBarState) {
        sideBar.style.right = "0"; 
        sideBarState = true;
    } else {
        sideBar.style.right = "-300px";
        sideBarState = false;
    }
}
// Open sidebar when openButton is clicked
openButton.addEventListener("click", () => {
    toggleSideBar();
});
// Close sidebar when close button is clicked
closeBar.addEventListener("click", () => {
    sideBar.style.right = "-300px";
    sideBarState = false;
});
//sidebar while mobile layout end//

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll functionality for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });
  });
