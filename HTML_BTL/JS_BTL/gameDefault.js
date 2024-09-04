window.onload = function () {

    // Lấy dữ liệu từ localStorage
    var rel = localStorage.getItem("gameData");

    if (rel) {
        // Lấy dữ liệu game từ localStorage dựa trên giá trị của rel
        var gameData = JSON.parse(localStorage.getItem(rel));
        console.log(gameData);
    } else {
        console.log('Không có dữ liệu với khóa "gameData" trong localStorage.');
    }

    var tenGame = gameData[0];
    var imgName = gameData[1];
    var price = gameData[2];
    var trailer = gameData[3];

    // Thay đổi nội dung trang web
    var tenGameMoi = document.querySelector(".trailer > h1");
    var priceMoi = document.querySelector(".gameInfor > div > span");
    var trailerMoi = document.querySelector(".trailerVideo >.bannerList > iframe");
    
    tenGameMoi.innerText = tenGame;
    priceMoi.innerText = `đ${price}`;
    trailerMoi.setAttribute("src",trailer);

    // Đổi ảnh lớn bằng ảnh thumbnail
    var imgs = document.querySelectorAll(".trailer >.thumbnail > div");
    var bannerList = document.querySelector(".gameDefault>.trailer>.trailerVideo>.bannerList");
    var temp
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function () {
            temp = i;
            donVi = (i) * 100;
            bannerList.style.transform = `translateX(-${donVi}%)`
        }
    }


    // Hiện popup
    var popUp = document.querySelector(".gameDefault > .popUp");
    var popUpImg = popUp.querySelector("div > img");
    var overlay = document.querySelector(".overlay");

    var turnOnButton
    var trailerScreen = document.querySelector(".trailerVideo");
    trailerScreen.onclick = function () {
        var trailerScreenImg = trailerScreen.querySelector(`.bannerList>.img:nth-child(${temp + 1})>img`).src;
        popUpImg.src = trailerScreenImg
        popUp.classList.add("show");
        overlay.classList.add("show");
    }

    // tắt popup
    var closeButton = document.querySelector(".popUp > button");
    closeButton.onclick = function () {
        popUp.classList.remove("show");
        overlay.classList.remove("show");
    }
}