import {
  SubTitle,
  FormWrap,
  DataForm,
  InputWrap,
  DataLabel,
  DataInput,
  Disription,
  RadioWrap,
  RadioLabel,
  RadioInput,
  FakeRadio,
  PhotoLabel,
  PhotoInput,
  PhotoFake,
  Button,
} from './Register.styled';

export default function Register() {
  return (
    <FormWrap id="signUp">
      <SubTitle>Register form</SubTitle>
      <DataForm>
        <InputWrap>
          <DataInput
            type="text"
            name="name"
            className="dataInput"
            placeholder="11111"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <DataLabel htmlFor="name" className="dataLabel">
            Your name
          </DataLabel>
        </InputWrap>
        <InputWrap>
          <DataInput
            type="email"
            name="email"
            className="dataInput"
            placeholder=" "
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            required
          />
          <DataLabel htmlFor="email" className="dataLabel">
            Email
          </DataLabel>
        </InputWrap>
        <InputWrap>
          <DataInput
            type="number"
            name="tel"
            className="dataInput"
            placeholder=" "
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
          <DataLabel htmlFor="tel" className="dataLabel">
            Phone
          </DataLabel>
        </InputWrap>
        <Disription>Select your position</Disription>
        <RadioWrap>
          <RadioLabel htmlFor="front">
            <RadioInput
              type="radio"
              id="front"
              name="position"
              className="real-radio"
            />
            <FakeRadio className="custom-radio"></FakeRadio>
            Frontend developer
          </RadioLabel>
          <RadioLabel htmlFor="back">
            <RadioInput
              type="radio"
              id="back"
              name="position"
              className="real-radio"
            />
            <FakeRadio className="custom-radio"></FakeRadio>
            Backend developer
          </RadioLabel>
          <RadioLabel htmlFor="designer">
            <RadioInput
              type="radio"
              id="designer"
              name="position"
              className="real-radio"
            />
            <FakeRadio className="custom-radio"></FakeRadio>
            Designer
          </RadioLabel>
          <RadioLabel htmlFor="qa">
            <RadioInput
              type="radio"
              id="qa"
              name="position"
              className="real-radio"
            />
            <FakeRadio className="custom-radio"></FakeRadio>
            QA
          </RadioLabel>
        </RadioWrap>
        <PhotoInput type="file" id="actual-btn" name="photo" required />
        <PhotoLabel htmlFor="actual-btn">Choose File</PhotoLabel>
        <PhotoFake id="file-chosen">No file chosen</PhotoFake>
      </DataForm>
      <Button type="submit" disabled="disabled" className="disabled-button">
        Sign up
      </Button>
    </FormWrap>
  );
}
