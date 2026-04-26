
let isMonthly = true;

function togglePrice() {
    let plan = document.getElementById("plan");
    let price = document.getElementById("price");

    if (isMonthly) {
        plan.innerText = "Yearly Plan"
        price.innerText = "1000"
        isMonthly = false;
    } else {
        plan.innerText = "Monthly Plan"
        price.innerText = "100"
        isMonthly = true;
    }
}