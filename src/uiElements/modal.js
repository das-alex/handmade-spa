export const modal = (function() {
    function modal(header, body) {
        this.headerBlock = header;
        this.bodyBlock = body;
    }

    function createBlock(data, style) {
        const div = document.createElement('div');
        div.classList.add(style);
        div.appendChild(data);

        return div;
    }

    function createButton(name, fn) {
        const btn = document.createElement('button');
        btn.innerHTML = name;
        btn.classList.add('');
        btn.onclick = fn;

        return btn;
    }

    modal.prototype.render = function() {
        const modalWindow = document.createElement('div');
        modalWindow.classList.add('dash__modal_box');

        const header = createBlock(this.headerBlock, 'modal_box__header');
        const body = createBlock(this.bodyBlock, 'modal_box__body');
        const footer = createBlock();
    }

    return modal;
})();