import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import { FormWrapper, StyledForm } from '../../../layout/elements';
import Heading from '../../../components/heading/heading.component';
import FormButton from '../../../components/form-button/form-button.component';
import FormMessage from '../../../components/form-message/form-message.component';
import FormInput from '../../../components/form-input/form-input.component';
import Modal from '../../../components/modal/modal.component';

import * as actions from '../../../redux/actions';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding: 0 3rem;
`;

const DeleteWrapper = styled.div`
  cursor: pointer;
  color: var(--color-errorRed);
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Your first name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  lastName: Yup.string()
    .required('Your last name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().min(8, 'The password is too short.'),
  confirmPassword: Yup.string().when('newpassword', {
    is: (val) => val && val.length > 0,
    then: Yup.string()
      .required('You need to confirm your password.')
      .oneOf([Yup.ref('newpassword'), null], `Password doesn't match`),
  }),
});

const Profile = ({
  firebase,
  editProfile,
  loading,
  error,
  loadingDelete,
  errorDelete,
  deleteUser,
  cleanUp,
}) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const [modalOpened, setModalOpened] = useState(false);

  if (!firebase.profile.isLoaded) return null;
  return (
    <>
      <Formik
        initialValues={{
          firstName: firebase.profile.firstName,
          lastName: firebase.profile.lastName,
          email: firebase.auth.email,
          password: '',
          confirmPassword: '',
        }}
        validationSchema={ProfileSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // edit the profile here
          await editProfile(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper>
            <Heading noMargin size="h1" color="white">
              Edit your profile
            </Heading>
            <Heading bold size="h4" color="white">
              Here you can edit your profile
            </Heading>
            <StyledForm>
              <Field
                type="text"
                name="firstName"
                placeholder="Your first name..."
                component={FormInput}
              />
              <Field
                type="text"
                name="lastName"
                placeholder="Your last name..."
                component={FormInput}
              />
              <Field
                type="email"
                name="email"
                placeholder="Your email..."
                component={FormInput}
              />
              <Field
                type="password"
                name="password"
                placeholder="Your password..."
                component={FormInput}
              />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Re-type your password..."
                component={FormInput}
              />
              <FormButton
                disabled={!isValid || isSubmitting}
                loading={loading ? 'Editing...' : null}
                type="submit"
              >
                Edit
              </FormButton>
              <MessageWrapper>
                <FormMessage error show={error}>
                  {error}
                </FormMessage>
              </MessageWrapper>
              <MessageWrapper>
                <FormMessage success show={error === false}>
                  Profile was updated!
                </FormMessage>
              </MessageWrapper>
              <DeleteWrapper onClick={() => setModalOpened(true)}>
                Delete my account
              </DeleteWrapper>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
      <Modal opened={modalOpened} close={() => setModalOpened(false)}>
        <Heading noMargin size="h1" color="white">
          Delete your account
        </Heading>
        <Heading bold size="h4" color="white">
          Do you really want to delete your account?
        </Heading>
        <ButtonsWrapper>
          <FormButton
            contain
            onClick={() => deleteUser()}
            color="red"
            disabled={loadingDelete}
            loading={loadingDelete ? 'Deleting...' : null}
          >
            Delete
          </FormButton>
          <FormButton
            color="main"
            contain
            onClick={() => setModalOpened(false)}
          >
            Cancel
          </FormButton>
        </ButtonsWrapper>
        <MessageWrapper>
          <FormMessage error show={errorDelete}>
            {errorDelete}
          </FormMessage>
        </MessageWrapper>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
  loadingDelete: auth.deleteUser.loading,
  errorDelete: auth.deleteUser.error,
});

const mapDispatchToProps = {
  editProfile: actions.editProfile,
  cleanUp: actions.clean,
  deleteUser: actions.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
