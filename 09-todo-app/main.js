import './style.css';
import { App } from './src/todos/app';

import todoStore from './src/stores/tod.store';

todoStore.initStore();
App('#app');