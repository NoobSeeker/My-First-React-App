import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    OnSearchChange = (event) => {
        this.setState( {searchfield: event.target.value} );
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.OnSearchChange}/>,
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;