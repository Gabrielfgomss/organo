import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children?: ReactElement
    action: string
    aoRemoverForm?: () => void
}

const Botao = (props: BotaoProps) => {
    
    return (
        <button className={`${props.action} botao}`} onClick={props.aoRemoverForm}>
            {props.children}
        </button>
    )
}

export default Botao