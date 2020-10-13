import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import FormMessage from '../../../../components/form-message/form-message.component';
import FormButton from '../../../../components/form-button/form-button.component';
import FormInput from '../../../../components/form-input/form-input.component';
import Heading from '../../../../components/heading/heading.component';
import Modal from '../../../../components/modal/modal.component';

import { StyledForm } from '../../../../layout/elements';

import * as actions from '../../../../redux/actions';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const TodoSchema = Yup.object().shape({
  todo: Yup.string().required('The todo is required.').min(4, 'Too short.'),
});

const InputTodo = ({
  editTodo,
  close,
  opened,
  addTodo,
  loading,
  error,
  editTodoAction,
}) => {
  const loadingText = editTodo ? 'Editing...' : 'Adding...';

  return (
    <>
      <Modal opened={opened} close={close}>
        <Heading noMargin size="h1" color="white">
          {editTodo ? 'Edit your todo' : 'Add your new todo'}
        </Heading>
        <Heading bold size="h4" color="white">
          {editTodo
            ? 'Edit your todo and tap edit'
            : 'Type your todo and press add'}
        </Heading>
        <Formik
          initialValues={{
            todo: editTodo ? editTodo.todo : '',
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // send our todo
            const res = editTodo
              ? await editTodoAction(editTodo.id, values)
              : await addTodo(values);
            if (res) {
              close();
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <StyledForm>
              <Field
                type="text"
                name="todo"
                placeholder="Write your todo..."
                component={FormInput}
              />
              <ButtonsWrapper>
                <FormButton
                  contain
                  color="main"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={loading ? loadingText : null}
                >
                  {editTodo ? 'Edit todo' : 'Add todo'}
                </FormButton>
                <FormButton
                  type="button"
                  color="main"
                  contain
                  onClick={() => {
                    close();
                    resetForm();
                  }}
                >
                  Cancel
                </FormButton>
              </ButtonsWrapper>
              <MessageWrapper>
                <FormMessage error show={error}>
                  {error}
                </FormMessage>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ todos }) => ({
  loading: todos.loading,
  error: todos.error,
});

const mapDispatchToProps = {
  addTodo: actions.addTodo,
  editTodoAction: actions.editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
