function Bullet(){
    this.velocityOfMovement = -300;
    this.game;
    this.used = false;

    this._construct = function(game, pointInitX, pointInitY) {
        this._constructElement(pointInitX, pointInitY, 2, 5, "yellow",'Bullet');
        this.game = game;
        this.velocityY = this.velocityOfMovement;
    }

    this.move = function(distance) {
        this.moveElement(distance);
        if (this.y<-100){
            this.game.delete(this);
        }





        if (this.velocityX < 0 && this.x < 10) {
            this.game.changeDirection()
        }
        if (this.velocityX > 0 && this.x > game.getHeightContainer()) {
            this.game.changeDirection();
        }
    }

    this.behaviorOfMovement = function(){
    }

    this.collisionWith = function(otherElement) {
        if (this.used) {
            return;
        }

        if (otherElement instanceof Invader) {
            this.used = true;
            this.game.deleteElement(this);
            this.game.deleteElement(otherElement);
            this.game.notificateDestroy();
        }
    };

}

Bullet.prototype = new Element();