const button = (function() {
    function button(name, icon, action, style) {
        this.name = name;
        this.icon = typeof icon === 'function' ? icon('btn_icon') : '';
        this.action = action;
        this.style = `btn ${style || ''}`;
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

        return element;
    }

    return button;
})();

export default button;

