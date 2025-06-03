document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const score = parseInt(document.getElementById("marks").value, 10);

        let grade;
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80 && score <= 89) {
            grade = "B";
        } else if (score >= 70 && score <= 79) {
            grade = "C";
        } else if (score >= 60 && score <= 69) {
            grade = "D";
        } else {
            grade = "F";
        }

        // Adds row to table
        const table = document.getElementById("students");
        const row = table.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = score;
        row.insertCell(2).textContent = grade;
    });
});
