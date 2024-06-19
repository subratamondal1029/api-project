function getData(para){
    const getPass = prompt("Enter Password")
    const url = `https://script.google.com/macros/s/AKfycbwX8_oQsRX3OCsHk04oyvJ6ikyt6UcrdqO2JXpqMb-BWO-N7Eqkad8STZBCGdhyWwnV/exec?para=${encodeURIComponent(para)}&pass=${encodeURIComponent(getPass)}`;

   return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        if (typeof data.data == "object") {
           if(data.data.length){
            return data
           }else fireSwal("Enter A Valid Name")
        }else fireSwal("Enter a Valid Password")
    })
    .catch((err) => fireSwal("Something Problem, try again"))
}


function fireSwal(text){
    Swal.fire({
        title: 'Error!',
        text: text,
        icon: 'error',
        confirmButtonText: 'Retry'
      })
      .then(() => window.location.reload())

      return false
}