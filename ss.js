document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const page = button.textContent.trim().toLowerCase();
      if (page === 'home') {
        window.location.href = 'intro.html';
      } else if (page === 'careers') {
        window.location.href = 'careers.html';
      } else if (page === 'projects') {
        window.location.href = 'projects.html';
      } else if (page === 'contact') {
        window.location.href = 'contact.html';
      }
    });
  });
});
