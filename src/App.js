import React, { useState } from 'react';

import { Provider } from 'react-redux'
import store from './store'

import Sidebar from './components/Sidebar'
import Video from './components/Video'

import './App.css';

function App() {
  const [sideBar, setSideBar] = useState(false);
  
  function handleSidebar(){
    setSideBar( !sideBar );
  }

  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
            <button
              onClick = {handleSidebar}
              className={`navToggle ${sideBar ? "open" : null}`}
              >
              <span />
              <span />
              <span />
            </button>

          <Sidebar active={sideBar}/>
          <Video/>
        </header>
      </Provider>
    </div>
  );
}

export default App;
