import "/scss/app.scss";
import "/fonts/fontawesome-free-7.0.0-web/scss/fontawesome.scss";
import "/fonts/fontawesome-free-7.0.0-web/scss/regular.scss";
import "/fonts/fontawesome-free-7.0.0-web/scss/solid.scss";
import "/fonts/fontawesome-free-7.0.0-web/scss/brands.scss";

// import { Dev } from "./Pages/Dev.js";
import { Intro } from "./Pages/Intro.js";
// import { Nav } from "./Components/Nav.js";
// import { Header } from "./Components/Header.js";
// import { SidebarRight } from "./Components/SidebarRight.js";
// import { SidebarLeft } from "./Components/SidebarLeft.js";
// import { Footer } from "./Components/Footer.js";

class Modules {
    constructor() {
        // new Dev();

        // new Header();
        // new Nav();
        // new SidebarRight();
        // new SidebarLeft();
        // new Footer();
        new Intro();
    }
}

export { Modules };
