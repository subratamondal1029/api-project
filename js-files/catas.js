// show and hide courses on it page 
const foldicon = document.getElementById('foldicon');
foldicon.addEventListener('click', () =>{
    const courses = document.getElementById('courses');
let foldiconHTML = foldicon.innerHTML;

    if (foldiconHTML == "&lt;") {
        courses.style.left = "0";
        foldicon.style.left = "0";
        foldicon.innerHTML = "&gt;";
    } else {
        courses.style.left = "100%";
        foldicon.style.left = "95%";
        foldicon.innerHTML = "&lt;";
    }
});