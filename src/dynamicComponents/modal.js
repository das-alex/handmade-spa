import { makeNodes } from "../__lib";

export const modal = (function() {
    function modal(props) {
        this.header = props.header || 'Not setted header';
        this.body = props.hasOwnProperty('body')
            ? props.body
            : undefined;
        this.buttons = props.buttons;
        this.fields = props.hasOwnProperty('fields')
            ? props.fields
            : undefined;
    }

    function createBlock(data, style, fn = null) {
        const div = document.createElement('div');
        Array.isArray(style)
            ? style.forEach(el => div.classList.add(el))
            : div.classList.add(style);

        if (typeof data === 'string') {
            div.innerHTML = data;
        } else if (Array.isArray(data)) {
            data.forEach(el => {
                typeof el !== 'string' && div.appendChild(el)
            });
        } else {
            div.appendChild(data);
        }

        if (typeof fn === 'function') {
            div.onclick = fn;
        }

        return div;
    }

    function createFieldBlock(props) {
        const inputRow = makeNodes(`
            <div class="form_row mb-30">
                <label for="${props.id}">${props.name}</label>
                <input class="mt-8" id="${props.id}" name="${props.id}" type="${props.type || 'text'}">
            </div>
        `);

        const inputNode = inputRow.getElementById(props.id);

        if (props.hasOwnProperty('fn')) {
            props.fn.forEach(item => {
                inputNode.addEventListener(item.eventType, item.fn);
            });
        }

        return inputRow;
    }

    function createButton(props) {
        const button = makeNodes(`
            <button class="${buttonsStyle[props.type].join(' ')}">
                ${props.name}
            </button>
        `);

        button
            .querySelector('button')
            .addEventListener('click', () => {
                if (props.hasOwnProperty('fn')) {
                    props.fn();
                }
                this.close();
            });

        return button;
    }

    const headerStyle = ['modal_box__header', 'mb-30'];
    const bodyStyle = ['modal_box__body', 'mb-50'];
    const footerStyle = 'modal_box__footer';
    const buttonsStyle = {
        'grayBtn': ['btn', 'modal_box_btn', 'gray_btn', 'half-width', 'float_l'],
        'blueBtn': ['btn', 'modal_box_btn', 'blue_btn', 'half-width', 'float_l']
    };

    modal.prototype.close = function() {
        const app = document.querySelector('#app');
        const modal = document.querySelector('.dashboard__modal');
        app.removeChild(modal);
    }

    modal.prototype.render = function() {
        const self = this;
        const app = document.querySelector('#app');
        const presets = {
            'cancel': {
                name: 'Отменить',
                type: 'grayBtn'
            }
        };

        let header = '';
        let body = '';
        let fields = '';
        let buttons = '';

        header = createBlock(this.header, headerStyle);
        if (this.body !== undefined) {
            body = createBlock(this.body, bodyStyle);
        }
        if (this.fields !== undefined) {
            fields = this.fields.map(field => {
                return createFieldBlock(field);
            });
            fields = createBlock(fields, bodyStyle);
        }
        buttons = this.buttons.map(button => {
            if (button.hasOwnProperty('preset')) {
                return createButton.call(this, presets[button.preset]);
            }
            return createButton.call(this, button);
        });
        footer = createBlock(buttons, footerStyle);
        
        const modalWindow = createBlock(
            [header, body, fields, footer],
            'dash__modal_box'
        );

        const modalBackground = createBlock(
            modalWindow, 'dashboard__modal', (ev) => {
                if (ev.target.className === 'dashboard__modal') {
                    self.close();
                }
            }
        );

        app.appendChild(modalBackground);
    }

    return modal;
})();