
// Kapama tuşu atama
let myList = document.getElementsByTagName('LI');
let i = 0;
for (; i< myList.length; i++) {
  let span = document.createElement('SPAN') ; 
  let txt = document.createTextNode("Sil");
  span.className = "close " ;
  span.appendChild(txt);
  myList[i].appendChild(span) ;
}
// Kapama tuşuna basınca silme
let close = document.getElementsByClassName("close") ;
for (i = 0 ; i < close.length; i++) {
  close[i].onclick =function() {
    let div = this.parentElement ; 
    div.style.display ="none" ;
  }
}
// Listenin üstünü çizme 

let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
  if(ev.target.tagName === 'LI') {
    ev.target.classList.toggle('clicked');
  }
}, false) ;
localStorage.setItem('myNote', JSON.stringify(myUL));
  // ekleme tuşu
  function newElement() {
    let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode (inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Hata! Lütfen Notunuzu Giriniz") ;
  } else {
    document.getElementById("myUL").appendChild(li);
    
    $(document).ready(function(){
      $("#button-addon2").click(function(){
        $('.toast').toast('show');
      });
  })};

    document.getElementById("myInput").value = "" ;

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("Sil");
    span.className = "close "
    li.className = "list-group-item grabbable grabbable:active"
    span.append(txt);
    li.append(span);

    for(i=0 ; i < close.length ; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display= "none" ;
      }
    }
  }
const myNote = localStorage.getItem('myNote')
console.log(myN)