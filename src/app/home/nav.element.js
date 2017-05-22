import {h} from "hyperapp";
import hyperx from "hyperx";
const html = hyperx(h);

export default (model, actions) => {
  return html`
    <nav class="c-nav">
      <ul class="c-nav__list">
        <li class="c-nav__list-item">
          <a href="/"
            class="c-button c-button--standard__primary ${model.router.match === '/' && 'is-active'}"
            onclick=${e => e.preventDefault() || actions.router.go('/')}>
            Home
          </a>
        </li>
        <li class="c-nav__list-item">
          <a href="/projects"
            class="c-button c-button--standard__primary ${model.router.match.includes('/projects') && 'is-active'}"
            onclick=${e => e.preventDefault() || actions.router.go('/projects')}>
            Projects
          </a>
        </li>
        <li class="c-nav__list-item">
          <a href="/about"
            class="c-button c-button--standard__primary ${model.router.match.includes('/about') && 'is-active'}"
            onclick=${e => e.preventDefault() || actions.router.go('/about')}>
            About
          </a>
        </li>
      </ul>
    </nav>
  `;
};
