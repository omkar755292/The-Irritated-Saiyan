// Defining the variable
let score = 0;
let cross = true;
const audio = new Audio('./music/music.mp3');
const audioclash = new Audio('./music/clash')
const audiogo = new Audio('./music/gameover.mp3');

// Defining a action of the player with with respect to keybord key
document.onkeydown = function (e) {
     if (e.keyCode == 38) {
          player = document.querySelector('.player');
          player.classList.add('animateplayer');
          setTimeout(() => {
               player.classList.remove('animateplayer');
          }, 700);
     }
     if (e.keyCode == 39) {
          player = document.querySelector('.player');
          playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
          player.style.left = playerX + 150 + "px";

     }
     if (e.keyCode == 37) {
          player = document.querySelector('.player');
          playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
          player.style.left = playerX - 150 + "px";
     }
}
// Defining the Enivorment rules 
setInterval(() => {
     audio.play();
     player = document.querySelector('.player');
     gameover = document.querySelector('.gameover');
     dino = document.querySelector('.dino');

     px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
     py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

     dinoX = Math.abs(px - dx);
     dinoY = Math.abs(py - dy);
     if (dinoX < 70 && dinoY < 54) {
          gameover.style.visibility = 'visible';
          dino.classList.remove('dinoanimate');
          audioclash.play();
          audiogo.play();
          audio.puase();

     }
     else if (dinoX < 145 && cross) {
          score += 1;
          updateScore(score);
          cross = false;
          setTimeout(() => {
               cross = true;
          }, 1000);
          setTimeout(() => {
               aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
               newDur = aniDur - 0.1;
               dino.style.animationDuration = newDur + 's';

          }, 1000);
     }
     function updateScore(score) {
          scoreCont.innerHTML = "Your Score: " + score;
     }


}, 10)