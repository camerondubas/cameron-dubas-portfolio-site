export default {
  id: "this_site",
  title:'This site.',
  subtitle:'Pretty nifty, eh?',
  description: `
    This website is built using <a href="https://github.com/hyperapp/hyperapp">HyperApp</a>. HyperApp is a tiny (1kb, Gzipped), simple, dependency-free SPA framework with a built-in router and plugin support.
    It also has support for <a href="https://github.com/substack/hyperx">HyperX</a>, which is a ES6 Standards compliant Vitrual DOM builder. It's like JSX, but isn't build as a superset of JavaScript, instead it's fully native.
  `,
  images:  [require('../../assets/images/cd.png'), require('../../assets/images/cd2x.png')],
  links: [
    {
      text: 'Website',
      url: '/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/camerondubas/cameron-dubas-portfolio-site'
    }
  ],
  homepage: true,
  body: `
    <h3 class="c-project__subtitle">Front-End</h3>
    <p>
      This website is built using <a href="https://github.com/hyperapp/hyperapp">HyperApp</a>. HyperApp is a tiny (1kb, Gzipped), simple, dependency-free SPA framework with a built-in router and plugin support.
      It also has support for <a href="https://github.com/substack/hyperx">HyperX</a>, which is a ES6 Standards compliant Vitrual DOM builder. It's like JSX, but isn't build as a superset of JavaScript, instead it's fully native.
    </p>

    <p><strong>Why'd you choose HyperApp? There's already so many JS frameworks?</strong></p>

    <p>
    There is indeed a handful of frameworks that could have got the job done. However I'm a firm believer in picking the right tool for the job,
    and although React, Angular or any of the other big frameworks could have been used, I felt that this site was simple enough to no warrant the larger footprint that comes along with a large framework.
    Also, all the neat features mentioned in the last paragraph got me interested in HyperApp and I wanted to deploy a production project ussing it.
    </p>

    <h3 class="c-project__subtitle">Back-End</h3>
    <p>
      This site is where I host all my personal projects like my (messenger bot) and (node-rss).
      To keep the projects completely independent of eachother,
      as well as in easy to migrate to another server, should that be required,
      I made the decision to deploy all my projects using Docker.
    </p>

    <p>
      My current setup is an Nginx container that acts as a reverse proxy that stands in front
      of all my projects (each of which is in it's own docker container) and directs incoming
      traffic to the correct container.
      I've found this setup to be great for allowing me to develop projects completely seperately, and as I said,
      makes future migration as simple as spinning up a new server
      and then running the "docker pull" and "docker run" commands.
    </p>

    <p>
      Also, the server uses Let's Ecrypt SSL/TLS Certificates and serves HTTP/2 for all projects.
    </p>
    `
};


