import { transliterateAlphabet } from '../constants';

export const makeNodes = (html) => {
    return document.createRange().createContextualFragment(html);
}

export const appendTo = (appendTo, components) => {
    const node = document.querySelector(`.${appendTo}`);
    if (node.children.length === 0) {
        components.forEach(component => node.appendChild(component));
    } else {
        updateIn(appendTo, components);
    }
}

export const updateIn = (updateIn, components) => {
    const node = document.querySelector(`.${updateIn}`);
    components.forEach((item, i) => {
        node.replaceChild(item, node.children[i]);
    });
}

export const updateIt = (updateIt, component) => {
    const node = document.querySelector(`.${updateIt}`);
    node.parentNode.replaceChild(component, node);
}

export const clearfix = () => {
    return makeNodes('<div class="clearfix"></div>');
}

export const transliterate = (text) => {
    return text.split('').map(function(char) { 
        return transliterateAlphabet[char] || char; 
    }).join("");
}

export const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const getParentsTree = (currentNode, depth) => {
    let current = currentNode;
    let tree = [];
    while (depth) {
        tree.push(current);
        current = current.parentNode;
        depth--;
    }
    return tree;
};