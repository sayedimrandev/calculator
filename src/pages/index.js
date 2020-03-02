import React, { useState } from "react"
import Buttons from "../components/Buttons"
import Header from "../components/Header"
import Display from "../components/Display"
import global from "../styles/calculator.module.css"

const IndexPage = () => {
  const [result, setResult] = useState("")

  const onClick = button => {
    if (button === "=") {
      calculate()
    } else if (button === "c") {
      reset()
    } else if (button === "ce") {
      backSpace()
    } else {
      setResult(result + button)
    }
    console.log(button)
  }

  const calculate = () => {
    let checkResult = ""

    if (result.includes("---")) {
      checkResult = result.replace("--", "+")
    } else {
      checkResult = result
    }
    try {
      setResult((eval(checkResult) || "") + "")
    } catch (e) {
      setResult("Error")
    }
  }

  const reset = () => {
    setResult("")
  }

  const backSpace = () => {
    setResult(result.slice(0, -1))
  }

  return (
    <section className={global.backColor}>
      <Header />
      <Display result={result} />
      <Buttons onClick={onClick} />
    </section>
  )
}

export default IndexPage
