// Import and register all components,
// which will allow us to use them in any template strings anywhere in the project

import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import VueTextareaAutosize from "vue-textarea-autosize";
import Sortable from "vue-sortable";
import VueNextSelect from "vue-next-select";
import "vue-next-select/dist/index.css";
import { App } from "vue";

export function registerComponents(vue: App): void {
    /* from files */
    const componentsContext = require.context("./");
    componentsContext.keys().forEach(path => {
        const component = componentsContext(path).default;
        if (component && !(component.name in vue._context.components)) {
            vue.component(component.name, component);
        }
    });

    /* from packages */
    vue.component("collapse-transition", CollapseTransition);
    vue.use(VueTextareaAutosize);
    vue.use(Sortable);
    vue.component("vue-select", VueNextSelect);
}