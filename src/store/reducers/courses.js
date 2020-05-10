const INITIAL_STATE = {
    activeModule: '',
    activeLesson: '',
    activeVideo: '',
    modules: [
        { id: 1, title: 'Iniciando com React', 
            lessons: [
                { id: 1, title: 'Primeira Aula', url: 'https://www.youtube.com/embed/Iqi_hPEtfsc'},
                { id: 2, title: 'Segunda Aula', url: 'https://www.youtube.com/embed/BDf4fvubExc'},
                { id: 3, title: 'Terceira Aula', url: 'https://www.youtube.com/embed/HQldIDuCT4M'}
            ]
        },
        { id: 2, title: 'Aprendendo Redux', 
            lessons: [
                { id: 4, title: 'Quarta Aula', url: 'https://www.youtube.com/embed/8bhWnJPLDLw'},
                { id: 5, title: 'Quinta Aula', url: 'https://www.youtube.com/embed/btaKijaQyM'}
            ]
        }
    ]
    
};

export default function courses( state = INITIAL_STATE, action) {
    //  -> 'state' é o estado inicial da aplicação
    //      Vem vazio por default, portanto deve receber um 'initial state';

    //  -> 'action' é a alteração neste estado propagada pelo dispatch;

    console.log(action);

    if (action.type === 'TOGGLE_LESSON') {
        return { 
            ...state, 
            activeModule: action.module, 
            activeLesson: action.lesson,
            activeVideo: action.video
        }
    }

    return state;
}