import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const myElem = (
  <p>
    이렇게 써도 되는거냐?
  </p>
)

const myCom = () => (
  <p>
    이렇게 써도 되는거냐?
  </p>
)


console.log(myElem, myCom(), <myCom />);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
