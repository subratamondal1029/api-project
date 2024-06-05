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




// form switching function start from Here

let submitBtn = document.getElementById("submitBtn");
Next = document.getElementById("nextBtn");
const Back = document.getElementById("backBtn");

Next.addEventListener("click", () => {
    controler(1);
});
Back.addEventListener("click", () => {
    controler(-1);
});

// function for switching form step
let step = 0;
function controler(s) {
    step = step + s;
    stepchange();
    function stepchange() {
        stepswitch(step);
    }
}
stepswitch(step);

function stepswitch(stepNum) {
    let steps = document.getElementsByClassName("steps");
    if (stepNum == steps.length) {
        stepNum = steps.length - 1;
        step = steps.length - 1;
        Next.style.display = "none";
    } else if (stepNum < 0) {
        stepNum = 0;
        step = 0;
    }

    // btn show and hide
    if (stepNum == 0) {
        Back.style.display = "none";
    } else {
        Back.style.display = "inline-block";
    }

    if (stepNum == steps.length - 1) {
        Next.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        Next.style.display = "inline-block";
        submitBtn.style.display = "none";
    }

    // form title
    let formTitle = document.getElementById("formtitle");
    switch (stepNum) {
        case 0:
            formTitle.innerHTML = "Personal Information";
            break;
        case 1:
            formTitle.innerHTML = "Education Qualification";
            break;
        case 2:
            formTitle.innerHTML = "Address";
            break;
        case 3:
            formTitle.innerHTML = "Required Document";
            break;
        case 4:
          formTitle.innerHTML = "Aditional Details";
            break;
    }

    // changing the left value of steps
    for (let y of steps) {
        y.style.position = "absolute";
        y.style.left = "130vw";
    }

    steps[stepNum].style.position = "relative";
    steps[stepNum].style.left = "0";

}

// form validation

// catagories validation

const catagories = document.getElementById("cataSelects");

catagories.addEventListener("change", () => {
    let cataVal = catagories.value.toUpperCase();
    if (catagories.value == "select") {
        document.getElementById("mainForm").style.visibility = "hidden";
    } else {
        let formSubject = document.getElementById("formSubject");
        formSubject.value = "New Application from Smart People! || " + cataVal;
        document.getElementById("mainForm").style.visibility = "visible";
    }
});

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
        requiredVal = required[i].value.trim();

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

    if (emailVal == "") {
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

//Validation More Document
const addMoreBtn = document.getElementById("UploadMore");
addMoreBtn.addEventListener("click", () => {
    let moreUploadDocument = document.getElementById("moreDocument");

    addMoreBtn.style.display = "none";
    moreDocument.style.display = "inline-block";
});

// Step 3 Validate

//country Validate
let country = document.getElementById("country");
country.addEventListener("change", () => {
    let countryVal = country.value;

    if (countryVal == "") {
        onError(country, " is Required");
    } else if (countryVal == "IN_R") {
        onSuccess(country);
    } else {
        onError(country, " India Is only Available");
        document.getElementById("RegionForm").style.display = "none";
    }
});

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

//step4 validation

//caste validate
let caste = document.getElementById("caste");
caste.addEventListener("input", () => {
    let casteVal = caste.value;
    let casteDoc = document.getElementById("casteDoc");

    if (casteVal == "") {
        casteDoc.style.display = "none";
    } else {
        casteDoc.style.display = "inline-block";
    }
});

// onsubmit validation || main validation
submitBtn.addEventListener("click", redirect);

function redirect(e) {
    let formContainer = document.getElementsByClassName("val").length;
    let successField = document.querySelectorAll(
        ".input_field.val.success"
    ).length;

    if (formContainer === successField) {
        submitBtn.style.display = "none";
        document.getElementById("AfterSubmit").style.display = "inline-block";
    } else {
        e.preventDefault();
        swal("Error!", "Check all Field add Enter Valid details!", "warning");
    }
}


const redirectSite = new URL(location.href).hostname + "/html-files/thanks.html"
document.getElementById('redirect').value = `https://${redirectSite}`