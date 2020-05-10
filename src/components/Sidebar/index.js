import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import toggleLesson from '../../store/actions/courses';

// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// // Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function Sidebar({ active }) {
    const modules = useSelector(state => state.courses.modules);
    const dispatch = useDispatch();

    function toggle(module, lesson, video){
        dispatch(toggleLesson(module, lesson, video))
    }
    
    return (
        <aside style={ active ? {display: 'block'} : { display: 'none' } }>
            {
                modules.map(module => (
                    <div key={module.id}>
                        <strong>
                            {module.title}
                        </strong>

                        <ul>
                            {
                                module.lessons.map(lesson => (
                                    <li key={lesson.id}>
                                        {lesson.title}
                                        <button onClick={() => toggle(module, lesson, lesson.url)}>Selecionar</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }

            {/* <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
                componentClass='dale'
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home" >
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FontAwesomeIcon icon={faCoffee} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav> */}

        </aside>
    )
}