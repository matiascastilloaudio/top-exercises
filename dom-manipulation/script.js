const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPara = document.createElement("p");

redPara.style.cssText = "color: red";
redPara.textContent = "Hey, I'm red!";

container.appendChild(redPara);

const blueH3 = document.createElement("h3");
blueH3.style.cssText = "color: blue"
blueH3.textContent = "Hey, I'm blue!";

container.appendChild(blueH3);
const pinkDiv = document.createElement("div");
pinkDiv.classList.add("pinkDiv");
pinkDiv.style.padding = "10px";
pinkDiv.style.border = "2px solid black";
pinkDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

pinkDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";

pinkDiv.appendChild(p);

container.appendChild(pinkDiv);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

