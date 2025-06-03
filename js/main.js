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
        const table = document.getElementById("display").getElementsByTagName('tbody')[0] || document.getElementById("display").appendChild(document.createElement('tbody'));
        const newRow = table.insertRow();
        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = score;
        newRow.insertCell(2).textContent = grade;

        // Clear input fields after adding
        document.getElementById("name").value = "";
        document.getElementById("marks").value = "";
    });
});