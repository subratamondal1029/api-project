// auto typing in heading function
const Typer = new Typed(".auto-text", {
    strings: [" to API.", "to Learn.", "to Be healthy.", "to get work."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });


// nav bar active change
function changeActive(){
    const catagories = document.getElementById('cataheading')
    const rect = catagories.getBoundingClientRect()

    const homeBtns = document.querySelectorAll('.home')
    const cataBtns = document.querySelectorAll('.cata')


    if (rect.top <= 72) {
      for (let i = 0; i < homeBtns.length; i++) {
        const homeBtn = homeBtns[i];
        const cataBtn = cataBtns[i];
        
        homeBtn.classList.remove('active')
        cataBtn.classList.add('active')
      }
    }else{
      for (let i = 0; i < homeBtns.length; i++) {
        const homeBtn = homeBtns[i];
        const cataBtn = cataBtns[i];
        
        homeBtn.classList.add('active')
        cataBtn.classList.remove('active')
      }
    }
  }

  document.onscroll = changeActive