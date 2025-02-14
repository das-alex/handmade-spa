const button = (function() {
    function button(name, icon, action, style, selector, disabled = false) {
        this.name = name;
        this.icon = typeof icon === 'function' ? icon('btn_icon') : '';
        this.action = action;
        this.style = `btn ${style || ''} ${selector || ''}`.trim();
        this.disabled = disabled;
    }

    button.prototype.render = function() {
        const element = document.createElement('button');
        element.innerHTML = this.name + this.icon;
        this.style.split(' ').forEach(
            style => style !== ' '
                ? element.classList.add(style)
                : false
        );
        element.onclick = this.action;
        element.disabled = this.disabled;

        return element;
    }

    return button;
})();

export default button;

