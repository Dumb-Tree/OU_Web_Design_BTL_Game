window.onload = function(){
    const form = document.getElementById('loginInfo'); //Gắn giá trị được nhập vào của người đung
    const Username = document.getElementById('Username');
    const Password = document.getElementById('Password');
    form.addEventListener("submit",function(e){ //addEventListener() giúp quản lý các sự kiện mà sẽ được gọi mỗi khi sự kiện cho trước được gửi đến mục tiêu
        e.preventDefault(); //preventdefault() sẽ hủy sự kiện nếu nó có thể hủy được để ngăn cản trang tải lại

        const UsernameValue = Username.value;
        const PasswordValue = Password.value;
        localStorage.setItem('Username',UsernameValue); // Lưu dữ liệu vào Localstorage | Localstorage sẽ lưu thông tin được nhập vào và sẽ không bao giờ hết hạn, phù hợp cho lưu giữ lâu dài. Trong khi đó sessionstorage sẽ bị xóa đi khi trang bị tắt
        localStorage.setItem('Password',PasswordValue);
        window.location.href="BTL_Game_Main.html";
    })
}