import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, StyledForm } from '../../../layout/elements';
import FormInput from '../../../components/form-input/form-input.component';
import FormButton from '../../../components/form-button/form-button.component';
import Heading from '../../../components/heading/heading.component';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required'),
  password: Yup.string().required('The password is required'),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
            <FormButton disabled={!isValid} type="submit">
              Login
            </FormButton>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
