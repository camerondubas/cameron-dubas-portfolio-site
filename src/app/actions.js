import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import loadCSS from 'fg-loadcss';

export default {
  updateTheme: (state, actions, params) => {
    let theme = {
      bgColor: params
    };
    let color = params || 'green';

    const elems = ['body', '.c-container__wrapper', '.c-footer'];

    elems.forEach(elem => {
      let e = document.querySelector(elem);
      if (e) {
        e.style.backgroundColor = color;
      }
    });

    return {theme};
  },
  handleOffline: () => ({offline: true}),
  handleOnline: () => ({offline: false}),
  loadCSS: () => {
    loadCSS.loadCSS( "https://fonts.googleapis.com/css?family=Old+Standard+TT:400|Source+Sans+Pro:400,400i,300");
  },
  installServiceWorker: () => {
    OfflinePluginRuntime.install({
        onUpdating: () => {
            console.log('SW Event:', 'onUpdating');
          },
          onUpdateReady: () => {
            console.log('SW Event:', 'onUpdateReady');
            // Tells to new SW to take control immediately
            OfflinePluginRuntime.applyUpdate();
          },
          onUpdated: () => {
            console.log('SW Event:', 'onUpdated');
            // Reload the webpage to load into the new version
            window.location.reload();
          },
          onUpdateFailed: () => {
            console.log('SW Event:', 'onUpdateFailed');
          }
      });
  }

};
