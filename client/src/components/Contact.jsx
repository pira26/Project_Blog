import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Contact = () => (

	<div>
		<Card>
		    <CardHeader
		      title="Pirathaab SRITHARAN"
		      subtitle="Fullstack Js Junior"
		      avatar="https://avatars1.githubusercontent.com/u/22824092?v=3&s=400"
		    />
		    <CardMedia
		      overlay={<CardTitle title="Become a fullstack developer?" subtitle="This is just the beginning" />} >
		    	<img src="https://start.lesechos.fr/images/2016/08/09/5543_1470763177_fiche-metier-full-stack-une_970x545p.jpg" />
		    </CardMedia>
		    <CardTitle title="My Contacts" subtitle="About Me" />
		    <CardText>
		    	Don't worry, it won't be a long monologue about me, but more a very short paragraph ^^. <br/>
		    	I'm a newbie in software programming. I found myself a passion through this trainning. <br/>
		    	I like to travel and discover new cultures and visit amazing landscapes. And programming...
		    	is a huge travel ;)<br/>
		    	I'm a football fan who like geek jokes ^^. <i>What else ?</i>     
		    </CardText>
		    <CardActions>
		    	<FlatButton 
		    		label="GitHub"
		    		href="github.com/pira26"
		    		primary={true}
		    		hoverColor="#3A3A3C" />
		    	<FlatButton 
		    		label="LinkedIn"
		    		href="https://www.linkedin.com/in/pirathaab-sritharan-72a2a1122/"
		    		primary={true}
		    		hoverColor="#3A3A3C" />
		    	<FlatButton 
		    		label="Twitter"
		    		href="https://twitter.com/Pira_Js"
		    		primary={true}
		    		hoverColor="#3A3A3C" />
		    	<FlatButton 
		    		label="Codewars"
		    		href="https://www.codewars.com/users/Pira"
		    		primary={true}
		    		hoverColor="#3A3A3C" />
		    </CardActions>
	  </Card>
	</div>
);

export default Contact;