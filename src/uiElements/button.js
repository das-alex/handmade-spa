const button = (function() {
    function button(name, icon, action, style) {
        this.name = name;
        this.icon = icon('btn_icon');
        this.style = `btn ${style || ''}`.trim();
        this.action = action;
    }

    button.prototype.render = function() {
        const element = document.createElement('button');
        element.innerHTML = this.name + this.icon;
        element.classList.add(this.style);
        element.onclick = this.action;

        return element;
    }

    return button;
})();

export default button;

