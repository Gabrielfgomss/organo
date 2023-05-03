import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const GlobalContext = createContext();
GlobalContext.displayName = "Times";

export const GlobalProvider = ({ children }) => {

    const [times, setTimes] = useState(() => {
        const lista = localStorage.getItem('times');
        const listaDeTimes = JSON.parse(lista);

        return listaDeTimes || [
            {
                id: uuidv4(),
                nome: 'Front-End',
                cor: '#82CFFA',
            },
            {
                id: uuidv4(),
                nome: 'Back-End',
                cor: '#57C278',
            },
            {
                id: uuidv4(),
                nome: 'Design',
                cor: '#DB6EBF',
            },
            {
                id: uuidv4(),
                nome: 'Mobile',
                cor: '#FFBA05',
            },
            {
                id: uuidv4(),
                nome: 'Data Science',
                cor: '#A6D157',
            }
        ];
    })

    useEffect(() => {
        localStorage.setItem('times', JSON.stringify(times));
    }, [times]);

    function deletarTime(id, programadorDoTime) {
        
        setTimes(times.filter(time => time.id !== id));
        setProgramadores(programadores.filter(() => 
            !programadores.includes(programadorDoTime)
        ))
}

function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
        if (time.id === id) {
            time.cor = cor;
        }
        return time
    }));
}

function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
}

const [programadores, setProgramadores] = useState(() => {
    const programadorCadastrado = localStorage.getItem('programadores');
    const initialValue = JSON.parse(programadorCadastrado);
    return initialValue || [];
});

useEffect(() => {
    localStorage.setItem('programadores', JSON.stringify(programadores));
}, [programadores]);

const aoNovoProgramadorAdicionado = (programador) => {
    setProgramadores([...programadores, programador])
}

function deletarProgramador(id) {
    setProgramadores(programadores.filter(programador => programador.id !== id));
}

function resolverFavorito(id) {
    setProgramadores(programadores.map(programador => {
        if (programador.id === id) {
            programador.favorito = !programador.favorito
        };
        return programador
    }))
}

return (
    <GlobalContext.Provider
        value={{
            times,
            setTimes,
            deletarTime,
            mudarCorDoTime,
            cadastrarTime,
            programadores,
            setProgramadores,
            aoNovoProgramadorAdicionado,
            deletarProgramador,
            resolverFavorito
        }}
    >
        {children}
    </GlobalContext.Provider>
)
}