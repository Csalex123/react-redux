import { createStore } from 'redux';

function reducer() {
    return [
        {
            id: 1, title: "React Redux", lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" },
                { id: 3, title: "Terceira aula" },
                { id: 4, title: "Quarta aula" },
            ],


        },

        {
            id: 2, title: "Aprendendo Redux", lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" },
                { id: 3, title: "Terceira aula" },
                { id: 4, title: "Quarta aula" },
            ]
        }
    ]
}

const store = createStore(reducer);

export default store;