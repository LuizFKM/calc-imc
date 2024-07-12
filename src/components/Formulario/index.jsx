import { useState } from "react"

import styles from './Formulario.module.css'

const Formulario = ({setImc}) => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0);

    const calculaImc = () => {
        const calculo = peso / (altura * altura)
        return setImc(calculo.toFixed(2))
    }

    return (
        <div className="container">
            <form className={styles.formulario}>
                <input className={styles.formulario__input} type="number" placeholder="Digite seu peso" onChange={({target}) => setPeso(parseFloat(target.value))} onBlur={calculaImc}/>
                <input className={styles.formulario__input} type="number" placeholder="Digite sua altura"  onChange={({target}) => setAltura(parseFloat(target.value))} onBlur={calculaImc}/>
            </form>

        </div>
    )
}
export default Formulario