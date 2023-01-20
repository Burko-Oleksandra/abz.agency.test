import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/thunks/index';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import UsersList from './Users/UsersList';
import Register from './Form/Register';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <UsersList />
      <Register />
    </>
  );
};
