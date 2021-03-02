import styled from 'styled-components';
import Link from '../links/Link';

const NavbarTogglerWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 0.125rem;
`;

const Toggler = styled(Link)`
  font-size: 1.875rem;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const NavbarToggler = ({isOpen, onClick, className}) => {
  return (
    <NavbarTogglerWrapper className={className}>
      <Toggler show={!isOpen} href="#" onClick={() => onClick()}>
        <i className="icon-menu-circle" />
      </Toggler>
      <Toggler show={isOpen} href="#" onClick={() => onClick()}>
        <i className="icon-cross-circle" />
      </Toggler>
    </NavbarTogglerWrapper>
  );
};

export default NavbarToggler;
