window.onload = function(){
    const form = document.getElementById('loginInfo');
    const Username = document.getElementById('Username');
    const Password = document.getElementById('Password');
    form.addEventListener("submit",function(e){
        e.preventDefault();

        const UsernameValue = Username.value;
        const PasswordValue = Password.value;
        localStorage.setItem('Username',UsernameValue);
        localStorage.setItem('Password',PasswordValue);
        window.location.href="BTL_Game_Main.html";
    })
}