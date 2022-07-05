export default class Bullet2 {

    constructor(x, y, speed, damage) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.damage = damage;
  
      this.width = 5;
      this.height = 15;
      this.color = "red";
  
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      this.y += this.speed;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    collideWith(sprite) {
      if (
        this.x < sprite.x + sprite.width &&
        this.x + this.width > sprite.x &&
        this.y < sprite.y + sprite.height &&
        this.y + this.height > sprite.y
      ) {
        sprite.takeDamage(this.damage)
        console.log("cbd");
        return true;
      }
      return false;
    }
  }
  