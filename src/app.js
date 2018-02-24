import './app.css';

page('/', () => {
  document.querySelector('#root')
    .innerHTML = `
      <button class="mdc-button mdc-button--primary" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--raised mdc-button--primary" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--accent" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--raised mdc-button--accent" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--dense mdc-button--primary" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--compact mdc-button--primary" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--dense mdc-button--accent" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--compact mdc-button--accent" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--raised mdc-button--dense mdc-button--primary" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--raised mdc-button--compact mdc-button--primary" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--raised mdc-button--dense mdc-button--accent" data-mdc-auto-init="MDCRipple">Button</button>
      <button class="mdc-button mdc-button--raised mdc-button--compact mdc-button--accent" data-mdc-auto-init="MDCRipple">Button</button>
    `;
});

page('/about', () => {
  document.querySelector('#root')
    .textContent = 'About Page';
});

page('/contact', () => {
  document.querySelector('#root')
    .textContent = 'Contact Page';
});

page({ dispatch: false });
page('/');

const drawerEl = document.querySelector('.mdc-temporary-drawer');
const MDCTemporaryDrawer = window.mdc.drawer.MDCTemporaryDrawer;
const drawer = new MDCTemporaryDrawer(drawerEl);

document.querySelector('#menu')
  .addEventListener('click', () => {
    drawer.open = true;
  });

[].forEach.call(
  document.querySelectorAll('a.mdc-list-item'),
  link => {
    link.addEventListener('click', () => {
      drawer.open = false;
    });
  }
);

// const bodyEl = document.querySelector('body');
// drawerEl.addEventListener('MDCTemporaryDrawer:open', () => bodyEl.style.overflowY = 'hidden');
// drawerEl.addEventListener('MDCTemporaryDrawer:close', () => bodyEl.style.overflowY = 'auto');

/**
 * Tab
 */
// const dynamicTabBar = window.dynamicTabBar = new window.mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
// const dots = document.querySelector('.dots');
// const panels = document.querySelector('.panels');
//
// dynamicTabBar.preventDefaultOnClick = true;
//
// const updateDot = index => {
//   const activeDot = dots.querySelector('.dot.active');
//   if (activeDot) activeDot.classList.remove('active');
//
//   const newActiveDot = dots.querySelector(`.dot:nth-child(${(index + 1)})`);
//   if (newActiveDot) newActiveDot.classList.add('active');
// };
//
// const updatePanel = index => {
//   const activePanel = panels.querySelector('.panel.active');
//   if (activePanel) activePanel.classList.remove('active');
//
//   const newActivePanel = panels.querySelector(`.panel:nth-child(${(index + 1)})`);
//   if (newActivePanel) newActivePanel.classList.add('active');
// };
//
//
// dynamicTabBar.listen('MDCTabBar:change', t => {
//   let dynamicTabBar = t.detail;
//   let nthChildIndex = dynamicTabBar.activeTabIndex;
//
//   updatePanel(nthChildIndex);
//   updateDot(nthChildIndex);
// });
//
// dots.addEventListener('click', evt => {
//   if (!evt.target.classList.contains('dot')) return;
//
//   evt.preventDefault();
//
//   let dotIndex = [].slice.call(dots.querySelectorAll('.dot')).indexOf(evt.target);
//
//   if (dotIndex >= 0) dynamicTabBar.activeTabIndex = dotIndex;
//
//   updatePanel(dotIndex);
//   updateDot(dotIndex);
// });

window.mdc.autoInit();
