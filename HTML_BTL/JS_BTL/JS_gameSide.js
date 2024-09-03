function next() {

    // Thay đổi phần banner
    var carousel = document.querySelector(".carousel"); // Lấy phần tử carousel
    var listItem = document.querySelectorAll(".carousel >.item");
    var item0 = listItem[0];
    carousel.removeChild(listItem[0]); // Xóa item đầu tiên khỏi carousel
    carousel.appendChild(item0); // Thêm item đầu tiên vào cuối carousel

    // Thay đổi phần thumbnail
    var thumbnail = document.querySelector(".thumbnail")
    var listItemThumbnail = document.querySelectorAll(".thumbnail > div")
    var item0Thumbnail = listItemThumbnail[0];
    thumbnail.removeChild(listItemThumbnail[0]);
    thumbnail.appendChild(item0Thumbnail);
}

function previous() {
    // Thay đổi phần banner
    var carousel = document.querySelector(".carousel"); // Lấy phần tử carousel
    var listItem = document.querySelectorAll(".carousel >.item");
    var itemLast = listItem[listItem.length - 1];
    carousel.removeChild(itemLast); // Xóa item cuối khỏi carousel
    carousel.insertBefore(itemLast, listItem[0]); // Thêm item đầu tiên vào dầu carousel

    // Thay đổi phần thumbnail
    var thumbnail = document.querySelector(".thumbnail")
    var listItemThumbnail = document.querySelectorAll(".thumbnail > div")
    var itemLastThumbnail = listItemThumbnail[listItemThumbnail.length - 1];
    thumbnail.removeChild(itemLastThumbnail);
    thumbnail.insertBefore(itemLastThumbnail, listItemThumbnail[0]);
}

window.onload = function()
{
    //Điền vào tên user
    const Username = localStorage.getItem('Username');
    document.getElementById('Username').textContent  = Username;
    document.getElementById('Username2').textContent  = Username;
}