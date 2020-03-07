export const modal = (function() {
    function modal(header, body) {
        this.headerBlock = header;
        this.bodyBlock = body;
    }

    function createBlock(data, style, fn = null) {
        const div = document.createElement('div');
        Array.isArray(style)
            ? style.forEach(el => div.classList.add(el))
            : div.classList.add(style);

        if (typeof data === 'string') {
            div.innerHTML = data;
        } else if (Array.isArray(data)) {
            data.forEach(el => div.appendChild(el));
        } else {
            div.appendChild(data);
        }

        if (typeof fn === 'function') {
            div.onclick = fn;
        }

        return div;
    }

    function createFieldBlock(name, id, type = 'text') {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
    }

    function createButton(name, fn, style) {
        const btn = document.createElement('button');
        btn.innerHTML = name;

        Array.isArray(style)
            ? style.forEach(el => btn.classList.add(el))
            : btn.classList.add(style);

        btn.onclick = fn;

        return btn;
    }

    modal.prototype.render = function() {
        const app = document.querySelector('#app');

        const header = createBlock(this.headerBlock, ['modal_box__header', 'mb-30']);
        const body = createBlock(this.bodyBlock, 'modal_box__body');

        const cancelBtn = createButton('Отменить', () => {
            app.removeChild(modalBackground);
        }, ['btn', 'modal_box_btn', 'gray_btn', 'half-width']);
        const saveBtn = createButton('Сохранить', () => {
            app.removeChild(modalBackground);
            console.log('Saved!');
        }, ['btn', 'modal_box_btn', 'blue_btn', 'half-width']);
        const footer = createBlock([cancelBtn, saveBtn], 'modal_box__footer');
        
        const modalWindow = createBlock(
            [header, body, footer],
            'dash__modal_box'
        );

        const modalBackground = createBlock(
            modalWindow, 'dashboard__modal', (ev) => {
                if (ev.target.className === 'dashboard__modal') {
                    app.removeChild(modalBackground);
                }
            }
        );
        
        // const footer = createBlock();

        app.appendChild(modalBackground);
    }

    return modal;
})();