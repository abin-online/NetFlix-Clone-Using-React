import React from 'react';
import Body from './components/Body';
import './App.css';
import { Provider } from 'react-redux';
import appStore from './util/appStore'; // Ensure you are importing the appStore from the correct file

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
