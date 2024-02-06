document.addEventListener('DOMContentLoaded', function() {
    const holes = Array.from(document.getElementsByClassName('hole'));
    const scoreBoard = document.getElementById('score');
    const moleImage = 'mole.gif';
    const moleSound = new Audio('mole_sound.mp3');
    let score = 0;
    let misses = 0;
    let isNewGame = true;
  
    function getHole(index) {
      return document.getElementById(`hole${index}`);
    }
  
    function handleMoleClick() {
      if (!isNewGame && this.classList.contains('hole_has-mole')) {
        score++;
        moleSound.play();
        this.classList.remove('hole_has-mole');
        scoreBoard.textContent = score;
        if (score >= 10) {
          alert('Congratulations! You won!');
          resetGame();
        } else {
          moveMole();
        }
      } else {
        isNewGame = false;
        misses++;
        alert('Missed!');
        if (misses >= 5) {
          alert('Game over!');
          resetGame();
        }
      }
    }
  
    function resetGame() {
      score = 0;
      misses = 0;
      scoreBoard.textContent = score;
      holes.forEach(function(hole) {
        hole.classList.remove('hole_has-mole');
        hole.classList.remove('hole_has-mole');
      });
      moveMole();
    }
  
    function moveMole() {
      const randomHoleIndex = Math.floor(Math.random() * holes.length);
      const randomHole = getHole(randomHoleIndex + 1);
      randomHole.classList.add('hole_has-mole');
    }
  
    holes.forEach(function(hole, index) {
      const mole = document.createElement('img');
      mole.src = moleImage;
      mole.className = 'mole';
      hole.appendChild(mole);
  
      hole.addEventListener('click', handleMoleClick);
    });
  
    resetGame();
  });