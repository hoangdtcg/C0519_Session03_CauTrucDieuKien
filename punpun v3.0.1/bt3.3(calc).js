function number(value){
    if (value==="reset"){
        document.getElementById("box").value="";
    }
    else{
        document.getElementById("box").value+=value;
    }
}
function summath() {
    let A = document.getElementById("box").value;
    B = eval(A);
    document.getElementById("box").value=B;
}