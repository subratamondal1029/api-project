
async function sendData(){
    const form = document.querySelector('form')
    const formData = new FormData(form)
    const mainFile = document.getElementById("mainFile").files[0]

    const fileData = await getBase(mainFile)
    formData.append('file', JSON.stringify(fileData))

    const AppScripturl = "https://script.google.com/macros/s/AKfycbzjwid7P1pxNpwymMzdKaIiJ0vgTQInLnMUEMKcAiWmMdC0HxeqY0hCCQWIl8FPO83LCg/exec"
    fetch(AppScripturl,{
        method: "POST",
        body: formData
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.Status === "success") {
            Swal.fire({
                title: "Success",
                text: "Your Details Has Been Send",
                icon: "success"
              })
              .then((result) => {
                if (result.isConfirmed) {
                    console.log('User clicked OK');
                    localStorage.removeItem('filledData')
                    window.location.reload()
                }
                })

        }else{
            console.error("Error: Can't Upload file " + data.error);
        }
    })
    .catch((err) => console.error(err))
}

function getBase(file){
    return new Promise((res, rej) =>{
        const reader = new FileReader()
        reader.onload = () => {
            const fileDetails = {
                base64: reader.result.split(',')[1],
                fileName: file.name,
                fileType: file.type
            }
            res(fileDetails)
        }
        reader.onerror = (err) => rej(err)
        reader.readAsDataURL(file)
    })
}