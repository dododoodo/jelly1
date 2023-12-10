$(function () {
    $('.btn_menu').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('#gnb').css('height', '87vh'); // 햄버거 바를 클릭하면 gnb의 높이를 자동으로 조절
        } else {
            $('#gnb').css('height', '0'); // 햄버거 바를 클릭하면 gnb의 높이를 0으로 설정하여 숨김
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menuImage").addEventListener("click", function() {
        var image = document.getElementById("menuImage");
        if (image.src.includes("menu1.png")) {
            image.src = "./img/menu2.png"; // 클릭 시 변경할 이미지
        } else {
            image.src = "./img/menu1.png"; // 다시 클릭 시 원래 이미지
        }
    });
});
