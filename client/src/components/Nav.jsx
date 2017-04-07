import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Nav = () => (
	<div>
		<CardActions>
		      <FlatButton 
		      	label="Home"
		      	href="http://localhost:8000/blog"
		      	primary={true}
		    	hoverColor="#FFFFFF" />
		      <FlatButton 
		      	label="About"
		      	href="http://localhost:8000/about"
		      	primary={true}
		    	hoverColor="#FFFFFF" />
		      <FlatButton 
		      	label="Contact"
		      	href="http://localhost:8000/contact"
		      	primary={true}
		    	hoverColor="#FFFFFF" />
		    </CardActions>
	</div>
);

export default Nav;