import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component {
	constructor() {
		super()
		
		this.state = {
			course_modules: [
				{ id: 1, title: '1. Paint Structure', description: 'lorem ipsum', active: false },
				{ id: 2, title: '2. Paint Anatomy', description: 'lorem ipsum', active: false },
				{ id: 3, title: '3. Paint Head', description: 'lorem ipsum', active: false },
				{ id: 4, title: '4. Paint Hands', description: 'lorem ipsum', active: false }, 
			] 
		}
	}

	render() {
		return (
			<div>
				<Jumbotron/>
			</div>
		)
	}
}

export default Home