function check() {
    let a = parseInt(document.getElementById("year").value);
    let b = '';
    if (a % 4 === 0) {
        if (a % 100 === 0) {
            if (a % 400 === 0) {
                b = a + " is a leap year";
            } else {
                b = a + " is NOT a leap year";
            }
        } else {
            b = a + " is a leap year";
        }
    } else {
        b = a + " is NOT a leap year";
    }
    let output = b.fontcolor("red");
    document.getElementById("year1").innerHTML = output;
}