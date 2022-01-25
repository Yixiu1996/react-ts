import React from "react";
import Login from './Login'
import TodoList from './TodoList'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return <div className="App">
    <Router>
      <ul>
        <li><Link to="/login">登录页面</Link></li>
        <li><Link to="/todoList">TODO页面</Link></li>
      </ul>
      <Routes>
        <Route path="/login" component={Login}></Route>
        <Route path="/todoList" component={TodoList}></Route>
      </Routes>
    </Router>
  </div>
}
export default App;