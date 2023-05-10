import './Campo.css'

interface CampoProps {
    placeholder: string
    aoAlterado: (valor: string) => void
    label: string
    type?: string
    valor: string
    obrigatorio: boolean
}

const Campo = ({placeholder, aoAlterado, label, type = 'text', valor, obrigatorio = false}: CampoProps) => {

    const placeholderModificado = `${placeholder}...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label >
                {label}
            </label>
            <input
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificado}/>
        </div>
    )
}

export default Campo