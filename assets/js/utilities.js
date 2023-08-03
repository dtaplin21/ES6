import { getIndex as Dom } from "./utilities.js"
console.log(Dom)
export const getIndex = () => {
    const wrapper = document.getElementById('wrapper');
    return parseInt(wrapper.dataset.index);
};
