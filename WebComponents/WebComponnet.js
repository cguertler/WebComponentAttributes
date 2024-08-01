let backgroundColor = "black";
const template = document.createElement("template");
template.innerHTML = `
<div class="square"></div>
`;

class SswSquare extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        backgroundColor = this.getAttribute("backgroundcolor");
        const style = document.createElement("style");
        style.innerHTML = `
            .square{
                height: 50px;
                width: 50px;
                border: solid black 2px;
                background-color: ${backgroundColor};
            }`;
        console.log("style", style);
        shadow.appendChild(style.cloneNode(true));      
        shadow.appendChild(template.content.cloneNode(true));
    }
}
customElements.define("ssw-square", SswSquare);