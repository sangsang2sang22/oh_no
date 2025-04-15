document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      // ✅ 여기에 실제 사용자 검증 로직을 넣을 수 있음
      if (username === '문상섭' && password === '3606') {
        sessionStorage.setItem('loggedIn', 'true'); // 간단한 세션 관리
        window.location.href = 'start.html';
      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
      }
    });
  }

  // ✅ start.html에 접속 시 로그인 체크
  if (window.location.pathname.includes('start.html')) {
    const isLoggedIn = sessionStorage.getItem('loggedIn');

    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      window.location.href = 'index.html';
    }
  }
});