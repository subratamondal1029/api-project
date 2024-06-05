//when not give any error
function onSuccess(element) {
    let parantElm = element.parentElement;

    parantElm.classList.remove("error");
    parantElm.classList.add("success");
}

// when its give any error
function onError(element, msg) {
    let parantElm = element.parentElement;
    parantElm.classList.remove("success");
    parantElm.classList.add("error");

    let elmName = element.name;
    let errmsg = parantElm.querySelector(".err");
    errmsg.innerHTML = `${elmName} ${msg}`;
}

//required field validation
let required = document.querySelectorAll(".req");
for (let i = 0; i < required.length; i++) {
    required[i].addEventListener("input", () => {
       let requiredVal = required[i].value.trim();

        if (requiredVal == "") {
            onError(required[i], " is Required");
        } else if (requiredVal.length < 3) {
            onError(required[i], " Must Be 3 Characters");
        } else {
            onSuccess(required[i]);
        }
    });
}

// validate email id
const email = document.getElementById('email')
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
email.addEventListener('input', () => Validate(email, emailRegex))

// validate phone
const phone = document.getElementById('phone')
const phoneRegex = /^\d{10}$/;
phone.addEventListener('input', () => Validate(phone, phoneRegex))

function Validate(elm, regx){
    const Val = elm.value.trim()
    if (Val) {
        if (regx.test(Val)) {
            onSuccess(elm)
        }else onError(elm, "Is not Valid")
    }else onError(elm, "is Required")
}

//validate captha code
const capthaCodeField = document.getElementById("captchaCode");

setCaptha();
function setCaptha() {
    let alpha = new Array(
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    );

    let a = alpha[Math.floor(Math.random() * alpha.length)];
    let b = alpha[Math.floor(Math.random() * alpha.length)];
    let c = alpha[Math.floor(Math.random() * alpha.length)];
    let d = alpha[Math.floor(Math.random() * alpha.length)];
    let e = alpha[Math.floor(Math.random() * alpha.length)];
    let f = alpha[Math.floor(Math.random() * alpha.length)];

    capthaCodeField.innerHTML = a + b + c + d + e + f;
}

const answer = document.getElementById("captcha");
answer.addEventListener("change", () => {
    let ansValue = answer.value.trim();

    if (ansValue == "") {
        onError(answer, "Captcha code is Required");
    } else if (ansValue != capthaCodeField.innerHTML) {
        onError(answer, "Captcha code is Not Matching");
        setCaptha();
    } else {
        onSuccess(answer);
    }
});

let form = document.getElementById("contactForm");
form.addEventListener("submit", e => {
    let nameVal = document.getElementById("name").value.trim();

    let subjectVal = document.getElementById("subject").value.trim();

    document.getElementById(
        "ContactSubject"
    ).value = `${subjectVal} || ${nameVal} Need Help API contact Form`;

    // error Handing
    let formContainer = document.getElementsByClassName("val").length;
    let successField = document.querySelectorAll(
        ".input_field.val.success"
    ).length;

    if (formContainer != successField) {
        e.preventDefault();
        swal("Error!", "Check all Field add Enter Valid details!", "warning");
    } else {
      document.getElementById('contactDetailssend').style.display = "none";
      console.log('Sending');
      document.getElementById('load').style.display = "block";
    }
});

const redirectSite = new URL(location.href).hostname + "/html-files/thanks.html"
document.getElementById('redirect').value = `https://${redirectSite}`