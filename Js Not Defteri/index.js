// Form SUBMIT :

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
    console.log("islem gerceklesti") 
}


let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

const alertDOM = document.querySelector("#alert")

/*
const alertTDOM = document.querySelector("#alertT")

const alertT = (title , className=warning ) => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> Başarılı giriş yaptınız iyi eğlenceler.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

alertTDOM.innerHTML = alertT (
            "Doğru'",
            "success"
         )
*/
         

const ALERT = (title , text , className=warning ) => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${text}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`
// const CLOSE = () => `<button type="button" class="close" aria-label="Close"> 
// <span aria-hidden="true">&times;</span>
// </button>`


function formHandler(event) {
     event.preventDefault()
     const USER_NAME = document.querySelector('#username')
     

     if (USER_NAME.value) {
         addItem(USER_NAME.value , )
         USER_NAME.value = ""
         alertDOM.innerHTML = ALERT (
          "Başarılı" ,
          "Notunuz Başarıyla Eklendi", 
          "success" 
          )
          closeItem()
    }  else {
        alertDOM.innerHTML = ALERT (
            "Hata!",
            "Lütfen Notunuzu Giriniz",
            "danger"
        )
    } 
} 
let userListDOM = document.querySelector('#userList')


const addItem = (userName) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = (` ${userName} <div>
    <button type="button" id ='delete' class="close" aria-label="Close"> 
<span aria-hidden="true">&times;</span>
</button> </div>
    `) 
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        userListDOM.append(liDOM)
    }
const closeItem = () => {
  
  let closeDOM = document.getElementById('#delete')
  closeDOM.addEventListener('click', 
  function () {
    userListDOM.removeChild(this.firstElementChild)

    
  }
  )
  
  // let closeDOM = document.querySelector('close')
  // console.log(closeDOM[1])
}

/*
function addItem(userName, score) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} ${score}`
    userListDOM.append(liDOM)
}
*/