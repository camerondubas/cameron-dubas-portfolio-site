export default {
  id: "change_heroes_fundraising",
  title:'Change Heroes',
  subtitle:'Online Fundraising Platform',
  description:`
  Change Heroes was a Friend-to-Friend Fundraising Platform that enabled individuals
  to channel their social circle to raise money for a tangible charitable cause.
  The platform encouraged users to create personalized videos through the online
  recording system and share them with their friends and family.
  The Change Heroes Site was built over multiple years and handled thousands of users
  and tens of thousands transactions resulting in over $3.5M raise for Charity.`,
  images:  [require('../../assets/images/ch.png'), require('../../assets/images/ch2x.png')],
  links: [
    {
      text: 'Website',
      url: 'https://changeheroes.com'
    }
  ],
  homepage: true,
  body: `
    <h2>Social Fundraising</h2>

    <p>
      Change Heroes was built around the idea of creating impact through and individual's social circle.
      It is well known that people are much more willing to donate to a cause when they are asked personally,
      face-to-face, by someone that they care about. It's hard to maintain this personal feeling when you are being asked over a computer.
      Enter Change Heroes.
    </p>

    <p>
      Change Heroes had a simple, user-friendly workflow to onboard campaign runners (individuals that wanted to fundraise).
      They would Add their friends, family, co-workers, etc.
      then create a short personal video addressed to each person asking them to support the cause,
      and finally send out these videos in an email, or through social networks.
    </p>

    <h3>Tech Specs</h3>

    <p>
    The Front-End was made up of multiple Angular 1.x applications that would handle all of the user interactions.
    These apps were placed on a Node.js server that handled routing and some simple templating (Via Handlebars) for the static pages on the site.
    The development workflow was a Grunt system that handled all the compling, minification, and concatination.
    </p>

    <p>
    The Backend was a Java (Groovy on Grails) API that interacted with a MySQL Database to handle all the business logic.
    Payments were handled by integrating with Beanstream, WePay, or Stripe depending on the non-profit.
    </p>
  `
};
