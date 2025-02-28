class Snake {
    constructor() {
        this.body = [{ x: 10, y: 10 }];
        this.direction = { x: 0, y: 0 };
        this.grow = false;
    }

    update() {
        const head = { x: this.body[0].x + this.direction.x, y: this.body[0].y + this.direction.y };
        
        if (this.grow) {
            this.body.unshift(head);
            this.grow = false;
        } else {
            this.body.unshift(head);
            this.body.pop();
        }
    }

    changeDirection(newDirection) {
        if (newDirection.x !== -this.direction.x && newDirection.y !== -this.direction.y) {
            this.direction = newDirection;
        }
    }

    eat() {
        this.grow = true;
    }

    checkCollision(width, height) {
        const head = this.body[0];
        return head.x < 0 || head.x >= width || head.y < 0 || head.y >= height;
    }

    getBody() {
        return this.body;
    }
}