import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"

import PrimeVue from "primevue/config"
import ConfirmationService from "primevue/confirmationservice"
import DialogService from "primevue/dialogservice"
import ToastService from "primevue/toastservice"

// Primevue directives
import BadgeDirective from "primevue/badgedirective"
import Tooltip from "primevue/tooltip"
import Ripple from "primevue/ripple"
import StyleClass from "primevue/styleclass"

import BlockViewer from "@/components/BlockViewer.vue"

import "@/assets/styles.scss"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService)

app.directive("tooltip", Tooltip)
app.directive("badge", BadgeDirective)
app.directive("ripple", Ripple)
app.directive("styleclass", StyleClass)

app.component("BlockViewer", BlockViewer)

app.mount("#app")
