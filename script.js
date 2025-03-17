document.getElementById('contactSbt').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form); // Gather all form data
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('message', document.getElementById('message').value);
    document.getElementById('sbtBtn').disabled = true
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert("Message sent successfully!")
            } else {
                alert('Failed to send the message. Please try again.')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            document.getElementById('sbtBtn').disabled = false
            form.reset();
        });
});

document.getElementById('subsEmailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form); // Gather all form data
    formData.append('email', document.getElementById('email2').value);
    document.getElementById('sbscBtn').disabled = true
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert("Email Subscribed!")
            } else {
                alert('Failed to Subscribe. Please try again.')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            document.getElementById('sbscBtn').disabled = false
            form.reset();
        });
});
