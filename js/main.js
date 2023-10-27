let inputField = document.getElementById("inputField")
let Button = document.getElementById("button")
let loading = document.getElementById("loading")
let skchase = document.getElementById("skchase")
let h1= document.getElementById("h1")

Button.addEventListener("click" , function(e){
    let x = `https://codeforces.com/profile/${inputField.value}`
    if(inputField.value == ""){
        alert("add handle")
    }else{
    Button.href = x;
    }

 
})

setTimeout(function(){
    skchase.style.display="none"

} , 5000)

setTimeout(function(){
h1.style.display="flex"

} , 5001)

setTimeout(function(){
    loading.style.display="none"
    } , 7000)




