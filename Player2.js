let winm1 = 0;

export default class Player2 {
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
      if (e.code === "KeyA") {
        this.leftPressed = true;
      }
      if (e.code=== "KeyD") {
        this.rightPressed = true;
      }
      if (e.code === "KeyS") {
        this.shootPressed = true;
      }
    };
    takeDamage(damage) {
      this.health -= damage;
    
      console.log("crash")
      console.log(this.health)
      if (this.health===0){
        this.health = 100+ this.health
        winm1 = winm1+1;
        if (winm1===3){
          document.getElementById("changewon").innerHTML = "<h1>Congo, Player 1 Won</h1>";
          document.getElementById('changewon').id = 'div2';
      }
      }
      document.getElementById("player2health").innerHTML="|   Health : " + this.health;
      document.getElementById("player1").innerHTML = " Won Match :" + winm1; 
    }
  
    keyup = (e) => {
      if (e.code === "ArrowUp") {
        this.upPressed = false;
      }
      if (e.code === "ArrowDown") {
        this.downPressed = false;
      }
      if (e.code === "KeyA") {
        this.leftPressed = false;
      }
      if (e.code === "KeyD") {
        this.rightPressed = false;
      }
      if (e.code === "KeyS") {
        this.shootPressed = false;
      }
    };
  }
  
  