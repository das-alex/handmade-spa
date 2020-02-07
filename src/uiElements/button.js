const button = (function() {
    function button(name, icon, action, style) {
        this.name = name;
        this.icon = icon('btn_icon');
        this.style = `btn ${style || ''}`;
        this.action = action;
    }

    button.prototype.render = function() {
        const el = document.createElement('button');
        el.textContent = this.name + this.icon;
        el.classList.add(this.style);
        el.onclick = this.action;

        return el;
    }

    return button;
})();

export default button;

