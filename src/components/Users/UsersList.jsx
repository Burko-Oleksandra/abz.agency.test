import { useSelector } from 'react-redux';

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
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <UserWrap id="users">
      <SubTitle>Users</SubTitle>
      <List>
        {contacts.map(({ name, avatar, email, phone, position, id }) => (
          <>
            <Item key={id}>
              <Avatar src={avatar} alt={name} width="70" height="70" />
              <Description>{name}</Description>
              <p>{position}</p>
              <p>{email}</p>
              <p>{phone}</p>
            </Item>
          </>
        ))}
      </List>
      <BtnShowMore>Show more</BtnShowMore>
    </UserWrap>
  );
}
