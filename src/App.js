import React from "react";
import Login from './Login'
import TodoList from './TodoList'
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return <div className="App">
    <HashRouter>
      <ul>
        <li><Link to="/login">登录页面</Link></li>
        <li><Link to="/todoList">TODO页面</Link></li>
      </ul>
      <Routes>
        <Route path="/login" component={Login}></Route>
        <Route path="/todoList" component={TodoList}></Route>
      </Routes>
    </HashRouter>
  </div>
}
export default App;