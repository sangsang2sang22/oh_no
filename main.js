document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (username === '문상섭' && password === '3606') {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'start.html';
      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
      }
    });
  }
});