import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFirstVisibleContacts, fetchContacts } from 'redux/thunks';

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
  const [page, setPage] = useState(2);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFirstVisibleContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts.length]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    dispatch(fetchContacts(page));
  };

  return (
    <UserWrap id="users">
      <SubTitle>Users</SubTitle>
      <List>
        {contacts
          .slice(0, 6)
          .map(({ name, photo, email, phone, position, id }) => (
            <Item key={id}>
              <Avatar src={photo} alt={name} width="70" height="70" />
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
