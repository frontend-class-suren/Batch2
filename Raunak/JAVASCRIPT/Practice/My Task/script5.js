document.getElementById('menu-toggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('open');
    content.classList.toggle('sidebar-open');
  });
  