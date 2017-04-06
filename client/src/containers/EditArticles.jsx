import React, { Component } from 'react';
import axios from 'axios';

import Auth from '../modules/Auth';

class EditArticles extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getData();
		this.editData();
		this.removeData();
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
		axios.get('http://localhost:8000/articles/', {
			headers: {Authorization: `bearer ${Auth.getToken()}`}
		}).then((res) => {
			console.log('data:', res);
			this.setState({body: res.data}); 
		});
	}

	editData() {
		axios.put("http://localhost:8000/articles/" + this.props.key, {
			headers: {Authorization: `bearer ${Auth.getToken()}`}
		}).then((res) => {
			console.log("edit", res.data._id);
		});
	}

	removeData() {
		axios.delete("http://localhost:8000/articles/"+ this.props.key, {
			headers: {Authorization: `bearer ${Auth.getToken()}`}
		}).then((res) => {
			console.log("delete", res.data._id);
			
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
						<button onClick={this.editData.bind(this,'article._id')}>EDIT</button>
						<button onClick={this.removeData.bind(this)}>DELETE</button>
					</div>
				)}
			</div>
		)
	}
}

export default EditArticles;