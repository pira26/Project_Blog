import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import ArticlePage from './containers/ArticlePage.jsx';
import Blog from './containers/Blog.jsx';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Blog);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    },

    {
      path: '/post-article',
      components: ArticlePage
    },

    {
      path: '/blog',
      components: Blog
    },

    {
      path: '/about',
      components: About
    },

    {
      path: '/contact',
      components: Contact
    }

  ]
};

export default routes;