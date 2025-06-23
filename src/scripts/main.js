// scripts/main.js

// Glob import components
const components = import.meta.glob('./components/*.js');

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded. Initializing components...');

  for (const path in components) {
    const mod = await components[path]();
    const componentFn = mod.default;

    if (typeof componentFn === 'function') {
      const name = componentFn.name;
      document.querySelectorAll(`[data-component="${name}"]`).forEach(el => {
        if (!el.dataset.jsInit) {
          el.dataset.jsInit = 'true';
          componentFn(el);
        }
      });
    }
  }
});
