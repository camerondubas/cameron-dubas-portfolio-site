export default {
  id: "node_rss ",
  title:'Node.js RSS API',
  subtitle:'Simple CORS-Enabled API to convert and RSS Feed into usable JSON',
  description: `I was working a side project and wanted to pull an RSS feed. However I kept running into Cross-Origin Resource Sharing (CORS) issues. The project was small and didn't warrant a backend just to accomplish this small task. This RSS API solves that issue, simply send the URL of an RSS feed and the contents will be returned in JSON.`,
  images:  [require('../../assets/images/rss.png'), require('../../assets/images/rss2x.png')],
  links: [
    {
      text: 'GitHub',
      url: 'https://github.com/camerondubas/rss-api'
    }
  ]
};
