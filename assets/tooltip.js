import tippy from 'https://cdn.skypack.dev/tippy.js';

tippy('[data-tooltip]', {
  content(reference) {
    const title = reference.dataset.tooltip;
    return title;
  },
  placement: 'top-start',
  arrow: true,
  theme: 'mlgl',

  /// debug:
  // hideOnClick: false,
  // trigger: 'click',
});

window.openSearchButtonTippy = tippy('#open-search', {
  content() {
    return '<kbd>/</kbd>';
  },
  placement: 'top-start',
  arrow: true,
  theme: 'mlgl',
  allowHTML: true,
})[0];
