import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import Auth from '../modules/Auth';

const style = {
	'position': 'fixed',
	'borderRadius': '10px',
	'padding': '5px',
	'textAlign': 'center',
	'backgroundColor':'#3A3A3C',
	'marginLeft': '500px'
}

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
			<div className="col-xs-12
							col-sm-12
							col-md-12
							col-lg-12">
				<div>
					<Link to='/post-article'style={style}>New <br/> Article</Link>	
				</div>

				{ this.state.body.map(article =>
					
					<div key={article._id}>
						<h2>{article.titles}</h2>
						<img src={article.picture_url} alt="article image" className="image"/><br/>
						<div style={{textSpacing:'2px', paddingTop:'10px'}}>{article.posts}</div>
						<div><b>By {article.userName}</b></div>
					</div>
				)}
			</div>
		)
	}
}

export default Blog;