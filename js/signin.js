// for password eye icon
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const inputType = passwordInput.type;
    passwordInput.type = inputType === 'password' ? 'text' : 'password';
}
// for confirm password eye icon
function toggleConfirmPasswordVisibility() {
    const passwordInput = document.getElementById('confirmPasswordInput');
    const inputType = passwordInput.type;
    passwordInput.type = inputType === 'password' ? 'text' : 'password';
}

// for convert phone
 function convertPhone() {
    const emailContent = document.getElementById('emailContent').style.display = 'none';
    const phoneContent = document.getElementById('phoneContent').style.display = 'block';
    const numText = document.getElementById('email-text').style.display = 'none';
    const phoneText = document.getElementById('phone-text').style.display = 'block';
 }
//  for covert email
function convertEmail() {
    const emailContent = document.getElementById('emailContent').style.display = 'block';
    const phoneContent = document.getElementById('phoneContent').style.display = 'none';
    const numText = document.getElementById('email-text').style.display = 'block';
    const phoneText = document.getElementById('phone-text').style.display = 'none';
 }