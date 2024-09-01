window.onload= function(){
  const cells = Array.from(document.querySelectorAll(".cell"));
  const enemyarea = cells.slice(0,40); // Định nghĩa vùng của chướng ngại vật
  const playercell = cells.slice(40);
  const scoreDisplay = document.querySelector(".score");
  const startscreen = document.querySelector(".startScreen");
  let dropCount, speed, score; //định nghĩa biến
  reset();
  document.addEventListener("keydown", e => {      // nhận phím bấm
      if(!dropCount){
        startGame();
      }
    const player = document.querySelector(".player");

    if(e.key === "ArrowRight" && playercell.includes(player.parentElement.nextElementSibling)|| e.key === "d" && playercell.includes(player.parentElement.nextElementSibling)){ //Khi người chơi bấm phím d hoặc mũi tên phải và nằm trong vị trí cho phép đi
      player.parentElement.nextElementSibling.appendChild(player); // Tìm cell chứa người chơi => chuyển qua cell tiếp theo => thêm / di chuyển người dùng vào vị trí đó
    }
    else if(e.key === "ArrowLeft" && playercell.includes(player.parentElement.previousElementSibling) || e.key === "a" && playercell.includes(player.parentElement.previousElementSibling)){ //Khi người chơi bấm phím d hoặc mũi tên phải
      player.parentElement.previousElementSibling.appendChild(player);
    }
  });
  // document.addEventListener("DOMContentLoaded", e=>{
  //   const moveLeft = document.querySelector(".moveLeft");
  //   const moveRight = document.querySelector(".moveRight");
  //   const player = document.querySelector(".player");
  //   moveLeft.addEventListener("click", e => {
  //     if(playercell.includes(player.parentElement.previousElementSibling)){
  //       player.parentElement.previousElementSibling.appendChild(player);
  //     }
  //   });
  //   moveRight.addEventListener("click", e => {
  //     if(playercell.includes(player.parentElement.nextElementSibling)){
  //       player.parentElement.nextElementSibling.appendChild(player);
  //     }
  //   });  
  // });
  function reset(){ //Reset lại game
    dropCount = 0;
    speed = 1000;
    score = 0;
    scoreDisplay.innerHTML = "0";
    startscreen.classList.toggle("show");

    cells.forEach(cell => cell.innerHTML = "");
    playercell[0].innerHTML = '<div class="player"></div>';
  }
  function startGame(){
    reset();
    enemymove()
    console.log("Starting new game!");
  }
  function enemymove(){
    let collide = false;
    for(let i = enemyarea.length-1; i >= 0; i--){ //di chuyển đối thủ xuống
      const cell = enemyarea[i];
      const nextCell = cells[i+4];
      const enemy = cell.children[0];
      if(!enemy){ //nếu ko có đối thủ thì không cần di chuyển
        continue;
      }
      nextCell.appendChild(enemy);
      //Đụng độ
      if(playercell.includes(nextCell)){
        if(nextCell.querySelector(".player")){
          collide = true;
        } else{
          score++;
          speed = Math.max(100, speed -25); //mỗi lần tăng điểm thì đối thủ sẽ nhanh hơn cho đến khi tốc độ đạt 100 mili giây
          scoreDisplay.innerHTML = score;
          enemy.remove();
        }
      }
    } 

    // chỉ thả đối thủ mỗi lần kia
    if(dropCount % 2 === 0){
      const position = Math.floor(Math.random()*4); // trả về những số từ 1-4, là số index của những vị trí đối thủ có thể rơi từ
      
      enemyarea[position].innerHTML='<div class="enemy"></div>';
    }

    if(collide){
      alert('Your score: ' + score + ". Close this window to play again!");
      reset();
    }
    else{
      dropCount++;
      setTimeout(enemymove, speed);
    }
  }
}