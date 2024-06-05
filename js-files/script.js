// header navigation sidebar function for responsive

const sidenav = document.getElementById("sidenav");

//show side nav bar

const menu = document.getElementById("menu");
menu.addEventListener('click', () => {
  sidenav.style.left = "50%";
});

// hide side nav bar

const close = document.getElementById("close");
close.addEventListener('click', () => {
  sidenav.style.left = "100%";
});

// footer year auto changing code

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

 