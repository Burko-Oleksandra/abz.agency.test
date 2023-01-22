import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

import FileUploader from 'components/FileUploader/FileUploader';
import Button from 'components/Button/Button';

import { addNewContact } from 'redux/thunks';
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
  // Button,
} from './RegisterForm.styled';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  // const [avatar, setAvatar] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();
  const frontendId = shortid.generate();
  const backendId = shortid.generate();
  const designerId = shortid.generate();
  const qaId = shortid.generate();
  const emailInputId = shortid.generate();

  const positionList = [
    {
      id: frontendId,
      radioInputValue: 'Frontend Developer',
    },
    {
      id: backendId,
      radioInputValue: 'Backend Developer',
    },
    {
      id: designerId,
      radioInputValue: 'Designer',
    },
    {
      id: qaId,
      radioInputValue: 'QA',
    },
  ];

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'position':
        setPosition(value);
        break;

      case 'email':
        setEmail(value);
        break;

      // case 'avatar':
      //   setAvatar(value);
      //   break;

      default:
        throw new Error('Error');
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setPosition('');
    // setAvatar('');
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name,
      email,
      phone,
      position,
      // avatar,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      resetForm();
      return console.error('You are already registered on this site');
    }
    dispatch(addNewContact(newContact));
    resetForm();
  };

  return (
    <FormWrap id="signUp">
      <SubTitle>Register form</SubTitle>
      <DataForm onSubmit={handleSubmitForm}>
        <InputWrap>
          <DataInput
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            onChange={handleInputChange}
            className="dataInput"
            placeholder="11111"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <DataLabel htmlFor={nameInputId} className="dataLabel">
            Your name
          </DataLabel>
        </InputWrap>
        <InputWrap>
          <DataInput
            type="email"
            name="email"
            value={email}
            id={emailInputId}
            onChange={handleInputChange}
            className="dataInput"
            placeholder=" "
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            required
          />
          <DataLabel htmlFor={emailInputId} className="dataLabel">
            Email
          </DataLabel>
        </InputWrap>
        <InputWrap>
          <DataInput
            type="number"
            name="phone"
            value={phone}
            id={phoneInputId}
            onChange={handleInputChange}
            className="dataInput"
            placeholder=" "
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
          <DataLabel htmlFor={phoneInputId} className="dataLabel">
            Phone
          </DataLabel>
        </InputWrap>
        <Disription>Select your position</Disription>
        {
          <RadioWrap>
            {positionList.map(positionListItem => (
              <RadioLabel
                htmlFor={positionListItem.id}
                key={positionListItem.id}
              >
                <RadioInput
                  type="radio"
                  name="position"
                  id={positionListItem.id}
                  value={positionListItem.radioInputValue}
                  onChange={handleInputChange}
                  className="real-radio"
                />
                <FakeRadio className="custom-radio"></FakeRadio>
                {positionListItem.radioInputValue}
              </RadioLabel>
            ))}
          </RadioWrap>
        }
        <button
          type="submit"
          className={`button ${
            !name || !email || !phone || !position ? 'disabledClass' : ''
          }`}
        >
          Sign up
        </button>
      </DataForm>

      <FileUploader />
    </FormWrap>
  );
}
