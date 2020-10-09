import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? '-6rem' : null)};
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  align-items: center;
  height: 100%;
`;
