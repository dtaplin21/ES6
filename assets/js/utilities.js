import { getIndex as Dom } from "./utilities.js"
export const getIndex = () => {
    const wrapper = document.getElementById('wrapper');
    return parseInt(wrapper.dataset.index);
};
