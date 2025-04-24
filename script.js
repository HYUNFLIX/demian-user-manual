document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 스크롤시 네비게이션 바 스타일 변경
    function updateNavbar() {
        const navbar = document.querySelector('.nav-container');
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // 네비게이션 바 현재 섹션 하이라이트
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    function setActiveNavItem() {
        let currentSection = '';
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (currentSection && item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }
    
    // 스크롤 이벤트 연결
    window.addEventListener('scroll', function() {
        updateNavbar();
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
    
    // 초기 상태 설정
    updateNavbar();
    setActiveNavItem();
    
    // 네비게이션 바 링크 클릭시 스무스 스크롤
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
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
    
    // 스크롤 위로 버튼 
    const scrollTopButton = document.createElement('div');
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.innerHTML = '↑';
    document.body.appendChild(scrollTopButton);
    
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 페이지 로드 애니메이션
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView();
});
