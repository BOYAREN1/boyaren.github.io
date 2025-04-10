document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.add('active');
    });
    
    closeMenu.addEventListener('click', function() {
        nav.classList.remove('active');
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Фильтрация ивентов (заглушка)
    const filterBtn = document.querySelector('.filter-controls .signup-btn');
    filterBtn.addEventListener('click', function() {
        alert('Фильтры применены! (это демонстрация)');
    });
    
    // Адаптация карточек при изменении размера окна
    function adjustEventCards() {
        const calendar = document.querySelector('.calendar');
        if (window.innerWidth < 768) {
            calendar.style.gridTemplateColumns = '1fr';
        } else if (window.innerWidth < 1024) {
            calendar.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else {
            calendar.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
        }
    }
    
    window.addEventListener('resize', adjustEventCards);
    adjustEventCards();
});