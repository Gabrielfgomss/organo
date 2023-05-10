import { ITimes } from '../../shared/interfaces/ITimes'
import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void,
    valor: string,
    label: string,
    obrigatorio: Boolean,
    itens: ITimes[]
}

const ListaSuspensa = ({label, aoAlterado, obrigatorio = false, valor, itens}:ListaSuspensaProps) => {
    console.log(itens)
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={(evento) => {
                aoAlterado(evento.target.value)}} 
                required={obrigatorio} 
                value={valor}>
                <option value=''></option>
                {itens.map(item => <option key={item.id}>{item.nome}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa