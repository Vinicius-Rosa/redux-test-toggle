import React from 'react';

import { useSelector } from 'react-redux';

import "./style.css";

export default function Video() {
    const currentModule = useSelector( state => state.courses.activeModule );
    const currentLesson = useSelector( state => state.courses.activeLesson );
    const currentVideo = useSelector( state => state.courses.activeVideo );

    return (
        <div className='video-container'>
            <strong>Módulo: {currentModule.title} </strong>
            <span>Aula: {currentLesson.title} </span>
            <br/>
            <iframe 
                width="560" 
                height="315" 
                src={ currentVideo }
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowfullscreen
            ></iframe>
        </div>
    )
}
