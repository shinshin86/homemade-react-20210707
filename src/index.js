import { createElement, render } from "./Didact";

const generateDeepElement = (depth) => {
  depth = depth - 1;
  
  if(depth < 1) {
    return createElement("p", null, 'HELLO!!!!!')
  } else {
    return createElement("div", null, generateDeepElement(depth))
  }
}

const element = createElement(
  "div",
  { id: "foo" },
  createElement("h1", null, "hello"),
  createElement("p", null, createElement("b", null, "world")),
  generateDeepElement(10)
)

const container = document.getElementById("root");
render(element, container);