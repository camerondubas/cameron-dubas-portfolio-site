import {h} from "hyperapp";
import hyperx from "hyperx";
const html = hyperx(h);

const cam = require('../../assets/images/cam.jpeg');
const cam2x = require('../../assets/images/cam2x.jpeg');
import footer from '../home/footer.element';
import nav from '../home/nav.element';

 export default {
  "/about": (model, actions) => {
    return html`
      <div>
        ${nav(model, actions)}

        <section class="c-hero">
          <div class="c-hero__container">
            <h1 class="c-hero__title">I'm Cameron 👋</h1>
            <h2 class="c-hero__subtitle">I write code, among other things.</h2>
          </div>
        </section>

        <div class="c-container__wrapper">
          <section class="c-container">
            <article class="c-project">
              <div class="c-project__content">
                <img
                data-src=${cam} data-srcset=${cam2x + ' 600w'}
                class="c-about--image"
                />

                <h2>I kinda love tech.</h2>
                <p>
                Well, "kinda" might be understating it a bit. Since I was a little kid, I've always had a fascination with technology.
                From video games, to weekly Google podcasts, I spend most of my free time consuming, understanding, and creating technology. Typically, I work on Front-End web development projects: Building Javascript enabled Webapps ect. However I also often work with Server-Side Javascript in Node.js and SQL Databases.
                I dabble in Dev-Ops from time to time, but don't quote me on that!
                </p>

                <h3 class="c-clear">Profesional Links</h3>
                <a href="https://registry.jsonresume.org/camerondubas"
                class="c-button c-button--window__primary">
                  Resume
                </a>

                <a href="https://github.com/camerondubas"
                class="c-button c-button--window__primary">
                  Github
                </a>

                <a href="https://www.linkedin.com/in/cameron-dubas/"
                class="c-button c-button--window__primary">
                  LinkedIn
                </a>

                <h3>Social Links</h3>
                <a href="https://twitter.com/camerondubas"
                class="c-button c-button--window__primary">
                  Twitter
                </a>

                <a href="https://instagram.com/camerondubas"
                class="c-button c-button--window__primary">
                  Instagram
                </a>


                <h3>Here's a few podcasts I listen to:</h3>
                  <a href="https://gimletmedia.com/reply-all"
                    class="c-button c-button--window__primary">Reply All</a>
                  <a href="http://www.acquired.fm/"
                    class="c-button c-button--window__primary">Acquired</a>
                  <a href="http://shoptalkshow.com/"
                    class="c-button c-button--window__primary">Shop Talk Show</a>

                <p>Have any other questions (Or just want to talk podcasts)? Send me an email: <a href="mailto:camerondubas@gmail.com">camerondubas@gmail.com</a>
              </div>

            </article>
          </section>
        </div>

        ${footer(model, actions)}
      </div>`
  }
};


/*
                <p>
                  Like many kids, I was big into video games.
                  I could spend hours infront of the TV lost in the world that I was playing in.
                  Aside from the the flashy polygonal graphics of games like Mario 64,
                  what grabbed me was the
                </p>

                <h3>Maker & IoT</h3>
                <h3>Coding</h3>

                <h3>Android</h3>


                <h3>Podcasts</h3>
                <p>
                 I'm not a huge book-reader. I've just never gotten into it, I'm much more of an audio person.
                 That's where Podcasts come in.
                 Something about this medium for media consumption grabbed me. For almost a decade, since podcasts we're still in their infancy,
                 I've been a dedicated listener.
                </p>

                <p>
                  Here's just a few shows you should check out if you haven't already:
                  <a href="https://gimletmedia.com/reply-all">Reply All</a>,
                  <a href="http://www.acquired.fm/">Acquired</a>, and
                  <a href="http://shoptalkshow.com/">Shop Talk Show</a>
                </p>*/
