import { useState } from "react";

function Calculator() {

    const [display1, setDisplay1] = useState(""); //lenght 32
    const [display2, setDisplay2] = useState(""); //lenght 16

    function addChar(tecla) {
        if (display1 == 0) {
            setDisplay1(tecla);
        } else {
            display1.length <= 32 && display2 != "Error! " ? setDisplay1(display1 + tecla) : <></>;
        }
    }

    const reiniciar = () => {
        setDisplay1("");
        setDisplay2("");
    }

    const borrar = () => {
        if (display2 != "Error!") {
            setDisplay1(display1.slice(0, -1));
        } else {
            setDisplay2("0");
        }
    }

    const igual = () => {
        try {
            const res = eval(display1)
            setDisplay2(res.toString());
            setDisplay1(res.toString());
        } catch (error) {
            setDisplay1("0");
            setDisplay2("Error!");
        }
    }

    return (
        <>
            <div className="calculadora-final">
                <div className="container-display">
                    <div className="display">
                        <span id="display1">{display1 ? display1 : "0"}</span>
                    </div>
                    <div className="display">
                        <span id="display2">{display2 ? display2 : "0"}</span>
                    </div>
                </div>

                <div className="container-calculator">
                    <button onClick={reiniciar} className="C">C</button>
                    <button onClick={borrar} className="operators">◄</button>
                    <button onClick={() => addChar("%")} className="operators">%</button>
                    <button onClick={() => addChar("/")} className="operators">/</button>
                    <button onClick={() => addChar("7")} className="number">7</button>
                    <button onClick={() => addChar("8")} className="number">8</button>
                    <button onClick={() => addChar("9")} className="number">9</button>
                    <button onClick={() => addChar("*")} className="operators">x</button>
                    <button onClick={() => addChar("4")} className="number">4</button>
                    <button onClick={() => addChar("5")} className="number">5</button>
                    <button onClick={() => addChar("6")} className="number">6</button>
                    <button onClick={() => addChar("-")} className="operators">-</button>
                    <button onClick={() => addChar("1")} className="number">1</button>
                    <button onClick={() => addChar("2")} className="number">2</button>
                    <button onClick={() => addChar("3")} className="number">3</button>
                    <button id="mas" onClick={() => addChar("+")} className="operators">+</button>
                    <button onClick={() => addChar(".")} className="number">.</button>
                    <button onClick={() => addChar("0")} className="number">0</button>
                    <button onClick={igual} className="operators">=</button>
                </div>
            </div>
        </>
    );
};

export default Calculator;