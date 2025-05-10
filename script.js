function display(a){
    let data=document.getElementById("disp")
    if(data.innerHTML == '0'){
        data.innerHTML = a
}else{
    data.innerHTML=data.innerHTML+a
}
    disp.innerHTML +=a
}
function u_clear(){
    let disp=document.getElementById("disp")
    disp.innerHTML=0
}
function calculate(){
    let data = document.getElementById("disp")
    let expression = data.innerHTML
    //console.lo(expression)
    let res = eval(expression)
    console.log(res)
    data.innerHTML = res
}
