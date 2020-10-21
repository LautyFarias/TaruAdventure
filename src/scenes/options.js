export class Options extends Phaser.Scene {
    constructor() {
        super({
            key: "options"
        });
    }
    init() {
        self.gameWidth = this.game.renderer.width;
        self.halfWidth = gameWidth / 2;
        self.widthTQ = gameWidth / 3;
        self.gameHeight = this.game.renderer.height;
    }
    preload() {
        this.load.svg('sound-avaible', '../../assets/svg/sound-avaible.svg');
        this.load.svg('sound-inavaible', '../../assets/svg/sound-inavaible.svg');
    }
    create() {
        this.add.image(0, 0, 'menu-bg').setOrigin(0);

        let soundInavaible = this.add.image(widthTQ, 250, 'sound-inavaible');
        soundInavaible.setScale(0.4);
        let soundAvaible = this.add.image(gameWidth - widthTQ, 250, 'sound-avaible');
        soundAvaible.setScale(0.1);

        this.add.text(
            halfWidth, gameHeight - gameHeight / 3 - 100,
            "Icons made by Freepik"
        ).setOrigin(0.5);
        this.add.text(
            halfWidth, gameHeight - gameHeight / 3, "From www.flaticon.local"
        ).setOrigin(0.5);
    }
}