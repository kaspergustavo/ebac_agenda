document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const contactsBody = document.getElementById("contactsBody");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById("contactName");
        const phoneInput = document.getElementById("contactPhone");
        const emailInput = document.getElementById("contactEmail");
        
        const name = nameInput.value;
        const phone = phoneInput.value;
        const email = emailInput.value;

        if (name && phone && email) {
            addContact(name, phone, email);
            nameInput.value = "";
            phoneInput.value = "";
            emailInput.value = "";
        } else {
            alert("Preencha todos os campos!");
        }
    });

    function addContact(name, phone, email) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        `;
        contactsBody.appendChild(newRow);
    }
});
