class Snake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.body = [
            {
                x,
                y,
            },
        ];
        let dir = Math.round(Math.random());
        let ang = Math.round(Math.random() * 4);
        if (ang % 2 == 0) {
            if (dir == 0) {
                this.X = dir;
                this.Y = 1;
            } else {
                this.X = ang == 0 ? dir : dir * -1;
                this.Y = 0;
            }
        } else {
            if (dir == 0) {
                this.Y = dir;
                this.X = 1;
            } else {
                this.Y = ang == 1 ? dir : dir * -1;
                this.X = 0;
            }
        }
    }

    move() {
        let newBody = {};
        let lastBody = this.body[this.body.length - 1];
        let { x, y } = lastBody;
        // console.log(x, y, width);
        if (this.X == 1) {
            if (y >= height) y = 0;
            if (x >= width) {
                newBody = { x: 0, y };
            } else {
                newBody = { x: x + this.size, y };
            }
        } else if (this.X == -1) {
            if (y >= height) y = 0;
            if (x <= 0) {
                newBody = { x: width - this.size, y };
            } else {
                newBody = { x: x - this.size, y };
            }
        } else if (this.Y == 1) {
            if (x >= width) x = 0;
            if (y >= height) {
                newBody = { x, y: 0 };
            } else {
                newBody = { x, y: y + this.size };
            }
        } else if (this.Y == -1) {
            if (x >= width) x = 0;
            if (y <= 0) {
                newBody = { x, y: height - this.size };
            } else {
                newBody = { x, y: y - this.size };
            }
        }

        this.body.shift();
        this.body.push(newBody);
    }
}

class Food {
    constructor(size) {
        this.randPos();
        this.size = size;
        this.big = false;
        this.count = 0;
    }

    randPos() {
        this.x = Math.round((Math.random() * width) / snake.size) * snake.size;
        this.y = Math.round((Math.random() * height) / snake.size) * snake.size;
        if (this.x >= width || this.x <= 0) this.x = width / 2;
        if (this.y >= height || this.y <= 0) this.y = height / 2;
        // console.log(this.x, this.y);
    }
}

const snakeCanvas = document.getElementById("snake-canvas");
const gOver = document.getElementById("game-over");
const g = snakeCanvas.getContext("2d");
const width = snakeCanvas.width;
const height = snakeCanvas.height;
const snake = new Snake(width / 2, height / 2, 20);
const food = new Food(20);
let gameover = false;
const fps = 10;

let gameLoop = null;

window.onload = () => {
    gameLoop = setInterval(paint, 1000 / fps);
};

function paint() {
    showBg();
    if (gameover) {
        return showGo();
    }
    addFood();
    showSnake();
    if (isEat()) {
        addSnakeBody(food.x, food.y);
        food.randPos();
    } else if (eatSnakeBody()) {
        gameover = true;
    }
    showScore();
    updateGame();
}

function updateGame() {
    snake.move();
    food.count++;
    if (food.count >= 10) {
        food.big = !food.big;
        food.count = 0;
    }
    keyControl();
}

function showBg() {
    g.beginPath();
    g.fillStyle = "#fff";
    g.fillRect(0, 0, width, height);
}

function showScore() {
    g.beginPath();
    g.fillStyle = "#000";
    g.font = "1rem monospace";
    g.fillText("Score : " + (snake.body.length - 1), 8, 16);
}

function showGo() {
    snakeCanvas.style.display = "none";
    gOver.style.display = "block";
    document.getElementById("restart").onclick = () => {
        window.location.reload();
    };
    clearInterval(gameLoop);
}

function showSnake() {
    for (let i = 0; i < snake.body.length; i++) {
        if (i == snake.body.length - 1) g.fillStyle = "red";
        else g.fillStyle = "black";
        g.beginPath();
        if (i == 0 && snake.body.length != 1) {
            g.fillRect(
                snake.body[i].x + 3,
                snake.body[i].y + 3,
                snake.size - 6,
                snake.size - 6
            );
        } else
            g.fillRect(
                snake.body[i].x + 1,
                snake.body[i].y + 1,
                snake.size - 2,
                snake.size - 2
            );
    }
}

function addFood() {
    g.fillStyle = "#e33";
    g.beginPath();
    if (!food.big)
        g.fillRect(food.x + 3, food.y + 3, food.size - 6, food.size - 6);
    else g.fillRect(food.x, food.y, food.size, food.size);
}

function isEat() {
    let xS = snake.body[snake.body.length - 1].x;
    let yS = snake.body[snake.body.length - 1].y;
    if (xS == food.x && yS == food.y) {
        return true;
    }
    return false;
}

function addSnakeBody(x, y) {
    snake.body.push({ x, y });
}

function eatSnakeBody() {
    let xS = snake.body[snake.body.length - 1].x;
    let yS = snake.body[snake.body.length - 1].y;
    for (let i = 0; i < snake.body.length - 1; i++) {
        if (xS == snake.body[i].x && yS == snake.body[i].y) return true;
    }
    return false;
}

function keyControl() {
    window.addEventListener("keydown", function (e) {
        this.setTimeout(() => {
            // console.log(e.code);
            if (e.keyCode == 39 || e.keyCode == 65) {
                //right
                if (snake.X != -1) {
                    snake.X = 1;
                    snake.Y = 0;
                }
            }
            if (e.keyCode == 37 || e.keyCode == 83) {
                //left
                if (snake.X != 1) {
                    snake.X = -1;
                    snake.Y = 0;
                }
            }
            if (e.keyCode == 38 || e.keyCode == 87) {
                //up
                if (snake.Y != 1) {
                    snake.Y = -1;
                    snake.X = 0;
                }
            }
            if (e.keyCode == 40 || e.keyCode == 68) {
                //down
                if (snake.Y != -1) {
                    snake.Y = 1;
                    snake.X = 0;
                }
            }
        }, 1);
    });
}
