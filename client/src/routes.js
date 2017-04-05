import Base from './common/components/Base.jsx';
import HomePage from './common/components/HomePage.jsx';
import DashboardPage from './common/containers/DashboardPage.jsx';
import LoginPage from './common/containers/LoginPage.jsx';
import SignUpPage from './common/containers/SignUpPage.jsx';
import Articles from './common/containers/Articles.jsx';
import Auth from './common/modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
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
      path: '/articles',
      components: Articles
    }

  ]
};

export default routes;