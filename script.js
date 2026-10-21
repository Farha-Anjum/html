
function submitForm() {

    // Get values from the input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Check whether all fields are filled
    if (name && email && phone) {

        // Display the confirmation message
        document.getElementById('confirmation').innerText =
            'Thank you, ' + name +
            '! You have registered successfully.';

        // Display registration details in the console
        console.log('Registration Details:', {
            Name: name,
            Email: email,
            Phone: phone
        });

    } else {

        // Display an alert if any field is empty
        alert('Please fill all the fields.');

    }
}
