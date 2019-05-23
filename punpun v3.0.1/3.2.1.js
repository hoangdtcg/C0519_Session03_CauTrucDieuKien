function accept() {
    alert('ehe!');
}
function mustaccept(){
    let x =Math.random() * window.innerWidth;
    let y =Math.random() * window.innerHeight;
    document.getElementById("nobtn").style.left= x + 'px';
    document.getElementById("nobtn").style.top= y + 'px'
}