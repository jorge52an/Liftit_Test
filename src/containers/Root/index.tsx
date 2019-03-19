import React from 'react';
import { Store } from "redux";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { State, Action } from "../../reducers";
import App from '../App';

interface StoreParameter {
  store: Store<State, Action>
}

const Root = (parameter: StoreParameter) => {
  const { store } = parameter;

  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
}

export default Root;