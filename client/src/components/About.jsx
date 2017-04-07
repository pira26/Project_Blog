import React from 'react';

const About = () => (

	<div> 
		<div>
			<h2>About this project</h2>
			<p>This is the final project of our sixth month training at <i>Simplon.co</i></p>
			<ul>
				<h3>As a Visitor, I can:</h3>
				<li>Consult articles</li>
				<li>Like/Comment</li>
				<li>See list of my likes</li>
				<li>See/Edit Comments</li>
				<li>Add/Modify porfile info</li>
			</ul>
			<ul>
				<h3>As an Administrator, I can:</h3>
				<li>Create an account</li>
				<li>Post/Edit/Delete articles</li>
				<li>Save drafts</li>
				<li>See/Edit unpublished articles</li>
				<li>Add/Modify porfile info</li>
			</ul>				
		</div>
		<div>
			<h2>About the technos</h2>
			<p>According to what I've learned, I use the MERN stack</p>
			<ul>
				<li>MongoDB/Mongoose</li>
				<li>Express</li>
				<li>ReactJs</li>
				<li>NodeJs</li>
				<li>Webpack</li>
				<li>Heroku</li>
				<i>Not only...</i>
				<li>JSON Web Token</li>
				<li>Passport</li>
				<li>Validador</li>
				<li>dotenv</li>
			</ul>

		</div>
	</div>
)

export default About;