import React from 'react'
import './ImcFront.css'

export const ImcFront = () => {
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
                            />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="weight">Peso:
                            <input 
                                type="text" 
                                name='weight'
                                id='weight' 
                                placeholder='Exemplo 80,5'
                            />
                        </label>
                    </div>
                </div>
                <div className="action-control">
                    <button>Calcular</button>
                    <button>Limpar</button>
                </div>
            </form>
        </div>
    )
}
