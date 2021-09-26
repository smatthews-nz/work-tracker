import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ViewAllCards } from './components/ViewAllTasks/ViewAllTasks';
import { AddTask } from './components/AddTask/AddTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
        <ViewAllCards />
        </Route>
        <Route path="/add" component={AddTask} />
      </Router>
    </div>
  );
}

export default App;
