// تأكد من تنفيذ الكود بعد تحميل DOM
document.addEventListener('DOMContentLoaded', function() {
    // عناصر التحكم
    const menuButton = document.querySelector('.mobile-trigger');
    const mobileMenu = document.querySelector('.mobile-overlay');
    const closeButton = document.querySelector('.mobile-close');

    // فتح القائمة
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.add('active');
        });
    }

    // إغلاق القائمة
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    }

    // إغلاق بالنقر خارج القائمة
    if (mobileMenu) {
        window.addEventListener('click', function (e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    }

    // إغلاق القائمة عند الضغط على أحد الروابط في الموبايل
    const menuLinks = document.querySelectorAll('.mobile-overlay a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                mobileMenu.classList.remove('active');
            }
        });
    });
});
//Slide up animation for paragraph
document.querySelectorAll('.box .info a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const box = e.target.closest('.box');
        const paragraph = box.querySelector('p');
        paragraph.classList.remove('animate-slide');
        void paragraph.offsetWidth;
        paragraph.classList.add('animate-slide');
    });
});
//
document.addEventListener('DOMContentLoaded', () => 
{
    const elements = document.querySelectorAll('.box');
    const observer = new IntersectionObserver
    ((entries, observer) => 
        {
            entries.forEach(entry => {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, 
        { threshold: 0.1 }
    );
    elements.forEach(element => 
        {
            observer.observe(element);
        }
    );
}
);
/////////////
const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // إضافة كلاس show (للشفافية أو الحركات العامة)
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden');

      // تفعيل الأنيميشنات من data-animation
      const animationClasses = entry.target.dataset.animation;
      if (animationClasses) {
        entry.target.classList.add(...animationClasses.split(' '));
      }

      observer.unobserve(entry.target); // ما نعيد المشهد
    }
  });
}, {
  threshold: 0.2
});

boxes.forEach(box => observer.observe(box));


