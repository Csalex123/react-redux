import { createStore } from 'redux';


const INITIAL_STATE = {
    activeLesson: {},
    activeModules: {},
    modules: [
        {
            id: 1,
            title: "React Redux",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" },
                { id: 3, title: "Terceira aula" },
                { id: 4, title: "Quarta aula" },
            ],


        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" },
                { id: 3, title: "Terceira aula" },
                { id: 4, title: "Quarta aula" },
            ]
        }
    ]
}

function reducer(state = INITIAL_STATE, action) {

    console.log('teste');

    if (action.type === "TOGGLE_LESSON") {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModules: action.module
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;