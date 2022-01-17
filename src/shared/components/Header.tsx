




import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";


const MainContainer = styled.div`
  height: 173px;
  position: fixed;
  z-index:20;
  top:0;
  right:0;
  left:0;
 

`;
const HeaderContainer = styled.div`
  max-width: 1440px;
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  justify-content: space-between;
  padding: 28px 36px;
   
  @media (max-width: 768px) {
    align-items:center;
    padding: 12px 26px;
  }
  

`

const LogoContainer = styled.div<any>`
  width: 125px;
  height: 125px;
  cursor: pointer;
  background-image: url(${(props) => props.image});
  background-size: cover;
  
  @media (max-width: 768px) {
    width: 54px;
    height: 54px;
    background-image: url(${(props) => props.mobile});
    background-size: cover;
  }
`;

const LinksContainer = styled.div<any>`
  margin-right: 121px;
  padding-top: 32px;

 @media (max-width: 768px) {
    overflow: hidden;
    display:flex;
    margin-right: 0px;
    flex-direction: column;
    max-height: ${ props => props.open ? "500px" : "0"};
    transition: max-height 0.3s ease-in;
  }

`

const StyledNavLink = styled(NavLink)`
  font-family: "Prompt", sans-serif !important;
  text-decoration: none;
  color: #4C5850;
  font-size: 18px;
  margin-right: 50px;
  line-height: 27px;

  &:hover{
    color: #0A4626;
  }

  &.active {
    color: #0A4626;
    font-weight: 700;
  }

`

const Hamburger = styled.div<any>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 18px;
    background: #4C5850;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <MainContainer>
      <HeaderContainer>
        <div>
          <LogoContainer image={"/images/logoDesktop.png"} mobile={'/images/logoMobile.png'} onClick={() => history.push('/')}/>
        </div>
        <Hamburger onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
        </Hamburger>
        <LinksContainer open={open}>
            <StyledNavLink to='/marca'>
              A Nossa Marca
            </StyledNavLink>
           
            <StyledNavLink to='/produtos'>
              Os nossos Produtos
            </StyledNavLink>
            <StyledNavLink to='/fazer-o-bem'>
              Fazer o Bem
            </StyledNavLink>
            <StyledNavLink to='/vacas-felizes'>
              Programa Leite de Vacas Felizes
            </StyledNavLink>
        </LinksContainer>
      </HeaderContainer>
    </MainContainer>
    
    
  );
};
export default Header;

