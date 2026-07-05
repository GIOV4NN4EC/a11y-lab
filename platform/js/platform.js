(function () {
  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      window.location.href = 'app/dashboard.html';
    });
  }

  var enrollForm = document.getElementById('enroll-form');
  if (enrollForm) {
    enrollForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Inscrição simulada com sucesso! (ambiente de testes)');
    });
  }
})();
