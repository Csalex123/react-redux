import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModules }) => {
    return (
        <div style={{paddingBottom: "30px"}}>
            <strong>Módulo {activeModules.title}</strong> <br />
            <span>Aula {activeLesson.title}</span>
        </div>
    );
};

export default connect(state => ({
    activeLesson: state.activeLesson,
    activeModules: state.activeModules,
}))(Video);