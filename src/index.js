import './assets/styles/styles.css';

import {app, Router} from "hyperapp";
import state from './state/index';
import view from './app/views';
import actions from './app/actions';
import events from './app/events';

const plugins = [Router];

const bootstrap = {state, view, plugins, actions, events};
app(bootstrap);
