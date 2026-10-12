const toggle = document.querySelector('.navbar-toggler');
const navigation = document.getElementById('navbarNav');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.classList.toggle('collapsed', expanded);
    navigation.classList.toggle('show', !expanded);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.add('collapsed');
      navigation.classList.remove('show');
      toggle.focus();
    }
  });
}
