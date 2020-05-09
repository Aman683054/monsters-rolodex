import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/Card-List/CardList.component';
import {SearchBox} from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      SearchField: ""
    }


  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json()
    .then(users => this.setState({monsters : users})))
  }

  handleChange = (e) => {
    this.setState({ SearchField: e.target.value })
  }

  render(){
    const {monsters, SearchField} =this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase()));
    return (
      
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
