export const modal = (function() {
    function modal(header, body) {
        this.headerBlock = header;
        this.bodyBlock = body;
    }

    function createBlock(data, style) {
        const div = document.createElement('div');
        Array.isArray(style)
            ? style.forEach(el => div.classList.add(el))
            : div.classList.add(style);
        div.innerHTML = data;

        return div;
    }

    function createFieldBlock(name, id, type = 'text') {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
    }

    function createButton(name, fn) {
        const btn = document.createElement('button');
        btn.innerHTML = name;
        btn.classList.add('modal_box_btn');
        btn.onclick = fn;

        return btn;
    }

    modal.prototype.render = function() {
        const app = document.querySelector('#app');

        const modalBackground = document.createElement('div');
        modalBackground.classList.add('dashboard__modal');
        modalBackground.onclick = function(ev) {
            if (ev.target.className === 'dashboard__modal') {
                app.removeChild(modalBackground);
            }
        };

        const modalWindow = document.createElement('div');
        modalWindow.classList.add('dash__modal_box');

        const header = createBlock(this.headerBlock, ['modal_box__header', 'mb-30']);
        const body = createBlock(this.bodyBlock, 'modal_box__body');
        const footer = createBlock();

        modalWindow.appendChild(header);
        modalWindow.appendChild(body);
        modalBackground.appendChild(modalWindow);
        app.appendChild(modalBackground);
    }

    return modal;
})();