//import CrudTable from './crudTable';
//import { Cipher } from 'crypto';

//window.addEventListener('load', init);

//type HTMLInputEvent<T extends HTMLInputElement> = Event & {
  //target: T;
//}

//async function init() {
  /*
  //let elRoot = document.getElementById('root');
  let elRequestMethod = document.getElementById('requestMethod') as HTMLInputElement;
  */
  /*
  if (
    //elRoot === null
    elRequestMethod === null
  ) {
    return;
  }
  //elRoot.innerHTML = ``;
  elRequestMethod.addEventListener('change', (event: HTMLInputEvent<HTMLSelectElement>) => {
    if (
      event === null ||
      event.target === null ||
      typeof event.target.value === 'undefined'
    ) {
      return;
    }
    const target = event.target as HTMLInputElement;
    console.log(event.target.value);
  });
  */

  /*
  fetch('https://api.github.com/users/xiaotian/repos').then(
    resp => resp.json() // this returns a promise
  ).then(repos => {
    for (const repo of repos) {
      console.log(repo.name);
    }
  }).catch(ex => {
    console.error(ex);
  })
  */

  /*const itemHeaders = `
    <th>Title</th>
    <th>Status</th>
  `;

  const itemColumns = (item: any) => `
    <td>${item.title}</td>
    <td>${item.status}</td>
  `;

  el.innerHTML = `
    <div id="book-shelf" class="crud-table">
      <div data-toolbar>
        <button data-btn-add>Create Row</button>
        <div data-delete-selected>
          <button data-btn-delete-selected>Delete</button>
          <span data-count-selected>0</span>
          Selected
        </div>
      </div>
      <table data-table>
        <thead>
          <tr>
            <th width="25px">
              <input type="checkbox" data-select-all/>
            </th>
            ${itemHeaders}
            <th width="100px">Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  `;

  const crudTable = new CrudTable('book-shelf', {
    bodyTag: 'tbody',
    rowTag: 'tr',
    columnTag: 'td',
    renderRow: (item, idx) => {
      const rowEl = document.createElement('tr');
      rowEl.innerHTML = `
      <td><input type="checkbox" data-select-row value="${idx}"/></td>
      ${itemColumns(item)}
      <td>
        <button data-btn-edit="${idx}">edit</button>
        <button data-btn-delete="${idx}">delete</button>
      </td>
      `;
      return rowEl;
    }
  });*/

  /*let message =
  `one\n` +
  `   two\n` +
  `      three\n`;*/

  //el.innerHTML = `<span id="output" contenteditable="true" spellcheck="false">${message}</span>`;

  /*
  setTimeout(() => {
    let elOutput = document.getElementById("output");
    if (elOutput === null) {
      return;
    }
    elOutput.focus();
  }, 20);
  */
//}

console.log('hello from main.ts');