import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(700, 30, 300, 450);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        // 생성하기 전에 이전 프레임을 제거
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    }
}

window.onload = function () {
    new App();
};
