window.onload = function(){
var likebtn = document.querySelector('#green');
var dislikebtn = document.querySelector('#red');

likebtn.addEventListener('click', function () {
  if (dislikebtn.classList.contains('red')) { //Nếu user dislike và chuyển sang like thì bỏ đi màu đỏ và thêm màu xanh, ngược lại với like sang dislike ở dưới
    dislikebtn.classList.remove('red');
  }
  this.classList.toggle('green'); // Toggle sẽ thêm class vào 1 element khi không có và lấy đi khi không có
});

dislikebtn.addEventListener('click', function () {
  if (likebtn.classList.contains('green')) {
    likebtn.classList.remove('green');
  }
  this.classList.toggle('red');
});
}