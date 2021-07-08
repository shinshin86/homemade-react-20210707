import { createElement, render } from "./Didact";


const element = createElement(
  "div",
  { id: "foo" },
  createElement("h1", null, "hello"),
  createElement("p", null, createElement("b", null, "world"))
)

const container = document.getElementById("root");
render(element, container);