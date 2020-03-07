import { transliterateAlphabet } from '../constants';

export const makeNodes = (html) => {
    return document.createRange().createContextualFragment(html);
}

export const appendTo = (appendTo, components) => {
    const node = document.querySelector(`.${appendTo}`);
    components.forEach(component => node.appendChild(component));
}

export const clearfix = () => {
    return makeNodes('<div class="clearfix"></div>');
}

export const transliterate = (text) => {
    return text.split('').map(function(char) { 
        return transliterateAlphabet[char] || char; 
    }).join("");
}