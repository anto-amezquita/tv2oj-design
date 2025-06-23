export default function toggleBox(el) {
  const btn = el.querySelector('[data-toggle-btn]');
  const content = el.querySelector('[data-toggle-content]');

  btn?.addEventListener('click', () => {
    content.classList.toggle('hidden');
  });
}
