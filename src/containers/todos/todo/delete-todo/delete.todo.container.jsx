import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FormMessage from '../../../../components/form-message/form-message.component';
import FormButton from '../../../../components/form-button/form-button.component';
import Heading from '../../../../components/heading/heading.component';
import Modal from '../../../../components/modal/modal.component';

import * as actions from '../../../../redux/actions';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const TodoWrapper = styled.div`
  margin: 1rem 0rem;
  font-size: 1.3rem;
  text-align: center;
  color: var(--color-white);
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding: 0 3rem;
`;

const DeleteTodo = ({ show, close, todo, deleteTodo, error, loading }) => {
  return (
    <Modal opened={show} close={close}>
      <Heading noMargin size="h1" color="white">
        Deleting todo
      </Heading>
      <Heading bold size="h4" color="white">
        Are you sure you want to delete this todo?
      </Heading>
      <TodoWrapper>{todo.todo}</TodoWrapper>
      <ButtonsWrapper>
        <FormButton
          contain
          color="red"
          onClick={async () => await deleteTodo(todo.id)}
          disabled={loading}
          loading={loading ? 'Deleting...' : null}
        >
          Delete
        </FormButton>
        <FormButton color="main" contain onClick={close}>
          Cancel
        </FormButton>
      </ButtonsWrapper>
      <MessageWrapper>
        <FormMessage error show={error}>
          {error}
        </FormMessage>
      </MessageWrapper>
    </Modal>
  );
};

const mapStateToProps = ({ todos }) => ({
  error: todos.deleteTodo.error,
  loading: todos.deleteTodo.loading,
});

const mapDispatchToProps = {
  deleteTodo: actions.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
