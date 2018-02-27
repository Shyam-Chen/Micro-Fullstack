document.querySelector('#foo').innerHTML = 'Foo';

[].forEach.call(
  document.querySelectorAll('.mdc-button[data-ripple]'),
  button => window.mdc.ripple.MDCRipple.attachTo(button),
);
