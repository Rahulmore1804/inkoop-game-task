let winm = 0;

export default class Player {
  
  constructor(x, y, bulletController,health) {
    this.x = x;
    this.y = y;
    this.bulletController = bulletController;
    this.width = 50;
    this.height = 50;
    this.speed = 4;
    this.health = health;

    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }

  
  draw(ctx) {
    this.move();
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.shoot();
    ctx.fillStyle = "black";
    ctx.font = "25px Arial";
    ctx.fillText(
      this.health,this.x+this.width/3.5,this.y +this/this.height/1.5
    );

  }
  takeDamage(damage) {
    this.health -= damage;
  
    console.log("crash")
    console.log(this.health)
    if (this.health===0){
      this.health = 100 + this.health;
      winm = winm+1;
      if (winm===3){
        document.getElementById("changewon").innerHTML = "<h2>Congo, Player 2 Won</h2>";
        document.getElementById('changewon').id = 'div2';
    }
   
  }
  document.getElementById("player1health").innerHTML="|   Health : " + this.health;
  document.getElementById("player2").innerHTML = "Won Match :" + winm; 
}

  shoot() {
    if (this.shootPressed) {
      const speed = 5;
      const delay = 7;
      const damage = 5;
      const bulletX = this.x + this.width / 2;
      const bulletY = this.y;
      this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
    }
  }

  move() {
    
    if (this.leftPressed) {
      this.x -= this.speed;
    }

    if (this.rightPressed) {
      this.x += this.speed;
    }
  }

  keydown = (e) => {
    if (e.code === "ArrowUp") {
      this.upPressed = true;
    }
    if (e.code === "ArrowDown") {
      this.downPressed = true;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = true;
    }
    if (e.code === "ArrowRight") {
      this.rightPressed = true;
    }
    if (e.code === "Space") {
      this.shootPressed = true;
    }
  };

  keyup = (e) => {
    if (e.code === "ArrowUp") {
      this.upPressed = false;
    }
    if (e.code === "ArrowDown") {
      this.downPressed = false;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = false;
    }
    if (e.code === "ArrowRight") {
      this.rightPressed = false;
    }
    if (e.code === "Space") {
      this.shootPressed = false;
    }
  };
}


