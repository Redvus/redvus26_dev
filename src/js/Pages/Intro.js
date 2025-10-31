export class Intro {
    constructor(parameters) {
        this.initLayout();
        if (import.meta.env.DEV) {
            this.initLayoutDev(); // Скрывать для build
        }
    }

    initLayout() {
        this.body = document.body;
        this.wrapper = document.querySelector(".wrapper");
    }

    initLayoutDev() {
        this.wrapper.innerHTML = `
			<div class="wrapper__shutter wrapper__shutter_left"></div>
			<div class="wrapper__shutter wrapper__shutter_right"></div>
		`;
    }
}
