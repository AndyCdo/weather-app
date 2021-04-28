import React, { useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from "vanta/dist/vanta.clouds.min"
import * as THREE from "three"

const WelcomeScreen = ({children}) => {
    const myRefDiv= useRef(null) //valor inicial
    const [vanta, setVanta] = useState(0) // vanta va a ser icializado en 0
    //En la primera renderizacion "myRefDiv.current" es igual
    // a "nulo", el valor inicial 
    console.log("myRefDiv.current", myRefDiv.current)

    useEffect(() => {
        console.log("myRefDiv.current (en useEffect)", myRefDiv.current)

        if (vanta === 0){
            //vanta === 0, lo miso que vanta === false
            // aun mas corto !vanta
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))

            console.log("Establezco vanta a un valor diferente de 0")
        }
        // al salir de la pantalla detenga el efecto
        // y des-asociar todos los recursos (div + vanta effec)

        return () => {
            //dentro de esta funcion se va a realizar la tarea
            //de destruir los recursos tomados por "vanta"

            if (vanta ) {
                vanta.destroy()
                console.log("Libero los recursos")
            }
        }
    }, [vanta])



    return (
        <div className= "full" ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
