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


    var d = document.getElementById('Denbar');
    var count=0;        
    //Set
    setInterval(function(){ // sau mỗi 16 giây, thanh trượt về vị trí ban đầu 
            d.style.top= 9.1+'rem';
            count =0;        
            console.log("reset "+count);
        },15961)
    setInterval(function(){// sau mỗi 4 giây, thanh trượt di chuyển xuống
        count = ++count;
        console.log(count);
        if (count < 2)
         d.style.top = count*8.92+8.9+'rem';
        else
        d.style.top = count*8.79+8.9+'rem';
    },3990);
}