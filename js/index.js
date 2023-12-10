document.addEventListener('DOMContentLoaded', function() {
    const content = "Welcome\nTo\nDobong’s Jellyshop";
    const text = document.querySelector(".text");
    if (text) { 
        text.style.color = "#fff";
        text.textContent = "";
        let txtIdx = 0;
        function typing() {
            let txt = content[txtIdx++];
            if (txt == undefined) return;
            text.innerHTML += txt === "\n" ? "<br/>": txt;
            if (txtIdx > content.length) {
                txtIdx = 0;
            } else {
                setTimeout(typing, 100)
            }
        }
        typing();
    }
});




// gnb

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

document.getElementById("menuImage").addEventListener("click", function() {
    var image = document.getElementById("menuImage");
    if (image.src.includes("menu1.png")) {
        image.src = "./img/menu2.png"; // 클릭 시 변경할 이미지
    } else {
        image.src = "./img/menu1.png"; // 다시 클릭 시 원래 이미지
    }
});



// random text

var gnbItems = document.querySelectorAll("#gnb li");

var textMappings = {
    "Types of jelly": "젤리 종류가 궁금해",
    "When you eat": "이럴 때 드세요!",
    "A jelly recipe": "젤리 만드는 방법",
    "Chilling delivery": "오싹한 배송"
};

gnbItems.forEach(function(item) {
    var originalText = item.textContent; // 원래의 텍스트 저장
    var newText = textMappings[originalText] || originalText; // 원하는 텍스트 가져옴

    item.addEventListener("mouseover", function() {
        item.textContent = newText; // 원하는 텍스트로 변경
    });

    item.addEventListener("mouseout", function() {
        item.textContent = originalText; // 원래의 텍스트로 변경
    });
});

// error image,button

window.onload = function () {
    let errorPops = Array.from(document.querySelectorAll('.errorpop'));
    let delay = 0;
    errorPops.forEach((pop, index) => {
        setTimeout(() => { pop.style.opacity = '1'; }, delay);
        delay += 900 / (index + 2); // 각 errorpop 요소가 점점 빠르게 나타나도록 설정
    });
}


// svg random


// jelly image hover

function changeImage(element) {
    element.src = './img/bear2.png';
}

function restoreImage(element) {
element.src = './img/bear.png';
}

// draggable modal
// index

$( function() {
    $( ".errorpop" ).draggable();
});


// img ballon
window.addEventListener('DOMContentLoaded', function () {
    const jellies = document.querySelectorAll('.jellies > div');

    jellies.forEach(function (jelly) {
        const img = jelly.querySelector('img');
        const balloon = jelly.querySelector('.balloon');

        img.addEventListener('click', function () {
            balloon.style.display = 'block';
        });
    });
});

window.addEventListener('scroll', function () {
    const title = document.querySelector('#bigtitle');
    const scale = Math.max(0.5, 1 - window.scrollY / 1500);
    title.style.transform = `scale(${scale})`;
    title.style.transformOrigin = 'left';
});