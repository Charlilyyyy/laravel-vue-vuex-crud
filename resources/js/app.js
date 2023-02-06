import './bootstrap';

// import Vue from 'vue';
import { createApp } from 'vue';
import { store } from './store/store.js';
import ExampleComponent from './components/ExampleComponent.vue';
import StudentFormComponent from './components/student/StudentFormComponent.vue';
import StudentTableComponent from './components/student/StudentTableComponent.vue';

// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// window.Vue = require('vue').default;

// Vue.use(ElementUI);

const app = createApp({});

app.use(store)

app.component('example-component', ExampleComponent);
app.component('student-form-component',StudentFormComponent);
app.component('student-table-component',StudentTableComponent);


app.mount('#vue-app');
