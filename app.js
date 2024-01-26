import { Visual } from "./visual.js";

class App {
    constructor() {
        this.setWebgl();

        WebFont.load({
            google: {
              families: ['Hind:700']
            },
            fontactive: () => {

                this.visiual = new Visual();

                window.addEventListener('resize', this.resize.bind(this), false);
                this.resize();

                requestAnimationFrame(this.animate.bind(this));
            }
        });
    }

    setWebgl() {
        this.renderer = new PIXI.Renderer({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            antialias: true,
            transparent: false,
            autoDensity: true,
            powerPreference: "high-performance",
            backgroundColor : 0x000000,
        });
        document.body.appendChild(this.renderer.view);

        this.stage = new PIXI.Container();

    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.renderer.resize(this.stageWidth, this.stageHeight);

        this.visiual.show(this.stageWidth, this.stageHeight, this.stage);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.visiual.animate();

        this.renderer.render(this.stage);
    }


}

window.onload = () => {
    new App();
};