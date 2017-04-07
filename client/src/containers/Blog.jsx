import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import Auth from '../modules/Auth';
import Nav from '../components/Nav.jsx';

class Blog extends Component {
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
		axios.get('http://localhost:8000/blog/', {
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
				<Nav />
				<div>
					<Link to='/post-article'>New <br/> Article</Link>	
				</div>

				{ this.state.body.map(article =>
					
					<div key={article._id}>
						<h3>{article.titles}</h3>
						<img src={article.picture_url} alt="article image"/>
						<div>{article.posts}</div>
						<div>By {article.userName}</div>
					</div>
				)}
			</div>
		)
	}
}

export default Blog;