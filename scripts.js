let total = 0;

function addOne(button) {
    total += 1;
    document.getElementById("total").innerHTML = total;
    button.disabled = true;

}