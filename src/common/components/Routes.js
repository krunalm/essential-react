import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from '../../pages/login/page';
import HomePage from '../../pages/home/page';
import ContactPage from '../../pages/contact/contact';
import ToDoPage from '../../pages/todo/todoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="home" component={HomePage} />
    <Route path="contact" component={ContactPage} />
    <Route path="todo" component={ToDoPage} />
  </Route>
);
