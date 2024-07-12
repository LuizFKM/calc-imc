import { useEffect, useState } from 'react';
import styles from './Tabela.module.css';

const Tabela = ({ imc }) => {
    const [calculando, setEstaCalculando] = useState(true)

    useEffect(() => {
        setEstaCalculando(true)
        setTimeout(() => {
            setEstaCalculando(false);
        }, 5000)
    }, [imc])
    
    return (
        <div className='container'>
            {calculando && (
                <h1 className={styles.calculando__imc}>Calculando IMC...</h1>
            )}
            {!calculando &&
                <table className={styles.tabela}>
                    <thead className={styles.tabela__header}>
                        <tr>
                            <th className={styles.tabela__item}>IMC (kg/m2)</th>
                            <th className={styles.tabela__item}>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                            {imc && (
                                <tr>
                                <td className={styles.tabela__resultado} colSpan="2">
                                    <>Seu IMC é de {imc}</>
                                </td>
                            </tr>
                            )}
                        <tr>
                            <td className={`${styles.tabela__item} ${imc <16.9 && styles.tabela__item__active}`}>Menor que 16,9</td>
                            <td className={`${styles.tabela__item} ${imc <16.9 && styles.tabela__item__active}`}>Muito abaixo do peso</td>
                        </tr>
                        <tr>
                            <td className={`${styles.tabela__item} ${imc >=17 && imc <=  18.4 && styles.tabela__item__active}`}>17 a 18,4</td>
                            <td className={`${styles.tabela__item} ${imc >=17 && imc <=  18.4 && styles.tabela__item__active}`}>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td className={`${styles.tabela__item} ${imc >=18.5 && imc <=  24.9 && styles.tabela__item__active}`}>18,5 a 24,9</td>
                            <td className={`${styles.tabela__item} ${imc >=18.5 && imc <=  24.9 && styles.tabela__item__active}`}>Peso normal</td>
                        </tr>
                        <tr>
                            <td className={`${styles.tabela__item} ${imc >=25 && imc <= 29.9 && styles.tabela__item__active}`}>25 a 29,9</td>
                            <td className={`${styles.tabela__item} ${imc >=25 && imc <= 29.9 && styles.tabela__item__active}`}>Acima do peso</td>
                        </tr>
                        <tr>
                            <td className={`${styles.tabela__item} ${imc >=30 && imc <= 34.9 && styles.tabela__item__active}`}>30 a 34,9</td>
                            <td className={`${styles.tabela__item} ${imc >=30 && imc <= 34.9 && styles.tabela__item__active}`}>Obesidade grau I</td>
                        </tr>
                        <tr>
                            <td className={`${styles.tabela__item} ${imc >=35 && imc <= 40 && styles.tabela__item__active}`}>35 a 40</td>
                            <td className={`${styles.tabela__item} ${imc >=35 && imc <= 40 && styles.tabela__item__active}`}>Obesidade grau II</td>
                        </tr>
                        <tr>
                            <td className={`${styles.tabela__item} ${imc > 40 && styles.tabela__item__active}`}>Maior que 40</td>
                            <td className={`${styles.tabela__item} ${imc > 40 && styles.tabela__item__active}`}>Obesidade grau III</td>
                        </tr>
                    </tbody>
                </table>}
        </div>
    );
};

export default Tabela;
