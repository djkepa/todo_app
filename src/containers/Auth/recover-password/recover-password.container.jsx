import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../../redux/actions';

import { FormWrapper, StyledForm } from '../../../layout/elements';
import Heading from '../../../components/heading/heading.component';
import FormButton from '../../../components/form-button/form-button.component';
import FormMessage from '../../../components/form-message/form-message.component';
import FormInput from '../../../components/form-input/form-input.component';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const RecoverSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
});

const RecoverPassword = ({ error, loading, sendEmail, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={RecoverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await sendEmail(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Recover your password
          </Heading>
          <Heading size="h4" bold color="white">
            Type in your e-mail to recover your password
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Type your email..."
              component={FormInput}
            />
            <FormButton
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Sending recover email...' : null}
              type="submit"
            >
              Recover email
            </FormButton>
            <MessageWrapper>
              <FormMessage error show={error}>
                {error}
              </FormMessage>
            </MessageWrapper>
            <MessageWrapper>
              <FormMessage success show={error === false}>
                Recover email sent successfully!
              </FormMessage>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error,
});

const mapDispatchToProps = {
  sendEmail: actions.recoverPassword,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
