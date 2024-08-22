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
    setInterval(function(){
            d.style.top= 9+'rem';
            count =-1;        
            console.log("reset "+count);
        },16000)
    setInterval(function(){
        count = ++count;
        console.log(count);
        if(count < 2)
         d.style.top = count*8.8+9+'rem';
        else
        d.style.top= count*8.7+9+'rem';
    },4001);
}