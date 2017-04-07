import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ArticleForm = ({
  onSubmit,
  errors,
  successMessage,
  article
}) => (
	
	<Card className="container">
		<form action="/blog" onSubmit={onSubmit}>
			<h2 className="card-heading">Post Your Article</h2>
			
			{successMessage && <p className="success-message">{successMessage}</p>}
      		{errors.summary && <p className="error-message">{errors.summary}</p>}

      		<div className="field-line">
		        <TextField
		          floatingLabelText="Username"
		          name="userName"
		          errorText={errors.userName}
		          value={article.userName}
		        />
      		</div>

      		<div className="field-line">
		        <TextField
		          floatingLabelText="Title"
		          name="title"
		          errorText={errors.title}
		          value={article.title}
		        />
      		</div>

      		<div className="field-line">
		        <TextField
		          floatingLabelText="Post"
		          multiLine={true}
		          rows={2}
		          name="post"
		          errorText={errors.post}
		          value={article.post}
		        />
      		</div>

      		<div className="field-line">
		        <TextField
		          floatingLabelText="Image URL"
		          name="picture"
		          errorText={errors.picture}
		          value={article.picture}
		        />
		    </div>

      		<div className="button-line">
        		<RaisedButton type="submit" label="Send" primary />
      		</div>

		</form>
	</Card>

);

ArticleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired
};

export default ArticleForm;