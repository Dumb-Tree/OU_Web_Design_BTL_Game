window.onload = function(){
    const Username = localStorage.getItem('Username')
    const Password = localStorage.getItem('Password')
    //dùng textcontent để hiện mọi nội dung chữ bao gồm cả chữ ẩn
    document.getElementById('Username').textContent  = Username;
    document.getElementById('Password').textContent = Password;
}