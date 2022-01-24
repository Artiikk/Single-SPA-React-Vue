import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

Vue.config.productionTip = true;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App)
  },
});

export const { bootstrap, mount, unmount } = vueLifecycles;