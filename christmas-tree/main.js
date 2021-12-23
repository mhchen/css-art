const toggleAnimations = document.getElementById('toggle-animations')
const container = document.getElementById('container')

let areAnimationsEnabled = true;

toggleAnimations.addEventListener('click', () => {
  areAnimationsEnabled = !areAnimationsEnabled;
  toggleAnimations.textContent = areAnimationsEnabled ? 'Stop blinking' : 'Start blinking';
  container.classList.toggle('animations-enabled', areAnimationsEnabled);
});
