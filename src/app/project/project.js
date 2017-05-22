import {h} from "hyperapp";
import hyperx from "hyperx";
const html = hyperx(h);

import projecElem from './projectListItem.element';
import footer from '../home/footer.element';
import nav from '../home/nav.element';

export default {
  "/projects": (model, actions) => {
    return html`
      <div>
        ${nav(model, actions)}

        <section class="c-hero">
          <div class="c-hero__container">
            <h1 class="c-hero__title">All Projects</h1>
            <h2 class="c-hero__subtitle">They're okay, I guess.</h2>
          </div>
        </section>

        <div class="c-container__wrapper">
          <section class="c-container">
            ${model.projects.map(p => projecElem(p, actions))}
          </section>
        </div>

        ${footer(model, actions)}
      </div>`
  },
  "/projects/:id": (model, actions) => {
    const project = model.projects.filter(project =>  project.id === model.router.params.id)[0];

    return html`
      <div>
        ${nav(model, actions)}

        <section class="c-hero">
          <div class="c-hero__container">
            <h1 class="c-hero__title">${project.title}</h1>
            <h2 class="c-hero__subtitle">${project.subtitle}></h2>
            <a href="/projects"
              class="c-button c-button--window__secondary"
              onclick=${e => e.preventDefault() || actions.router.go("/projects")}>
              All Projects
            </a>
          </div>
        </section>

        <div class="c-container__wrapper">
          <section class="c-container">
            <article class="c-project">
              <p class="c-project__content" oncreate=${e => e.innerHTML = project.body}></p>

              <h3 class="c-project__subtitle">Links</h3>
              <div class="c-project--links">
                ${project.links.map(link => html`
                  <a href=${link.url}
                  class="c-button c-button--window__primary">
                    ${link.text}
                  </a>
                `)}
              </div>
            </article>
          </section>
        </div>

        ${footer(model, actions)}
      </div>`;
  }
};
