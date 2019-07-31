import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { RootContainer } from './containers/rootContainer'
import { configureStore } from './configureStore';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
