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

//Validate Email
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

// Step 2 validation

//Validate File

//Validate Required File
let RequiredFile = document.getElementsByClassName("Dreq");
for (let i = 0; i < RequiredFile.length; i++) {
    RequiredFile[i].addEventListener("change", e => {
        RequiredFile = e.target;

        if (RequiredFile.value == "") {
            onError(RequiredFile, " is Required");
        }
    });
}

//size and formmat Validate
const UploadFiles = document.getElementsByClassName("Dfile");
for (let i = 0; i < UploadFiles.length; i++) {
    UploadFiles[i].addEventListener("input", FileValidate);
}

function FileValidate(e) {
    let UploadFile = e.target;

    //extaintion Validation
    let fileValue = UploadFile.value;
    let getExt = fileValue.split(".").pop().toLowerCase();
    let exts = ["jpg", "png", "jpeg"];

    if (exts.includes(getExt)) {
        //file Size Validation
        let fileSize_b = UploadFile.files[0].size;
        let fileSize = Math.round(fileSize_b / 1024);

        if (fileSize > "2048") {
            onError(UploadFile, " Must Be Under 2MB");

            setTimeout(() => {
                UploadFile.value = "";
            }, 1000);
        } else {
            onSuccess(UploadFile);
        }
    } else {
        onError(UploadFile, " Must Be jpg, png, jpeg Format");
        setTimeout(() => {
            UploadFile.value = "";
        }, 1000);
    }
}

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

// onsubmit validation || main validation
submitBtn.addEventListener("click", redirect);

const redirectSite = new URL(location.href).hostname + "/html-files/thanks.html"
document.getElementById('redirect').value = `https://${redirectSite}`