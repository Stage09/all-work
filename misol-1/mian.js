document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    let maxNum = Math.max(num1, num2, num3);

    document.getElementById("result").textContent = "Eng katta raqam: " + maxNum;
});