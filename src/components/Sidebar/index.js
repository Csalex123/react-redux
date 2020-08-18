import React from 'react';

import { connect } from 'react-redux';

/* Actions */
function toggleLesson(lesson, module) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    };
}

const SideBar = ({ modules, dispatch }) => (
    <aside>
        {
            modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => dispatch(toggleLesson(lesson, module))} >Selecionar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </aside>
);


export default connect(state => ({ modules: state.modules }))(SideBar);
