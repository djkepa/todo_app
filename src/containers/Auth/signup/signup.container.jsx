import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components';

import { FormWrapper, StyledForm } from '../../../layout/elements';
import FormInput from '../../../components/form-input/form-input.component';
import FormButton from '../../../components/form-button/form-button.component';
import FormMessage from '../../../components/form-message/form-message.component';
import Heading from '../../../components/heading/heading.component';

import * as actions from '../../../redux/actions';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const SignUpSchema = Yup.object().shape({
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
  password: Yup.string()
    .required('The password is required.')
    .min(8, 'The password is to short.')
    .required('The passoword is required.')
    .min(8, 'The password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const SignUp = ({ signUp, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Sign up for an account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to register your new account
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
              loading={loading ? 'Signing up...' : null}
              type="submit"
            >
              Sign up
            </FormButton>
            <MessageWrapper>
              <FormMessage error show={error}>
                {error}
              </FormMessage>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};
const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
