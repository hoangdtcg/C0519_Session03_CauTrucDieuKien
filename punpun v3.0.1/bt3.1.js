function bmi() {
    let A = document.getElementById("height").value**2;
    let B = parseInt(document.getElementById("weight").value);
    let bmi = B/A;
    console.log(A);
    console.log(bmi);
    console.log(B);
    if (bmi < 18)
        document.getElementById("Result").innerHTML = "Underweight";
    else if (bmi < 25.0)
            document.getElementById("Result").innerHTML = "Normal";
        else if (bmi < 30.0)
            document.getElementById("Result").innerHTML = "Overweight";
        else if (30 < bmi < 300)
            document.getElementById("Result").innerHTML = "Obese";
    }
