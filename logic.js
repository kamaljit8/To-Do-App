const intbox = document.getElementById("input-box");
const  list = document.getElementById("main-list");

function kuchKar(){
if(intbox.value === ""){
    alert("Write something to Your Task List")
}else{
    let lis = document.createElement("li");
   lis.innerHTML = intbox.value;
   list.appendChild(lis);
   let span = document.createElement("span");
   span.innerHTML="\u00d7"
   lis.appendChild(span)
data();
}
intbox.value="";
}

list.addEventListener("click", function(e){
if(e.target.tagName ==="LI"){
    e.target.classList.toggle("hogaya");
    data();
}else if (e.target.tagName ==="SPAN" ){
    e.target.parentElement.remove()
    data();
}
})

function data(){
    localStorage.setItem("Data", list.innerHTML);
}

function dataStorage(){
    list.innerHTML = localStorage.getItem("Data") ;
}
dataStorage();