function checkEmailsMatch() {
    const email = document.getElementById("emailAddress").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Error: The email addresses do not match.");
    }
}