function dayMonth() {
    let a = parseInt(document.getElementById("day").value);
    let b ='';
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            b = "Thang " + a + " co 31 ngay";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            b = "Thang " + a + " co 30 ngay";
            break;
        case 2:
            b = "Thang " + a + " co 28 hoac 29 ngay";
            break;
    }
    let output = b.fontcolor("red");
    document.getElementById("day1").innerHTML = output;
}