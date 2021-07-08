import { createElement, render } from "./Didact";

/** @jsxRuntime classic */
/** @jsx createElement */
const element = (
  <div id="foo">
    <h1>Hello</h1>
    <h2>World</h2>
    <div>
      <p>aaaaa</p>
      <p>bbbbb</p>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
      </ul>
    </div>
  </div>
)

const container = document.getElementById("root");
render(element, container);