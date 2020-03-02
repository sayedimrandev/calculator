import React from "react"
import calculatorStyles from "../styles/calculator.module.css"

const Buttons = ({ onClick }) => {
  return (
    <React.Fragment>
      <section className={calculatorStyles.container}>
        <section className={calculatorStyles.buttons}>
          <button
            className={calculatorStyles.btn}
            name="("
            onClick={e => onClick(e.target.name)}
          >
            (
          </button>
          <button
            className={calculatorStyles.btn}
            name="ce"
            onClick={e => onClick(e.target.name)}
          >
            CE
          </button>
          <button
            className={calculatorStyles.btn}
            name=")"
            onClick={e => onClick(e.target.name)}
          >
            )
          </button>
          <button
            className={calculatorStyles.btn}
            name="c"
            onClick={e => onClick(e.target.name)}
          >
            C
          </button>
        </section>
        <section className={calculatorStyles.buttons}>
          <button
            className={calculatorStyles.btn}
            name="9"
            onClick={e => onClick(e.target.name)}
          >
            9
          </button>
          <button
            className={calculatorStyles.btn}
            name="8"
            onClick={e => onClick(e.target.name)}
          >
            8
          </button>
          <button
            className={calculatorStyles.btn}
            name="7"
            onClick={e => onClick(e.target.name)}
          >
            7
          </button>
          <button
            className={calculatorStyles.btn}
            name="+"
            onClick={e => onClick(e.target.name)}
          >
            +
          </button>
        </section>
        <section className={calculatorStyles.buttons}>
          <button
            className={calculatorStyles.btn}
            name="6"
            onClick={e => onClick(e.target.name)}
          >
            6
          </button>
          <button
            className={calculatorStyles.btn}
            name="5"
            onClick={e => onClick(e.target.name)}
          >
            5
          </button>
          <button
            className={calculatorStyles.btn}
            name="4"
            onClick={e => onClick(e.target.name)}
          >
            4
          </button>
          <button
            className={calculatorStyles.btn}
            name="-"
            onClick={e => onClick(e.target.name)}
          >
            -
          </button>
        </section>
        <section className={calculatorStyles.buttons}>
          <button
            className={calculatorStyles.btn}
            name="3"
            onClick={e => onClick(e.target.name)}
          >
            3
          </button>
          <button
            className={calculatorStyles.btn}
            name="2"
            onClick={e => onClick(e.target.name)}
          >
            2
          </button>
          <button
            className={calculatorStyles.btn}
            name="1"
            onClick={e => onClick(e.target.name)}
          >
            1
          </button>
          <button
            className={calculatorStyles.btn}
            name="*"
            onClick={e => onClick(e.target.name)}
          >
            *
          </button>
        </section>
        <section className={calculatorStyles.buttons}>
          <button
            className={calculatorStyles.btn}
            name="0"
            onClick={e => onClick(e.target.name)}
          >
            0
          </button>
          <button
            className={calculatorStyles.btn}
            name="."
            onClick={e => onClick(e.target.name)}
          >
            .
          </button>
          <button
            className={calculatorStyles.btn}
            name="="
            onClick={e => onClick(e.target.name)}
          >
            =
          </button>
          <button
            className={calculatorStyles.btn}
            name="/"
            onClick={e => onClick(e.target.name)}
          >
            %
          </button>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Buttons
