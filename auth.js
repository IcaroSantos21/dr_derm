// Login form handler
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login
    if (email && password) {
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
    }
});

// Register form handler
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    if (password !== confirmPassword) {
        alert('Senhas não coincidem!');
        return;
    }
    
    if (!terms) {
        alert('Aceite os termos de uso!');
        return;
    }
    
    // Simulate registration
    localStorage.setItem('userRegistered', 'true');
    alert('Conta criada com sucesso!');
    window.location.href = 'login.html';
});

// Forgot password
function showForgotPassword() {
    document.getElementById('forgotModal').style.display = 'block';
}

function sendResetEmail() {
    const email = document.getElementById('forgotEmail').value;
    if (email) {
        alert('E-mail de recuperação enviado!');
        document.getElementById('forgotModal').style.display = 'none';
    }
}

// Close modal
document.querySelector('.close')?.addEventListener('click', () => {
    document.getElementById('forgotModal').style.display = 'none';
});