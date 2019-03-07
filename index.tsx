import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import triage from './Reducers/rootReducer';

const store = createStore(
 triage,
 // eslint-disable-next-line no-underscore-dangle, no-undef
 (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = () => (
 <Provider store={store}>
   <App />
 </Provider>
);

render(
  <Index />,
  document.getElementById('root') as HTMLElement
);

// eslint-disable-next-line no-undef
// render(<Index />, document.getElementById('index'));


// import * as React from 'react';
// import { render } from 'react-dom';
// // import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import App from './App';
// import triage from './Reducers';

// const store = createStore(
//   triage,
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
// );

// // const Index = () => (
// //   // <Provider store={store}>
// //     <App />
// //   // </Provider> 
// // );
// // render(<Index />, document.getElementById('index'));
