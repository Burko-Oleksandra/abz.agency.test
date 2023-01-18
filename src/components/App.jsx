import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/thunks/index';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import UsersList from './Users/UsersList';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Hero />
      <UsersList contacts={contacts} />
    </>
  );
};
