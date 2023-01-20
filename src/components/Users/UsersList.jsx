import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/thunks';
import { contactsSlice } from 'redux/slices/contactSlice';

import {
  UserWrap,
  SubTitle,
  List,
  Item,
  Avatar,
  Description,
  BtnShowMore,
} from './UsersList.styled';

export default function UsersList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);

    dispatch(fetchContacts(page));
    //   .then(response => {
    //   console.log(response);
    //   dispatch(contactsSlice.actions.setContacts(response.payload));
    // });
  };

  return (
    <UserWrap id="users">
      <SubTitle>Users</SubTitle>
      <List>
        {contacts.map(({ name, avatar, email, phone, position, id }) => (
          <Item key={id}>
            <Avatar src={avatar} alt={name} width="70" height="70" />
            <Description>{name}</Description>
            <p>{position}</p>
            <p>{email}</p>
            <p>{phone}</p>
          </Item>
        ))}
      </List>
      <BtnShowMore onClick={loadMore}>Show more</BtnShowMore>
    </UserWrap>
  );
}
