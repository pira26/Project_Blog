import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const HomePage = () => (
	<div>
  		<Card className="container">
    		<CardTitle title="Your Blog" subtitle="Welcome to Your Blog." />
    		<CardText>
    			This is a blog where you can post any articles of your choice and share your passion or anything else.<br/>
    			For that, there is only one rule: <b>RESPECT!</b>.
    			Respect each other... Or you will be simply banned ;) <br/>
				Thank you and click on <b>Blog</b> and enjoy it :)
    		</CardText> 
  		</Card>
  	</div>
);

export default HomePage;