import { createApp } from 'vue';
import vueLazy from 'vue-lazyload';
import router from '@/router';
import App from './App.vue';
import store from '@/store';

import 'vant/lib/index.css';
import '@/styles/vant.scss';

const app = createApp(App);

app.use(router);

app.use(store);

app.use(vueLazy, {
  preLoad: 1,
});

app.mount('#app');
