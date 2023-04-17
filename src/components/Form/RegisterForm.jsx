import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

import FileUploader from 'components/FileUploader/FileUploader';

import { addNewContact, fetchPositions, getToken } from 'redux/thunks';
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
  SubmitBtn,
  DisabledBtn,
} from './RegisterForm.styled';

import img from '../../images/photoCover.svg';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(img);
  const contacts = useSelector(state => state.contacts.contacts);
  const positions = useSelector(state => state.positions.positions);
  const created = useSelector(state => state.contacts.created);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();
  const emailInputId = shortid.generate();

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'position':
        setPositionId(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'avatar':
        setAvatar(value);
        break;

      default:
        throw new Error('Error');
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setPositionId('');
    setAvatar('');
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const newContact = {
      name,
      email,
      phone,
      position_id: positionId,
      photo: avatar,
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

  useEffect(() => {
    dispatch(fetchPositions());
    dispatch(getToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts]);

  return (
    <FormWrap id="signUp">
      {contacts.length &&
        (created ? (
          <h1>Done</h1>
        ) : (
          <>
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
                  placeholder=" "
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,60}$"
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
                  pattern="^[\+]{0,1}380([0-9]{9})$"
                  required
                />
                <DataLabel htmlFor={phoneInputId} className="dataLabel">
                  Phone
                </DataLabel>
              </InputWrap>
              <Disription>Select your position</Disription>
              {
                <RadioWrap>
                  {positions.map(positionListItem => (
                    <RadioLabel
                      htmlFor={positionListItem.id}
                      key={positionListItem.id}
                    >
                      <RadioInput
                        type="radio"
                        name="position"
                        id={positionListItem.id}
                        value={positionListItem.id}
                        onChange={handleInputChange}
                        className="real-radio"
                      />
                      <FakeRadio className="custom-radio"></FakeRadio>
                      {positionListItem.name}
                    </RadioLabel>
                  ))}
                </RadioWrap>
              }
              <FileUploader setAvatar={setAvatar} />
              {!name || !email || !phone || !positionId ? (
                <DisabledBtn type="button">Sign up</DisabledBtn>
              ) : (
                <SubmitBtn type="submit">Sign up</SubmitBtn>
              )}
            </DataForm>
          </>
        ))}
    </FormWrap>
  );
}
