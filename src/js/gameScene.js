import {
    Actor,
    Engine,
    Random,
    Timer,
    Vector,
    Label,
    Color,
    Font,
    FontUnit,
    EdgeCollider,
    Scene,
    Class,
    Physics,
    CollisionType,
} from "excalibur";
import {Fish} from "./fish.js";
import {Sail} from "./sail.js";
import {Boei} from "./boei.js"
import {Background} from "./mapLoader.js";
import {MolenBoven} from "./molenboven.js";
import {MolenOnder} from "./molenonder.js";
import {Toren} from "./toren.js";
import {Chinees} from "./chinees.js";
import {Border} from "./border.js";

export class gameScene extends Scene {
    constructor() {
        super();
    }
    i
    game
    engine
    score
    lives
    mylabel
    mylabel2
    mylabel3
    mylabel4
    counter
    gametimer

    onInitialize(Engine) {
        const border1 = new Border(-410,-850,-130,500)
      this.add(border1)

        const border2 = new Border(-120,-1350,-300,500)
        this.add(border2)

        const border3 = new Border(35,-1500,-150,150)
        this.add(border3)

        const border4 = new Border(35,-1500,300,5)
        this.add(border4)

        const border5 = new Border(335,-1490,390,70)
        this.add(border5)

        const border6 = new Border(722,-1405,150,120)
        this.add(border6)

        const border7 = new Border(876,-1290,1020,200)
        this.add(border7)

        const border8 = new Border(1900,-1090,215,0)
        this.add(border8)

        const border9 = new Border(2110,-1090,28,-28)
        this.add(border9)

        const border10 = new Border(2150,-1115,30,0)
        this.add(border10)

        const border11 = new Border(2180,-1115,16,-110)
        this.add(border11)

        const border12 = new Border(2196,-1225,50,-60)
        this.add(border12)

        const border13 = new Border(2246,-1285,115,18)
        this.add(border13)

        const border14 = new Border(2360,-1268,30,-90)
        this.add(border14)

        const border15 = new Border(2390,-1360,100,10)
        this.add(border15)

        const border16 = new Border(2490,-1350,330,330)
        this.add(border16)

        const border17 = new Border(2820,-1020,60,330)
        this.add(border17)

        const border18 = new Border(2880,-690,-38,275)
        this.add(border18)

        const border19 = new Border(2840,-415,0,180)
        this.add(border19)

        const border20 = new Border(2830,-225,-22,175)
        this.add(border20)

        const border21 = new Border(2810,-50,0,180)
        this.add(border21)

        const border22 = new Border(2810,130,-25,70)
        this.add(border22)

        const border23 = new Border(2785,200,0,85)
        this.add(border23)

        const border24 = new Border(2785,285,-60,250)
        this.add(border24)

        const border25 = new Border(2725,535,0,65)
        this.add(border25)

        const border26 = new Border(2725,600,-40,165)
        this.add(border26)

        const border27 = new Border(2685,765,-25,145)
        this.add(border27)

        const border28 = new Border(2660,910,0,200)
        this.add(border28)

        const border29 = new Border(2660,1110,-30,140)
        this.add(border29)

        const border30 = new Border(2630,1250,-270,40)
        this.add(border30)

        const border31 = new Border(2360,1290,-40,-32)
        this.add(border31)

        const border32 = new Border(2320,1260,-50,0)
        this.add(border32)

        const border33 = new Border(2270,1260,-165,70)
        this.add(border33)

        const border34 = new Border(2105,1330,-170,130)
        this.add(border34)

        const border35 = new Border(1935,1460,-35,55)
        this.add(border35)

        const border36 = new Border(1900,1515,0,65)
        this.add(border36)

        const border37 = new Border(1900,1580,50,65)
        this.add(border37)

        const border38 = new Border(1950,1645,-130,0)
        this.add(border38)

        const border39 = new Border(1820,1645,-20,-25)
        this.add(border39)

        const border40 = new Border(1800,1620,-105,75)
        this.add(border40)


        this.game = Engine
            this.timer2 = new Timer({
            fcn: () => this.spawn2(Engine),
            interval: 1000,
            repeats: true

        })
        Engine.currentScene.add(this.timer2)

            this.timer = new Timer({
                fcn: () => this.spawn(Engine),
                interval: 30,
                repeats: true
            })
            Engine.currentScene.add(this.timer)
            this.timer.start()
    }


    onActivate(ctx) {
        const backgroundLoop = new Background();
        this.add(backgroundLoop);
        const sail = new Sail();
        const fish = new Fish(sail);
        this.add(fish);
        fish.addChild(sail);
        const molenBoven = new MolenBoven();
        const molenOnder = new MolenOnder(molenBoven);
        this.add(molenOnder)
        molenOnder.addChild(molenBoven)
        this.score = 0
        this.gametimer = 90
        this.counter = 0
        this.i = 0
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel)


        this.mylabel2 = new Label({
            text: `Wind`,
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel2)

        this.mylabel3 = new Label({
            text: `↑`,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel3)

        this.mylabel4 = new Label({
            text: `${this.gametimer}s`,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel4)

        this.camera.strategy.elasticToActor(
            fish, 0.9, 0.9
        )

        const toren = new Toren();
        this.add(toren);

        const chinees = new Chinees();
        this.add(chinees);
    }

    updateScore(){
        this.score++
        this.mylabel.text = `Score: ${this.score}`
        if (this.score == 15){
            this.engine.goToScene("gameover", { score: this.score, gametimer: this.gametimer })
        }
        this.timer2.start()
    }
    delScore(){
        this.score--
        this.mylabel.text = `Score: ${this.score}`

    }



    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        this.mylabel.pos = this.game.screenToWorldCoordinates(new Vector(1230, 50))
        this.mylabel2.pos = this.game.screenToWorldCoordinates(new Vector(15, 100))
        this.mylabel3.pos = this.game.screenToWorldCoordinates(new Vector(40, 50))
        this.mylabel4.pos = this.game.screenToWorldCoordinates(new Vector(1270, 100))


    }

    spawn(engine) {

        const boei = new Boei(
        )
        this.add(boei)
        this.counter++
        this.on('collisionstart', (event) => this.hitSomething(event))
        if (this.counter == 17){
            this.timer.stop()
        }
    }
    hitSomething(event){
        if (event.other instanceof Fish) {
            this.pos = new Vector(getRandomNum(149, 2398), getRandomNum(-942, 1045))
            this.delScore()
        }
    }
    spawn2(engine) {

        this.gametimer--
        if (this.gametimer >9) {
            this.mylabel4.text = `${this.gametimer}s`
        }
        else {this.mylabel4.text = `${this.gametimer}s`}

        if (this.gametimer == 0){
            this.timer2.stop()
            this.engine.goToScene("gameover", { score: this.score, gametimer: this.gametimer })
        }
    }

}





