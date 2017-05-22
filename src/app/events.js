import {loadImagesInViewport} from './utils';

export default {
  route(state, actions, data) {
    setTimeout(() => {
      window.scrollTo(0,0);

      let route = data.match;
      if (route === "/") {
        actions.updateTheme('rgb(77, 133, 252)');
      } else if (route.includes('/projects')) {
        actions.updateTheme('rgb(216, 71, 84)');
      } else if (route.includes('/about')) {
        actions.updateTheme('rgb(46, 189, 123)');
      } else {
        actions.updateTheme('#3ba03b');
      }

    });
  },
  loaded(state, actions) {
      actions.installServiceWorker();
      actions.loadCSS();
      actions[navigator.onLine ? 'handleOnline' : 'handleOffline']();

      window.addEventListener('offline', () => actions.handleOffline())
      window.addEventListener('online', () => actions.handleOnline())
  },
  render() {
    loadImagesInViewport();
  }
};
