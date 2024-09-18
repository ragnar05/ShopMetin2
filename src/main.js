import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const app = createApp(App);
app.use(router);

app.mount("#app");
