const links = document.querySelectorAll('.nav a');
links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('activo');
  });
});
