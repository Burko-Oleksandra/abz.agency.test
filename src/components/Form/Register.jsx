import Button from 'components/Button/Button';
import {
  SubTitle,
  FormWrap,
  DataForm,
  DataInput,
  Disription,
  RadioForm,
  RadioLabel,
  RadioInput,
  PhotoForm,
  PhotoLabel,
  PhotoInput,
} from './Register.styled';

export default function Register() {
  return (
    <FormWrap>
      <SubTitle>Register form</SubTitle>
      <DataForm>
        <label>
          <DataInput type="text" placeholder="Your name" />
        </label>
        <label>
          <DataInput type="email" placeholder="Email" />
        </label>
        <label>
          <DataInput type="tel" placeholder="Phone" />
        </label>
      </DataForm>
      <Disription>Select your position</Disription>
      <RadioForm>
        <RadioLabel>
          <RadioInput type="radio" />
          Frontend developer
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="radio" />
          Backend developer
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="radio" />
          Designer
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="radio" />
          QA
        </RadioLabel>
      </RadioForm>
      <PhotoForm>
        <PhotoLabel>
          Upload
          <PhotoInput type="file" placeholder="Upload your photo" />
        </PhotoLabel>
      </PhotoForm>
      <Button type="submit">Sign up</Button>
    </FormWrap>
  );
}
