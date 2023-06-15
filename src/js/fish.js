import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
export class Fish extends Actor {

    constructor() {
        super({width:Resources.Fish.width, height:Resources.Fish.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(700, 350)
        this.vel = new Vector(0, 0)
    }


    onPreUpdate(engine) {
        let speed = 0;

        if (this.rotation > 0 && this.rotation < 1) {
                speed = -150;
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.Right)
        ) {
            this.rotation += 0.05;
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.Left)
        ) {
            this.rotation -= 0.05;
        }

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
        );

        this.vel = direction;

    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
    }


}





