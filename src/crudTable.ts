type CrudTableRenderRow = (item: any, index: number) => HTMLTableRowElement | null;

type CrudTableSelectRows = () => NodeListOf<Element> | null;

type CrudTableOptions = {
  bodyTag: string;
  rowTag: string;
  columnTag: string;
  renderRow: CrudTableRenderRow
};

const itemsPrefix = 'items-';

class CrudTable {
  items: Record<string, any>;
  root: HTMLElement | null;
  toolbar: HTMLElement | null;
  selectAllBtn: HTMLElement | null;
  rootId: string;
  options: CrudTableOptions;

  constructor(id: string, options: CrudTableOptions) {
    this.items = [];
    this.options = options;
    this.rootId = id;
    this.root = document.getElementById(this.rootId);
    this.toolbar = null;
    this.selectAllBtn = null;
    if (this.root === null) {
      return;
    }

    this.options.renderRow = (item: any, idx: number) => {
      const rowEl = document.createElement('tr');
      rowEl.innerHTML = `
        <td><input type="checkbox" data-select-row/></td>
        <td>${item.title}</td>
        <td>${item.status}</td>
      `;

      return rowEl;
    }
    //debugger;
    this.items = this.retrieveItems();

    this.init();
  }

  init() {
    this.renderItems();
    this.initToolbar();
  }

  renderItems() {
    if (this.root === null) {
      return;
    }

    const body = this.root.querySelector(this.options.bodyTag);
    if (body === null) {
      return;
    }

    body.innerHTML = '';

    // Non-Empty
    if (this.items?.length) {
      this.items.forEach((item: any, idx: number) => {
        debugger;
        const rowEl = this.options.renderRow(item, idx);
        if (rowEl !== null) {
          body.appendChild(rowEl);
        }
      });
    // Empty
    } else {
      const rowEl = document.createElement(this.options.rowTag);
      const colEl = document.createElement(this.options.columnTag);

      rowEl.appendChild(colEl);
      colEl.innerText = 'No records!';
      colEl.setAttribute('colspan','999999');
      rowEl.classList.add("row-empty");
      body.appendChild(rowEl);
    }

    this.handleBtnRowAction();
  }

  initToolbar() {
    if (this.root === null) {
      return;
    }

    this.toolbar = this.root.querySelector('[data-toolbar]');
    if (this.toolbar === null) {
      return;
    }

    this.selectAllBtn = this.root.querySelector('[data-select-all]');
    if (this.selectAllBtn === null) {
      return;
    }

    const getSelectRows = (
      () => ((this.root !== null)
        ? this.root.querySelectorAll('[data-table] [data-select-row]')
        : null
      )).bind(this)
    const updateToolbar = this.updateToolbar.bind(this);

    this.selectAllBtn.addEventListener('click', (e: Event) => {
      const selectRows: NodeListOf<Element> | null = getSelectRows();
      if (selectRows !== null) {
        selectRows.forEach((value: Element) => {
          if (e.target !== null) {
            (value as HTMLInputElement).checked = (e.target as HTMLInputElement).checked;
          }
          (value as HTMLInputElement).onclick = () => {
            updateToolbar();
          };
        });
      }
      updateToolbar();
    });

    // handle delete all
    const deleteSelectedBtn = this.toolbar.querySelector('[data-btn-delete-selected]');
    if (deleteSelectedBtn !== null) {
      deleteSelectedBtn.addEventListener('click', ((e: Event) => {
        const selectRows = getSelectRows();
        if (selectRows === null) {
          return;
        }
        const selectedRowsId: string[] = [];

        selectRows.forEach((value: Element) => {
          if ((value as HTMLInputElement).checked) {
            selectedRowsId.push((value as HTMLInputElement).value);
          }
        });
        const itemsTitle = selectedRowsId.map(idx => this.items[idx].title);
        if (window.confirm(`Delete books ${itemsTitle.join(', ')}?`)) {
          this.deleteAllItems(selectedRowsId);
        }
      }).bind(this));
    }

    this.updateToolbar();
    this.handleBtnAddItem();
  }

  updateToolbar() {
    let isAllSelected = true;
    let isSelected = false;
    let selectedCounter = 0;

    if (this.root === null || this.toolbar === null || this.selectAllBtn === null) {
      return;
    }

    this.root.querySelectorAll('[data-table] [data-select-row]').forEach((value: Element) => {
      if ((value as HTMLInputElement).checked) {
        selectedCounter++;
        isSelected = true;
      } else {
        isAllSelected = false;
      }
      (value as HTMLInputElement).onclick = this.updateToolbar.bind(this);
    });

    (this.selectAllBtn as HTMLInputElement).checked = isAllSelected;

    if (isSelected) {
      this.toolbar.setAttribute('data-selected', 'true');
      let count = this.toolbar.querySelector('[data-count-selected]');
      if (count !== null) {
        (count as HTMLElement).innerText = selectedCounter.toString();
      }
    } else {
      this.toolbar.removeAttribute('data-selected');
    }
  }

  handleBtnAddItem() {
    if (this.root === null) {
      return;
    }

    const btnAddItem = this.root.querySelector('[data-btn-add]');
    if (btnAddItem === null) {
      return;
    }

    const listener = () => {
      let title = '';
      let status = '';
      const checkAllowCreate = () => {
        title = window.prompt('Insert book title', title) || title;
        status = window.prompt('Insert book status', status) || status;
        return window.confirm(`Add book "${title}" with status "${status}" to Book Shelf`);
      }
      const confirmBack = () => window.confirm('Are you sure to back?');
      let isBack = false;
      let confirmInput = checkAllowCreate();
      while (!confirmInput && !isBack) {
        isBack = confirmBack();
        if (isBack) break;
        confirmInput = checkAllowCreate();
      }
      if (!isBack) {
        this.createItem({
          title,
          status
        });
      }
    };

    btnAddItem.addEventListener('click', listener.bind(this));
  }

  handleBtnRowAction() {
    if (this.root === null) {
      return;
    }

    // Delete

    /*const handleDelete = ((idx: number) => {
      const item = this.items[idx]
      if (confirm(`Delete book "${item.title}"`)) {
        this.deleteItem(idx);
      }
    }).bind(this);*/

    /*const deleteBtns = this.root.querySelectorAll('[data-btn-delete]');
    deleteBtns.forEach((btn: Element) => {
      (btn as HTMLInputElement).onclick = (e: Event) => {
        if (e.target !== null) {
          const id = (e.target as HTMLElement).getAttribute('data-btn-delete');
          handleDelete(id);
        }
      }
    });*/

    // Edit

    //const editBtns = this.root.querySelectorAll('[data-btn-edit]');

    /*const handleUpdate = ((idx: number) => {
      const item = this.items[idx];
      let title = item.title;
      let status = item.status;
      const checkAllowUpdate = () => {
        title = window.prompt('Update item title', title) || title;
        status = window.prompt('Update item status', status) || status;
        return window.confirm(`Update item "${title}" with status "${status}"`);
      }
      const confirmBack = () => window.confirm('Are you sure to back?');
      let isBack = false;
      let confirmInput = checkAllowUpdate();

      while (!confirmInput && !isBack) {
        isBack = confirmBack();
        if (isBack) break;
        confirmInput = checkAllowUpdate();
      }

      if (!isBack){
        this.updateItem(idx,{
          title,
          status
        });
      }
    }).bind(this);*/

    /*editBtns.forEach((value: Element) => {
      (value as HTMLInputElement).onclick = (e: Event) => {
        if (e.target !== null) {
          let idx = (e.target as HTMLInputElement).getAttribute('data-btn-edit');
          if (idx !== null) {
            handleUpdate(parseInt(idx));
          }
        }
      }
    });*/
  }

  createItem(item: any) {
    this.items.push(item);
    this.renderItems();
    this.updateToolbar();
    this.persistItems();
  }

  updateItem(idx: number, item: any) {
    this.items[idx] = item;
    this.renderItems();
    this.updateToolbar();
    this.persistItems();
  }

  deleteItem(idx: number) {
    this.items.splice(idx, 1);
    this.renderItems();
    this.updateToolbar();
    this.persistItems();
  }

  deleteAllItems(arrIdx: string[]) {
    this.items = this.items.filter((item: any, idx: number) => !arrIdx.includes(idx.toString()));
    this.renderItems();
    this.updateToolbar();
    this.persistItems();
  }

  persistItems() {
    window.localStorage.setItem(itemsPrefix + this.rootId, JSON.stringify(this.items));
  }

  retrieveItems() {
    return JSON.parse(window.localStorage.getItem(itemsPrefix + this.rootId) || '[]');
  }
}

export default CrudTable;