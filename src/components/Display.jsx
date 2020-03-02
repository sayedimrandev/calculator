import React from "react"
import calculatorStyles from "../styles/calculator.module.css"

const Display = ({ result }) => {
  return (
    <section className={calculatorStyles.result}>
      <p> {result} </p>
    </section>
  )
}

export default Display
