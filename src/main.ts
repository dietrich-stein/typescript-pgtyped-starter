import './global.css';

window.addEventListener('load', init);

async function init() {
  let el = document.getElementById("root");
  if (el === null) {
    return;
  }

  let message =
  `one\n` +
  `   two\n` +
  `      three\n`;

  el.innerHTML = `<span id="output" contenteditable="true" spellcheck="false">${message}</span>`;

  setTimeout(() => {
    let elOutput = document.getElementById("output");
    if (elOutput === null) {
      return;
    }
    elOutput.focus();
  }, 20);
}
