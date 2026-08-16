const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');
const closeMenu = document.getElementById('closeMenu');

// فتح القائمة
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();   // يمنع الحدث من الوصول لـ document ويسكر القائمة فورًا
    navigation.classList.add('active');
});

// إغلاق القائمة عبر زر X
closeMenu.addEventListener('click', () => {
    navigation.classList.remove('active');
});

// إغلاق القائمة عند الضغط على أي رابط داخلها
const navLinks = navigation.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
    });
});

// إغلاق القائمة عند الضغط في أي مكان خارجها
document.addEventListener('click', (e) => {
    // إذا الضغطة صارت خارج القائمة => أغلقها
    if (!navigation.contains(e.target)) {
        navigation.classList.remove('active');
    }
});