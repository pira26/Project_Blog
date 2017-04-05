import React, { Component } from 'react';
import axios from 'axios';

import Auth from '../modules/Auth';

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getData();
	}

	// getData() {
	// 	axios.get('https://your-blog.herokuapp.com/articles', {
	// 		headers: {Authorization: `bearer ${Auth.getToken()}`}
	// 	}).then((res) => {
	// 		console.log('data:', res);
	// 		this.setState({body: res.data}); 
	// 	});
	// }

	getData() {
		axios.get('http://localhost:8000/articles', {
			headers: {Authorization: `bearer ${Auth.getToken()}`}
		}).then((res) => {
			console.log('data:', res);
			this.setState({body: res.data}); 
		});
	}	

	render() {
		if (!this.state.body) return <h1> </h1>
		return(
			<div>
				{ this.state.body.map(article =>
					<div key={article._id}>
						<div>{article.userName}</div>
						<div>{article.comments}</div>
						<button id={article._id}>EDIT</button>
						<button id={article._id}>DELETE</button>
					</div>
				)}
			</div>
		)
	}
}

export default Articles;