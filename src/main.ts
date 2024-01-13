import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { myRouter } from './PageRouter';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });
createApp(App).use(myRouter).use(vuetify).mount('#app');
