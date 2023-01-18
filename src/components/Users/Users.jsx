import Button from 'components/Button/Button';
import { UserWrap, SubTitle } from './Users.styled';

export default function Users() {
  return (
    <UserWrap>
      <SubTitle>Working with GET request</SubTitle>
      <ul>
        <li>
          <img src="" alt="" width="70" height="70" />
          <p>Name</p>
          <p>Position</p>
          <p>Email</p>
          <p>Phone</p>
        </li>
      </ul>
      <Button>Show More</Button>
    </UserWrap>
  );
}
