window.onload = function () {
    var bannerlist = document.querySelector('.bannerlist')
    var img = document.querySelectorAll('.bannerlist img')
    var slAnh = img.length
    img = img[0].offsetWidth;
    var current = 0
    setInterval(function () {
        current = current + img * -1;
        if (current <= -(img * slAnh)) {
            current = 0;
        }
        bannerlist.style.transform = `translateX(${current}px)`
    }, 4000)
}