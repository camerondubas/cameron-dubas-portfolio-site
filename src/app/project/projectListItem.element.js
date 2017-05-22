import {h} from "hyperapp";
import hyperx from "hyperx";
const html = hyperx(h);

export default (project, actions) => {
  return html`
    <article class="c-project--overview">
      <img class="c-project--overview__image" data-src=${project.images[0]} alt="${project.title}">
      <div class="c-project--overview__content">
        <h2 class="c-project--overview__title">${project.title}</h2>
        <h3 class="c-project--overview__subtitle">${project.subtitle}</h3>
        <p class="c-project--overview__body" oncreate=${e => e.innerHTML = project.description}></p>
      </div>
      <div class="c-project--links">
        <a href=${"/projects/" + project.id}
          class="c-button c-button--window__primary"
          onclick=${e => e.preventDefault() || actions.router.go("/projects/" + project.id)}>
          Details
        </a>
        ${project.links.map(link => html`
            <a
              href=${link.url}
              class="c-button c-button--window__primary">
              ${link.text}
            </a>
          `)}
        </div>
    </article>`;
};
