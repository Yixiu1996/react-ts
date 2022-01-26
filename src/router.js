import React from "react";
import App from './App'
import Login from './Login'
import TodoList from './TodoList'
import { HashRouter, Routes, Switch, Redirect, Route } from "react-router-dom";

function Router() {
  return <div className="App">
    <HashRouter>
      <App>
        <Switch>
          <Routes>
            <Route exact path="/" render={() => <Redirect to="/login"></Redirect>}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/todoList" component={TodoList}></Route>
          </Routes>
        </Switch>
        {/* <ul>
          <li><Link to="/login">登录页面</Link></li>
          <li><Link to="/todoList">TODO页面</Link></li>
        </ul>
        <Routes>
          <Route path="/login" component={Login}></Route>
          <Route path="/todoList" component={TodoList}></Route>
        </Routes> */}
      </App>
    </HashRouter>
  </div>
}
export default Router;