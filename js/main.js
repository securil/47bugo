// 페이지 로드가 완료되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 애니메이션 효과
    const optionCards = document.querySelectorAll('.option-card');
    
    // 카드가 화면에 나타날 때 애니메이션 효과
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    optionCards.forEach(card => {
        observer.observe(card);
    });
    
    // 현재 년도 업데이트
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // 썸네일 이미지 미리 로드
    const thumbnailImgs = document.querySelectorAll('.card-img img');
    thumbnailImgs.forEach(img => {
        const newImg = new Image();
        newImg.src = img.src;
    });
});
