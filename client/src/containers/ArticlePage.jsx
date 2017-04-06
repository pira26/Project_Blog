import React, { PropTypes, Component } from 'react';

import Auth from '../modules/Auth';
import ArticleForm from '../components/ArticleForm.jsx';


class ArticlePage extends Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      article: {
        titles: '',
        posts: '',
        comments: '',
        likes: null
      }
    };

    this.processForm = this.processForm.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const titles = encodeURIComponent(this.state.article.titles);
    const posts = encodeURIComponent(this.state.article.posts);
    const comments = encodeURIComponent(this.state.article.comments);
    const likes = encodeURIComponent(this.state.article.likes);
    const formData = `titles=${titles}&posts=${posts}&comments=${comments}&likes=${likes}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/edit');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);


        // change the current URL to /
        this.context.router.replace('/blog');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */

  /**
   * Render the component.
   */
  render() {
    return (
      <ArticleForm
        onSubmit={this.processForm}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        article={this.state.article}
      />
    );
  }

}

ArticlePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ArticlePage;