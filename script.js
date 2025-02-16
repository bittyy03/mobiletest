window.addEventListener('load', function() {
    // 1-2초 후 로딩 화면 숨기기
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('content').style.display = 'block'; // 실제 콘텐츠 보이기
    }, 2000); // 2초 후에 로딩 화면을 숨기고 실제 콘텐츠를 보여줍니다.
});

// 알림 배너와 버튼을 찾습니다.
const notificationBanner = document.getElementById('notificationBanner');
const closeNotificationBtn = document.getElementById('closeNotificationBtn');

// 버튼 클릭 시 알림 배너를 숨깁니다.
closeNotificationBtn.addEventListener('click', function() {
    notificationBanner.style.display = "none";
});

// 우클릭 방지
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
