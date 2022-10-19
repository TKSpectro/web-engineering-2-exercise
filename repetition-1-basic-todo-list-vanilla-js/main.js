function addItem() {
    let alreadyExisting = JSON.parse(localStorage.getItem('items'));
    if (!alreadyExisting) {
        alreadyExisting = [];
    }

    const input = document.getElementById('input').value;
    alreadyExisting.push({ id: alreadyExisting.length, value: input });

    localStorage.setItem('items', JSON.stringify(alreadyExisting));

    renderList();
}

function removeItem(id) {
    const items = JSON.parse(localStorage.getItem('items'));

    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);

    localStorage.setItem('items', JSON.stringify(items));

    renderList();
}

function renderList() {
    const listEl = document.getElementById('list');

    while (listEl.firstChild) {
        listEl.removeChild(listEl.lastChild);
    }

    const items = JSON.parse(localStorage.getItem('items'));
    if (!items) {
        return;
    }

    for (const item of items) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.value));
        listEl.appendChild(li);

        var button = document.createElement('button');
        button.appendChild(document.createTextNode('Remove'));
        button.onclick = function () {
            removeItem(items.findIndex((it) => it.id === item.id));
        };
        listEl.appendChild(button);
    }
}

function clearList() {
    localStorage.removeItem('items');
    renderList();
}

function initList() {
    localStorage.setItem(
        'items',
        JSON.stringify([
            { id: 0, value: 'Todo 1' },
            { id: 1, value: 'Todo 2' },
            { id: 2, value: 'Same' },
            { id: 3, value: 'Same' },
            { id: 4, value: 'Todo 5' },
            { id: 5, value: 'Todo 6' },
            { id: 6, value: 'Same' },
            { id: 7, value: 'Todo 8' },
            { id: 8, value: 'Todo 9' },
        ])
    );

    renderList();
}
