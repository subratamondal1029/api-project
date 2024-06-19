const form = document.querySelector('form')
const mainContainer = document.querySelector('.main')
let datas;

form.addEventListener('submit', async(e) =>{
  e.preventDefault()
  const name = document.querySelector('input[name="name').value
  mainContainer.innerHTML = `<img src="https://www.ken2win.com/assets/images/Loader.gif">`
   datas = await getData(name.toLowerCase())

  if (datas) {
    mainContainer.innerHTML = ""
    mainContainer.style.flexDirection = "column"
    datas.data.forEach((data, i) => printData(datas.heads, data))
  }


})

function printData(heading, datas){
  let applydate = new Date(datas[0]).toLocaleDateString()
  let DOB = new Date(datas[8]).toLocaleDateString()

  
    mainContainer.innerHTML += `<table>
          <thead>
              <tr>
              <th>${heading[0]}</th>
              <th>${heading[2]}</th>
              <th>${heading[3]}</th>
              <th>${heading[4]}</th>
              <th>${heading[8]}</th>
              <th>${heading[9]}</th>
              <th>${heading[16]}</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td>${applydate}</td>
              <td>${datas[2]}</td>
              <td>${datas[3]}</td>
              <td>${datas[4]}</td>
              <td>${DOB}</td>
              <td>${datas[9]}</td>
              <td>${datas[16]}</td>
              </tr>
              </tbody>
            </table>`
  

  const tables = document.querySelectorAll('table')
  tables.forEach((table, i)=>{
    table.onclick = () => printStudentDetails(i)
  })
}

function printStudentDetails(index){
 const data = datas.data[index];
 const heads = datas.heads

  mainContainer.innerHTML = ""
  mainContainer.style.flexDirection = "row"

  const headingsContainer = createElm('div', "", ['id', "headings"], mainContainer)
  const contentsCon = createElm('div', "", ['id', "contents"], mainContainer)


  for (let i = 1; i < heads.length; i++) {
    let content = data[i];
    const head = heads[i]
    if (i === 8) {
      content = new Date(content).toLocaleDateString()
    }else if(i === data.length-1) content = `<a href="${content}" target="_blank">Click To See Docs</a>`

    createElm("div", head, ["class", "data"], headingsContainer)
    createElm('div', content, ["class", "data"], contentsCon)
}
}

function createElm(type, content, Atri,  parent){
  const elm = document.createElement(type)
  elm.innerHTML = content
  if (Atri) {
    elm.setAttribute(Atri[0], Atri[1])
  }
  parent.appendChild(elm)
  return elm
}