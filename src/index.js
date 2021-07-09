import { createElement, render } from "./Didact";

const container = document.getElementById("root")

const updateValue = e => {
  rerender(e.target.value)
}

const rerender = value => {
  /** @jsxRuntime classic */
  /** @jsx createElement */
  const element = (
    <div>
      <input onInput={updateValue} value={value} />
      <h2>Hello {value}</h2>
    </div>
  )
  render(element, container)
}

rerender("World")