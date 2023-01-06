import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Bertie';
  greetUser(name);
  document.body.style.backgroundColor = 'yellow';
});
