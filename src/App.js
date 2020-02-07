import React, { Component} from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList} from './components/card-list/card-list.component';
class App extends Component {
   
    constructor()
    {
      super();
      this.state = {
        monsters:[],
        searchField:""
      }
      /*
        we bind the 'this' variable to the function due to lexical scoping
        the downside of the code is everytime we want to use a funtion we have to bind
        this is can be easily avoided by using arrow function which perform autumatic binding when called
     *****************************************************
     * this.handleChange = this.handleChange.bind(this) *
     * ***************************************************
      */
      
      
    }
      
    
    componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users =>  this.setState({monsters:users}))
    }
     
    handleChange = (e) =>
    {
      this.setState({searchField:e.target.value});
    }
 
  render() {
  const {monsters,searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
         
  return (
    <div className="App">
      <h1>The Monsters Rolodex</h1>
      <SearchBox placeholder="search monster" handleChange ={ this.handleChange} />
      <CardList monsters = {filteredMonsters}> </CardList>
    
    </div>
  );
}
}

export default App;
