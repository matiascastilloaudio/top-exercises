// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import Icon from "./icon.jpg";

console.log(greeting);

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');


    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());