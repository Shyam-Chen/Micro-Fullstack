const view = {
  template: `
    <button class="mdc-button" data-ripple>Flat</button>
    <button class="mdc-button mdc-button--raised" data-ripple>Raised</button>
    <button class="mdc-button mdc-button--dense" data-ripple>Dense</button>
    <button class="mdc-button secondary-text-button" data-ripple>Secondary</button>
    <button class="mdc-button mdc-button--raised secondary-filled-button" data-ripple>Secondary filled</button>

    <button class="mdc-button mdc-button--unelevated" data-ripple>Unelevated</button>
    <button class="mdc-button mdc-button--stroked" data-ripple>Stroked</button>
    <button class="mdc-button mdc-button--stroked secondary-stroked-button" data-ripple>Secondary Stroked</button>
  `,
};

document.querySelector('#md').innerHTML = view.template;

[].forEach.call(
  document.querySelectorAll('.mdc-button[data-ripple]'),
  button => window.mdc.ripple.MDCRipple.attachTo(button),
);
