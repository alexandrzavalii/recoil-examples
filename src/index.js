import React from 'react';
import ReactDOM from 'react-dom';
import {RecoilRoot} from 'jared-recoil';

import './index.css';
import Example from './Example7-selectorFamily';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
          <Example />
      </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
