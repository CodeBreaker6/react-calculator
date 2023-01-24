import React from 'react'
import { useState } from 'react'
import './style/main.css'

export default function Calculator() {
    const [result, setResult] = useState("")
    const [currentColor, setCurrentColor] = useState("")


    // This function handle button click and concatenate the button name to the result
    const handlerClick = (e) => {
        setResult(result.concat(e.target.name))
    }

    // This function sets the result to an empty string to clear the display
    const clear = () => {
        setResult("")
    }

    // This function removes the last character of the result
    const backspace = () => {
        setResult(result.slice(0, -1))
    }

    // This function evaluates the result and set it to the display
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        }
        catch (err) {
            setResult("syntax error")
        }
    }

    // This function toggles the background color between white and dark
    const darkMode = () => {
        if (currentColor === "#363533" || currentColor === "") {
            setCurrentColor("#ffffff")
            document.body.style.backgroundColor = "#ffffff";
        } else {
            setCurrentColor("#363533")
            document.body.style.backgroundColor = "#363533";
        }
    }

    return (
        <>
            <div class="form-switch text-center my-5">
                {/* This creates a checkbox with the id "mode" and a label for it. 
                The checkbox is checked if the currentColor state is "#363533" (dark mode) */}
                <input type="checkbox" id="mode" checked={currentColor === "#363533"} onClick={darkMode} class="form-check-input" />
                <label id='lableMode' for="mode" class="form-check-label"></label>
            </div>

            <div className={currentColor === "#363533" ? "dark-mode" : "light-mode"}>
                {/* This div gets the class "dark-mode" or "light-mode" based on the currentColor state */}
                <h1>Calculator</h1>
                <input className='calcInput' type={'text'} value={result} readOnly /><br />
                <div className='container'>
                    {/* These buttons get the class "dark-mode" or "light-mode" based on the currentColor state */}
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="1" onClick={handlerClick}>1</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="2" onClick={handlerClick}>2</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="3" onClick={handlerClick}>3</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="+" onClick={handlerClick}>+</button><br />
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="4" onClick={handlerClick}>4</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="5" onClick={handlerClick}>5</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="6" onClick={handlerClick}>6</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="-" onClick={handlerClick}>&ndash;</button><br />
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="7" onClick={handlerClick}>7</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="8" onClick={handlerClick}>8</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="9" onClick={handlerClick}>9</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="*" onClick={handlerClick}>&times;</button><br />
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="." onClick={handlerClick}>.</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="0" onClick={handlerClick}>0</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="=" onClick={calculate}>=</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="/" onClick={handlerClick}>&divide;</button><br />
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="C" onClick={clear}>C</button>
                    <button className={`btn ${currentColor === "#363533" ? "dark-mode" : "light-mode"}`} name="CE" onClick={backspace}>CE</button>
                </div>
            </div>
        </>
    )
}