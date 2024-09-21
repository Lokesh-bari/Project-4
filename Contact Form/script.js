function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var alertBox = document.createElement('div');
    alertBox.className = 'alert alert-success';
    alertBox.role = 'alert';
    alertBox.innerText = 'Your message has been sent successfully!';
    var form = document.querySelector('form');
    form.appendChild(alertBox);
}

