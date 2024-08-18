document.getElementById('create-account').addEventListener('click', function() {
    document.getElementById('login-form').parentElement.style.display = 'none';
    document.getElementById('create-account-container').style.display = 'block';
});

document.getElementById('back-to-login').addEventListener('click', function() {
    document.getElementById('create-account-container').style.display = 'none';
    document.getElementById('login-form').parentElement.style.display = 'block';
});

document.getElementById('google-signin').addEventListener('click', function() {
    alert('Google Sign-In clicked (Integration with Google API required)');
});

// Add form submission logic here for login and account creation
