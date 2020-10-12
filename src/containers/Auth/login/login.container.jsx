import React, { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FormWrapper, StyledForm } from '../../../layout/elements';
import FormInput from '../../../components/form-input/form-input.component';
import FormButton from '../../../components/form-button/form-button.component';
import Heading from '../../../components/heading/heading.component';
import FormMessage from '../../../components/form-message/form-message.component';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The passoword is required.')
    .min(8, 'Too short.'),
});

const Login = ({ login, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        await login(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Login into your account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to login into your account
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email..."
              component={FormInput}
            />
            <ErrorMessage name="email" />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password..."
              component={FormInput}
            />
            <ErrorMessage name="password" />
            <FormButton
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Logging in...' : null}
              type="submit"
            >
              Login
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
  login: actions.signIn,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
