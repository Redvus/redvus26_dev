import { gsap } from "gsap";

export class Header {
    constructor() {
        this.initLayout();
        if (import.meta.env.DEV) {
            this.initHeaderDev();
        }
    }

    initLayout() {
        this.body = document.body;
        this.wrapper = document.querySelector(".wrapper");
    }

    initHeaderDev() {
        this.header = document.createElement("div");
        this.header.className = "header header--desktop";
        this.header.innerHTML = `
            <header>
                <div class="shutter">
                    <div class="shutter-left">
                        <div class="shutter-left__logo" id="redvus_logo">

                        </div>
                    </div>
                    <div class="shutter-right">
                        <div class="shutter-right__menu" id="menu">

                        </div>
                        <div class="shutter-right__nav">
                            <nav id="nav">

                            </nav>
                            <ul class="shutter-right__adress">
                                <li><a href="tel:+79272009556"><i class="fa fa-phone-square"></i>+7&nbsp;927&nbsp;200&nbsp;9556</a></li>
                                <li><a href="mailto:info@redvus.ru"><i class="fa fa-envelope-square"></i>info@redvus.ru</a></li>
                                <li><a href="http://facebook.com/redvus" target="_blank"><i class="fa fa-facebook-square"></i>redvus</a></li>
                                <li><a href="http://instagram.com/redvus" target="_blank"><i class="fa fa-instagram"></i>redvus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
		`;

        // if (document.body.clientWidth < 576 || screen.width < 576) {
        //     this.header.className = "header header--mobile";
        //     this.header.innerHTML = `

        // 	`;
        // }

        this.body.appendChild(this.header);
    }
}
