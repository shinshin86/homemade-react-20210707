import { createElement, render, useState } from "./Didact";

/** @jsxRuntime classic */
/** @jsx createElement */
const App = () => {
  const [count, setCount] = useState(1)

  return (
    <h1 onClick={() => setCount(count => count + 1)}>
      Count: {count}
    </h1>
  )
}

const element = <App name="foo" />

const container = document.getElementById("root")

render(element, container)