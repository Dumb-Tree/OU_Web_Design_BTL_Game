window.onload = function () {
    const Username = localStorage.getItem('Username')
    document.getElementById('Username').textContent  = Username;
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
            d.style.top= 8.5+'rem';
            count =0;        
        },15997)
    setInterval(function(){// sau mỗi 4 giây, thanh trượt di chuyển xuống
        count = ++count;
        console.log(count);
        if (count < 2)
         d.style.top = count*8.9+8.4+'rem';
        else
        d.style.top = count*8.9+8.4+'rem';
    },3999);
    /*JS cho game list*/
    let slideIndex = [1,1];
    let slideId = ["gameSlides1", "gameSlides2"]
    showSlides(1, 0);
    showSlides(1, 1);
    
    function plusSlides(n, no) {
      showSlides(slideIndex[no] += n, no);
    }
    
    function showSlides(n, no) {
      let i;
      let x = document.getElementsByClassName(slideId[no]);
      if (n > x.length) {slideIndex[no] = 1}    
      if (n < 1) {slideIndex[no] = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex[no]-1].style.display = "block";  
    }
                //submenu
                document.addEventListener("DOMContentLoaded", e => {
                let menu = document.querySelector(".playermenu");
                let optionIcon = document.querySelector(".option");
                optionIcon.addEventListener("click", e=>{
                    menu.classList.toggle("show");
                });
            });
}