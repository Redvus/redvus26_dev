export class Dev {
    constructor(parameters) {
        this.initLayout();
    }

    initLayout() {
        this.body = document.body;
        this.wrapper = document.querySelector(".wrapper");

        this.wrapper.innerHTML = `
            <div class="wrapper__content">
                <img src="assets/images/redvus_logo.svg" alt="Redvus Logo">
                <p>Обновляем дизайн сайта</p>
            </div>
        `;
    }
}
