export const clearfix = (renderTo) => {
    const div = document.createElement('div');
    div.classList.add('clearfix');
    document.querySelector(renderTo).appendChild(div);
}