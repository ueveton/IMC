import React from 'react'
import { Button } from './Button'
import { useState } from 'react'
import './ImcFront.css'

export const ImcFront = () => {

    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

    const clearForm =(e) => {
        e.preventDefault();
        setWidth("");
        setHeight("");
    }

    return (
        <div id='front-container'>
            <h2>Calculadora de IMC</h2>
            <form id='imc-form'>
                <div className='form-inputs'>
                    <div className='form-control'>
                        <label htmlFor="height">Altura:
                            <input 
                                type="text" 
                                name='height'
                                id='height' 
                                placeholder='Exemplo 1,75'
                                onChange={(e) => setHeight(e.target.value)}
                                value={height}
                            />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="width">Peso:
                            <input 
                                type="text" 
                                name='width'
                                id='width' 
                                placeholder='Exemplo 80,5'
                                onChange={(e) => setWidth(e.target.value)}
                                value={width}
                            />
                        </label>
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" />
                    <Button id="clear-btn" text="Limpar" action={clearForm}/>
                </div>
            </form>
        </div>
    )
}
