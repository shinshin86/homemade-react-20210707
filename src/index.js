import { createElement, render } from "./Didact";

/** @jsxRuntime classic */
/** @jsx createElement */
const App = props => (
  <div>
    <h1>Hi {props.name}</h1>
    <ul>
      <li>aaa</li>
      <li>bbb</li>
      <li>ccc</li>
    </ul>
  </div>
)

const element = <App name="foo" />

const container = document.getElementById("root")

render(element, container)