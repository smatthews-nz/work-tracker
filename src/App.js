import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ViewAllCards } from './components/ViewAllCards/ViewAllCards';
import { AddCard } from './components/AddCard/AddCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
        <ViewAllCards />
        </Route>
        <Route path="/add" component={AddCard} />
      </Router>
    </div>
  );
}

export default App;
