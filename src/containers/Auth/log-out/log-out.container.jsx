import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);
  return null;
};

const mapDispatchToProps = {
  logout: actions.signOut,
};

export default connect(null, mapDispatchToProps)(Logout);
