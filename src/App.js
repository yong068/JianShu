import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MainHeader from "./common/header/index";
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
// import MainFooter from "./view/main-footer";
// import RouterIndex from "./router/index";
class App extends Component {
  render(){
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <div>
      <MainHeader />
        <Route path = '/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/write' exact component={Write}></Route>
      	<Route path='/detail/:id' exact component={Detail}></Route>
      </div>
      </BrowserRouter>
    </Provider>
    )
  }
}
export default App;
