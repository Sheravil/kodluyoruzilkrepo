// Form SUBMIT :

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
    console.log("islem gerceklesti") 
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
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
         

const ALERT = (title , className=warning ) => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> Hatalı Giriş Yaptınız Tekrar Deneyiniz.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`


function formHandler(event) {
     event.preventDefault()
     const USER_NAME = document.querySelector('#username')
     const SCORE = document.querySelector('#score')

     if (USER_NAME.value && SCORE.value) {
         addItem(USER_NAME.value = "" ,
                 SCORE.value = "")
    }  else {
        alertDOM.innerHTML = ALERT (
            "Hata!",
            "danger"
        )
    } 
} 
let userListDOM = document.querySelector('#userList')


const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge badge-primary badge-pill">${score}</span> `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        userListDOM.append(liDOM)
    }
    
/*
function addItem(userName, score) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} ${score}`
    userListDOM.append(liDOM)
}
*/