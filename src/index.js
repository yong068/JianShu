import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GrobalStyle} from './style';
import {IconGrobalStyle} from './static/iconfont/iconfont.js';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <React.Fragment>
        <App />
        <IconGrobalStyle />
        <GrobalStyle />
    </React.Fragment>
, document.getElementById('root'));
serviceWorker.unregister();
