import React from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			Searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({Searchfield: event.target.value})
	}

	render() {
		const {robots, Searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
		})
		return !robots.length ?
			<h1 className='tc bg-animate hover-silver'>LOADING . . . . .</h1> :
		(	
			<div className='tc'>
				<h1 className='f1'> ROBOFRIENDS </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<Cardlist robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}


export default App;