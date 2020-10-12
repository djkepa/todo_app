import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../../redux/actions';

import { FormWrapper } from '../../../layout/elements';
import Heading from '../../../components/heading/heading.component';
import FormButton from '../../../components/form-button/form-button.component';
import FormMessage from '../../../components/form-message/form-message.component';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <FormWrapper>
      <Wrapper>
        <Heading noMargin color="white" size="h1">
          Verify your email
        </Heading>
        <Heading color="white" bold size="h4">
          Go to your email inbox, and please verify your email.
        </Heading>
        <FormButton
          loading={loading ? 'Sending email...' : null}
          disabled={loading}
          onClick={() => sendVerification()}
        >
          Re-send verification email
        </FormButton>
        <MessageWrapper>
          <FormMessage error show={error}>
            {error}
          </FormMessage>
        </MessageWrapper>
        <MessageWrapper>
          <FormMessage success show={error === false}>
            FormMessage sent successfully!
          </FormMessage>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
