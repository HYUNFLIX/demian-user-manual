document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 네비게이션 바 현재 섹션 하이라이트
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('h2[id]');
    
    function setActiveNavItem() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }
    
    // 스크롤 이벤트 연결
    window.addEventListener('scroll', function() {
        setActiveNavItem();
        
        // 스크롤 위로 버튼 표시/숨김
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        }
    });
    
    // 네비게이션 바 링크 클릭시 스무스 스크롤
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
                
                // 모바일 메뉴가 열려있으면 닫기
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // 배터리 애니메이션
    setTimeout(function() {
        const batteryLevel = document.querySelector('.battery-level');
        if (batteryLevel) {
            batteryLevel.style.width = '4%';
        }
    }, 500);
    
    // 시간대별 하이라이트 효과
    const highCells = document.querySelectorAll('.time-table .high');
    highCells.forEach(cell => {
        cell.style.transition = 'background-color 0.5s';
        setInterval(() => {
            cell.style.backgroundColor = cell.style.backgroundColor === 'rgb(232, 245, 233)' ? '#C8E6C9' : '#E8F5E9';
        }, 2000);
    });
    
    // 스크롤 위로 버튼 
    const scrollTopButton = document.createElement('div');
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.innerHTML = '&uarr;';
    document.body.appendChild(scrollTopButton);
    
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
