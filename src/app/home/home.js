import {h} from "hyperapp";
import hyperx from "hyperx";
const html = hyperx(h);

import project from '../project/projectListItem.element';
import footer from './footer.element';
import nav from './nav.element';
// https://jsbin.com/sebilaxeve/edit?js,console
// https://jsbin.com/vofobotive/1/edit?js,console,output

export default {
  "*": (state, actions) => html`
    <div>
      ${nav(state, actions)}

      <section class="c-hero">
        <div class="c-hero__container">
          <h1 class="c-hero__title">404</h1>
          <h2 class="c-hero__subtitle">Page not found.</h2>
          <button class="c-hero__button"><a onclick=${() => actions.router.go('/')}>Back to Home</a></button>
        </div>
      </section>
    </div>
  `,

  "/": (state, actions) => html`
    <div>
      ${nav(state, actions)}

      <section class="c-hero">
        <div class="c-hero__container">
          <h1 class="c-hero__title">Cameron Dubas</h1>
          <h2 class="c-hero__subtitle">Front-End Developer, <span>nice guy.</span></h2>
          <p class="c-hero__text">
          Let's chat,
          <a href="mailto:camerondubas@gmail.com">camerondubas@gmail.com</a>
          </p>
        </div>
      </section>

      <div class="c-container__wrapper">
        <section class="c-container">
          ${state.projects.map(p => p.homepage && project(p, actions))}
        </section>
      </div>

      ${footer(state, actions)}
    </div>`
};
