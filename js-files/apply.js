// disclaimer hide function start from Here

// Function to prevent scrolling
function preventScroll(e) {
    e.preventDefault();
}

const disclaimerContainer = document.getElementById("disclaimerContainer")
const disclaimerOverlay =document.getElementById('disclaimerOverlay')
window.onload = () =>{
    document.getElementById('loading').style.display = "none"
    disclaimerContainer.classList.add('show')

    // Add event listeners to prevent scrolling
window.addEventListener('wheel', preventScroll, { passive: false });
window.addEventListener('touchmove', preventScroll, { passive: false });
} 

const closeBtns = document.querySelectorAll(".closeBtn")
closeBtns.forEach((close) =>{
    close.addEventListener("click", () => {
       disclaimerContainer.classList.remove('show')
       setTimeout(() => disclaimerOverlay.style.display = "none", 500)

    //    remove scrolling prevantion
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
    });
})


// form validation


// when the field is Not give any error

function onSuccess(element) {
    let parantElm = element.parentElement;

    parantElm.classList.remove("error");
    parantElm.classList.add("success");
}

// when the field is give error

function onError(element, msg) {
    let parantElm = element.parentElement;
    parantElm.classList.remove("success");
    parantElm.classList.add("error");

    let elmName = element.name;
    let errmsg = parantElm.querySelector("div");
    errmsg.innerHTML = `${elmName} ${msg}`;
}

// Step 1 validation

// validate required fields
let required = document.getElementsByClassName("req");
for (let i = 0; i < required.length; i++) {
    required[i].addEventListener("input", () => {
      const requiredVal = required[i].value.trim();

        if (requiredVal == "") {
            onError(required[i], " is Required");
        } else if (requiredVal.length < 3) {
            onError(required[i], " Must Be 3 Characters");
        } else {
            onSuccess(required[i]);
        }
    });
}

// Validate alphabate
let alphabate = document.getElementsByClassName("alpha");
for (let i = 0; i < alphabate.length; i++) {
    let alphabatePatarn = /^[A-Za-z ]{0,25}$/;

    alphabate[i].addEventListener("input", () => {
        let alphabateVal = alphabate[i].value.trim();

        if (!alphabatePatarn.test(alphabateVal)) {
            onError(alphabate[i], " Only Contain Alphabates");
        }
    });
}

//Validate Phone
let phone = document.getElementById("phone");
phone.addEventListener("input", () => {
    let phoneVal = phone.value;

    if (phoneVal == "") {
        onError(phone, " is Required");
    } else if (phoneVal.length != 10) {
        onError(phone, " Must Be 10 Digits");
    } else {
        onSuccess(phone);
    }
});

//Validate Email FIXME: solve it
let email = document.getElementById("email");
email.addEventListener("input", () => {
    let emailPattern =
        /^[A-Za-z0-9]{3,20}[._-]{0,1}[A-Za-z0-9]{1,8}[A-Za-z]*[@][A-Za-z]*[\.][a-z]{2,4}[.A-Za-z]{0,5}$/;
    let emailVal = email.value.trim();

    if (emailVal === "") {
        onError(email, " is Required");
    } else if (!emailPattern.test(emailVal)) {
        onError(email, " is Invalid");
    }
});

//Validate Date of Birth
let DoB = document.getElementById("DoB");
DoB.addEventListener("input", () => {
    let minAge = new Date();
    minAge.setFullYear(minAge.getFullYear() - 14);

    let maxAge = new Date();
    maxAge.setFullYear(maxAge.getFullYear() - 50);

    let DoBVal = new Date(DoB.value);

    if (DoBVal == "Invalid Date") {
        onError(DoB, " is Required");
    } else if (DoBVal > minAge) {
        onError(DoB, " Minimum 14 years old");
    } else if (DoBVal < maxAge) {
        onError(DoB, " Maximum 50 years old");
    } else {
        onSuccess(DoB);
    }
});

// address scripting

//pin code Validate
let pin = document.getElementById("pin");
pin.addEventListener("input", () => {
    let pinVal = pin.value;

    if (pinVal == "") {
        onError(pin, " is Required");
    } else if (pinVal.length != 6) {
        onError(pin, " Must Be 6 Number");
    } else {
        onSuccess(pin);
    }
});


// file upload scripting

// upload popup showing toggle 
const uploadPopup = document.getElementById('uploadpopup')

document.getElementById('uploadField').addEventListener('click', () => uploadPopupToggle(true))
document.getElementById('uploadPopupClose').addEventListener('click', () => uploadPopupToggle(false))

function uploadPopupToggle(show){
    if (show) {
        uploadPopup.classList.add('show')
    }else uploadPopup.classList.remove('show')
}

// file validation
const files = document.querySelectorAll('#fileContainer input[type="file"]');
files.forEach((file) =>{
    file.addEventListener('change', (e) => checkFileError(file))
})

function checkFileError(file){
    // file format validation
    const exts = ['png', 'jpeg', 'jpg']
    const fileVal = file.value.trim()

if (fileVal.length !== 0) {
    const fileExt = fileVal.split('.').pop().toLowerCase()
    const fileSize = file.files[0].size/1024

     if (exts.includes(fileExt)) {
        if (fileSize > 2048) {
            onFileError(file, "upload Max 2MB image")
        }else showFilName(file)
    
    }else onFileError(file, `please upload png,jpg or jpeg files`);
}else{
    if(file.parentElement.className.includes('Dreq'))onFileError(file, "Required")
    setDefault(file.parentElement, file.id)
}
}


function showFilName(file){
    const fileName = file.value.trim().split(`\\`).reverse()[0]
    const label = file.parentElement.querySelector('label')
    label.textContent = fileName

    // file.parentElement.classList.remove('error')
    onSuccess(file)
}

function onFileError(file, msg){
    const parent = file.parentElement
    parent.classList.add('error')

    file.value = ""
    setDefault(parent, file.id)
    parent.querySelector('.errorField').textContent = msg
}


function setDefault(container, id){
    const label = container.querySelector('label')
    label.innerHTML = `<svg
            aria-hidden="true"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="2"
              stroke="#fffffff"
              d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="#fffffff"
              d="M17 15V18M17 21V18M17 18H14M17 18H20"
            ></path>
          </svg>`

    // if (id === "proofOfIdentity") id = "proof Of Identity"
    // ${id}<span class="red">*</span>

    if (id === "proofOfIdentity") {
        id = "proof Of Identity"
    }else if(id === "panCard"){
        id = "Pan Card"
    }else if(id === "otherFile"){
        id = "Other"
    }


    if (container.className.includes('Dreq')) {
        label.innerHTML += `${id}<span class="red">*</span>`
    }else{
        label.append(id)
    }
}

document.getElementById('upload').addEventListener('click', async() =>{
    const reqDocs = document.querySelectorAll('.files.Dreq')
    const reqSucDocs = document.querySelectorAll('.files.Dreq.success')
    
    if (reqDocs.length === reqSucDocs.length) {
        const { jsPDF } = window.jspdf
        const pdf = new jsPDF()

     for (let i = 0; i < files.length; i++) {
         const fileConatiner = files[i]
         const file = fileConatiner.files[0];
        if (fileConatiner.value.trim()) {
            const imageData = await readAsdataUrl(file);

            pdf.addImage(imageData, 'PNG', 10, 10, 180, 180)
            if (i < files.length - 1) {
                pdf.addPage();
            }
        }
        }
        // adding userName in document name
        let userName = document.getElementById('name').value.trim() || Date.now()
        
        // Convert jsPDF document to a Blob
        const pdfBlob = pdf.output('blob');
         console.log(pdfBlob);
        const file = new File([pdfBlob], `${userName}_docs.pdf`, { type: "application/pdf" });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

       document.getElementById('mainFile').files = dataTransfer.files

      
        const fileName = document.querySelector('#uploadField #fileName').textContent = `${userName}_docs.pdf`
        

        uploadPopupToggle(false)
    }else{
        reqDocs.forEach((file) => {
            const input = file.querySelector('input[type="file"]')
            checkFileError(input)
        })
    }
})

function readAsdataUrl(file){
    return new Promise((res, rej) =>{
        const reader = new FileReader()
        reader.onload = () => res(reader.result)
        reader.onerror= (err) => rej(err)
        reader.readAsDataURL(file)
    })
}





// onsubmit validation || main validation
// submitBtn.addEventListener("click", redirect);

// const redirectSite = new URL(location.href).hostname + "/html-files/thanks.html"
// document.getElementById('redirect').value = `https://${redirectSite}`