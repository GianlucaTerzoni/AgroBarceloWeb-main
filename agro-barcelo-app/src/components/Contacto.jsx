import React from 'react'
import { Datos } from './Datos'
import Formulario from './Formulario'
import './Contacto.css'

export const Contacto = () => {
  return (
    <div className='container'>
        
            <div className='derecha'>
                <div className='formulario'>
                    <Formulario />
                    </div>
                </div>  

            <div className='izquierda'>
                <div className='datos'>
                    <Datos />
                    </div>
                </div>
        

    </div>
  )
}
