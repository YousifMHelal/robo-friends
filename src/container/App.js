import React, {Component} from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import "./App.css";
import Scroll from "../component/Scroll";

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({robots: users}));
    }

    render(){ 
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <CardList robots = {filteredRobots}/>    
                </Scroll>
            </div>
            
        );
    }
    
}

export default App;