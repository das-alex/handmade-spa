import { makeNodes } from "../__lib";

export const dropdown = (function() {
    function dropdown(props) {

    }

    function markup() {
        const select = makeNodes(`
            <div class="form_row mb-30">
                <label for="${props.id}">${props.name}</label>
                <select class="mt-8" id="${props.id}" name="${props.id}">
                    
                </select>
            </div>
        `);
    }

    dropdown.prototype.render = function() {

    }
})();