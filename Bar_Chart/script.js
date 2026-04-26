// SAME DATA
let labels = ["Math", "Science", "English"];
let data = [80, 70, 90];

// BAR CHART
let ctx1 = document.getElementById("barChart");

new Chart(ctx1, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [{
            label: "Marks",
            data: data
        }]
    }
});

// PIE CHART
let ctx2 = document.getElementById("pieChart");

new Chart(ctx2, {
    type: "pie",
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: ["red", "blue", "green"]
        }]
    }
});

// DOUGHNUT CHART
let ctx3 = document.getElementById("doughnutChart");

new Chart(ctx3, {
    type: "doughnut",
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: ["orange", "purple", "green"]
        }]
    }
});