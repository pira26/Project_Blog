import Base from './common/components/Base.jsx';
import HomePage from './common/components/HomePage.jsx';
import LoginPage from './common/containers/LoginPage.jsx';
import SignUpPage from './common/containers/SignUpPage.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    }

  ]
};

export default routes;