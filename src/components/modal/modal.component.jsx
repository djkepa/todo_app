import React from 'react';
import ReactDOM from 'react-dom';

import { WrappedModal, InsideWrapper } from './modal.styles';
import Backdrop from '../backdrop/backdrop.component';

const Modal = React.memo(
  ({ opened, close, children }) => {
    return ReactDOM.createPortal(
      <>
        <Backdrop close={close} opened={opened} />
        <WrappedModal opened={opened}>
          <InsideWrapper>{children}</InsideWrapper>
        </WrappedModal>
      </>,
      document.getElementById('root-modal'),
    );
  },
  (prevProps, nextProps) => {
    return prevProps.opened === nextProps.opened;
  },
);

export default Modal;
