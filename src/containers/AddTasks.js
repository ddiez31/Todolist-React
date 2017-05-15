import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/AddTasks.css';
import Input from './components/Input';
import Button from './components/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React-Todolist</h2>
        </div>
        <br/>
        <form className="ui form">
          <div className="field">
            <Input
              type="text"
              name="name"
              placeholder="entrer une tâche"
            />
          </div>
          <button className="ui button">
            <Button
              type="submit"
              name="add"
            />
          </button>
        </form>
      </div>
    );
  }
}

export default App;
