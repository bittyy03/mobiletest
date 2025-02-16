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
