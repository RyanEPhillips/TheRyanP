let total = 0;

function addOne(button) {
    if (button.classList.contains("seen")) {
        // Uncheck
        total--;
        button.classList.remove("seen");
        button.innerText = "Seen it";
    } else {
        // Check
        total++;
        button.classList.add("seen");
        button.innerText = "Unseen";
    }

    document.getElementById("total").innerHTML = total;
}