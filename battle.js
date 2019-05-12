let battleOn = false;
function battle(catPower, enemyPower) {
  battleOn = true;
  catPower *= Math.random() * 1.5 + 0.5;
  enemyPower *= Math.random() * 1.5 + 0.5;
  if (potatoLaunchers) {
    catPower+=5*soldierCats;
  }
  if (taterTotBombs) {
    catPower+=2*soldierCats;
  }
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  const blockWidth = 10;

  function rand(min, max) {
    return (Math.random() * (max - min + 1)) + min;
  }
  ctx.font = "20px Monospace";
  ctx.textAlign = "center";
  let frontLine = 10;
  let currBattle = setInterval(() => {
    if (strats > 0 && (taterBombs ? Math.random() < 0.2 : Math.random() < 0.1)) {
      addMessage("Strategum used. Enemy falls back.");
      strats-=1;
      frontLine+=randInt(1, (flankingUnlocked) ? 5 : 7.5);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < canvas.width / blockWidth; i++) {
      for (let j = 0; j < canvas.height / blockWidth; j++) {
        if (i < frontLine) ctx.fillStyle = "White";
        else ctx.fillStyle = "Black";
        ctx.fillRect(i * blockWidth, j * blockWidth, blockWidth, blockWidth);
      }
    }
    ctx.fillStyle = "Black";
    ctx.fillText("You", 30, 60);
    ctx.fillStyle = "White";
    ctx.fillText("Enemy", 160, 60);
    let chosenNum = 0;
    let probYou = catPower / ((catPower + enemyPower) + rand(-0.3, 0.3));
    if (Math.random() <= probYou) {
      chosenNum = 1;
    } else {
      chosenNum = -1;
    }
    frontLine += chosenNum;
    if (frontLine > 20) {
      addMessage("Victory!", "construct", "success");
      let catsLiberated = randInt(1, 5);
      catsLiberated*=battleIntensity;
      addMessage(`You liberated ${format(Math.floor(catsLiberated))} cats.`,"quote","info");
      cats=Math.floor(cats+catsLiberated);
      availableCats=Math.floor(availableCats + catsLiberated);
      let farmMaxAdded = randInt(10, 100);
      farmMaxAdded*=battleIntensity;
      addMessage(`You conquered ${format(Math.floor(farmMaxAdded))} farmlands.`,"quote","info");
      farmMax=Math.floor(farmMax + farmMaxAdded);
      let farmsAdded = randInt(10, 30);
      farmsAdded = farmsAdded <= farmMaxAdded ? farmsAdded : farmMaxAdded;
      farmsAdded*=battleIntensity;
      addMessage(`You took over ${format(Math.floor(farmsAdded))} farms.`,"quote","info");
      farms=Math.floor(farms + farmsAdded);
      percentWorldConquered+=(Math.random()/parseNum("10K"))*battleIntensity;
      battleIntensity*=1.3;
      battleOn = false;
      clearInterval(currBattle);
    } else if (frontLine < 0) {
      addMessage("Defeat...", "construct", "danger");
      battleOn = false;
      clearInterval(currBattle);
    }
  }, 100);
}
