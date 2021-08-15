import React from 'react';
import { Container, MenuContainer, MenuButton, LogoContainer } from './styles.jsx';
import HeaderMenu from '@Components/Header/HeaderMenu/index.jsx';
import LogoImage from '@Assets/Logo/re-logo.png';
import PropTypes from 'prop-types';

const Header = ({ user }) => {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoImage} />
      </LogoContainer>
      <MenuContainer>
        <MenuButton>홈</MenuButton>
        <MenuButton>상품</MenuButton>
        <MenuButton>마이메뉴</MenuButton>
        <MenuButton>고객센터</MenuButton>
        <MenuButton>ABOUT US</MenuButton>
      </MenuContainer>
      <HeaderMenu user={user}></HeaderMenu>
    </Container>
  );
};

// interface Props {
//   user: Object
// }

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
