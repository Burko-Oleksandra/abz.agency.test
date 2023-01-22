import axios from 'axios';
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
  }, []);

  // useEffect(() => {
  //   const totalHits = async () => {
  //     await axios
  //       .get('https://63c83c875c0760f69ac83edb.mockapi.io/contacts/abzagency')
  //       .then(res => {
  //         console.log(res.data);
  //         console.log(res.headers['x-total-count']);
  //       });
  //   };
  //   totalHits();
  // }, []);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    dispatch(fetchContacts(page));
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
