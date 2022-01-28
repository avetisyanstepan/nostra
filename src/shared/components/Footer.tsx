import { NavLink } from "react-router-dom";
import styled from "styled-components"
import {FbLogo, InstaLogo, LogoFooter, PhoneIcon, YouTubeLogo } from "../../assets/icons";


export const Footer = () => {
    return (
        <StyledMain>

            <StyledContainer>
                    <SyledDivCol>
                        <LogoFooter />
                        <StyledText>
                            Certificações
                        </StyledText>
                        <StyledDivRow>
                                <StyledImg src ='/images/logo1.png' />
                                <StyledImg src ='/images/logo2.png' />
                        </StyledDivRow>
                    </SyledDivCol>

                    <SyledDivCol>
                        <StyledTextbold>
                            Terra Nostra
                        </StyledTextbold>
                        <StyledNavLink to='#'>
                            A Nossa Marca
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                            Os Nossos Produtos
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                            Fazer o Bem
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                            Programa Leite de <br/>
                            Vacas Felizes    
                        </StyledNavLink>
                    </SyledDivCol>

                    <SyledDivCol>
                        <StyledTextbold>
                            Produtos
                        </StyledTextbold>
                        <StyledNavLink to='#'>
                        Leite de Pastagem
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                        Queijo de Pastagem
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                        Manteiga
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                        Snack
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                        Biológico
                        </StyledNavLink>
                    </SyledDivCol>
                    <SyledDivCol>
                        <StyledTextbold>
                          Contactos
                        </StyledTextbold>
                        <StyledNavLink to='#'>
                        faleconnosco@groupe-bel.com
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                        Fromageries Bel Portugal, S.A.<br/>
                        Estrada Regional, nº 46 Matriz<br/>
                        9600-549 Ribeira Grande, Açores
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                            <PhoneIcon />
                             808 202 561
                        </StyledNavLink>
                        <StyledNavLink to='#'>
                          dias úteis das 09h às 18h  
                        </StyledNavLink>
                    </SyledDivCol>

                    <SyledDivCol>
                        <StyledTextbold>
                          Siga-nos
                        </StyledTextbold>
                        <StyledDivRow gap={'gap'}>
                            <StyledNavLink to='#'>
                                <FbLogo />
                            </StyledNavLink>
                            <StyledNavLink to='#'>
                                <InstaLogo />
                            </StyledNavLink>
                            <StyledNavLink to='#'>
                                <YouTubeLogo />
                            </StyledNavLink>
                        </StyledDivRow>
                    </SyledDivCol>
                    
            </StyledContainer>
            <StyledBorderBox>
                <StyledTextC>
                © 2021 Terra Nostra. Todos os direitos reservados.
                </StyledTextC>
                <StyledTextCBold>
                  Termos e Condições | Política de Privacidade | Política de Cookies | Configuração de Cookies  
                </StyledTextCBold>
            </StyledBorderBox>
            
        </StyledMain>
    )
}




const StyledMain = styled.div`
    background: #EEF1E5;
    width: 100%;
    margin-top: 60px;
`;

const StyledContainer = styled.div`
    max-width: 1440px;
    display: flex;
    margin: 0 auto;
    widht: 100%;
    justify-content: space-between;
    padding: 89px 179px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 41px 25px;
      }
      
`;
const StyledImg = styled.img`
    margin-right: 9px;
`;

const SyledDivCol = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledDivRow = styled.div<any>`
    display: flex;
    flex-direction: row;
    gap: ${props => props.gap ? '10px' : '0'}
`;

const StyledNavLink = styled(NavLink)`
    font-size: 16px;
    color: #5E6977;
    line-height: 24px;
    margin-bottom: 16px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #43484D
    }

`;

const StyledText = styled.span`
    font-size: 20px;
    line-hieght: 24px;
    color: #43484D;
    margin-top: 14px;
    margin-bottom: 12px;
`;

const StyledTextbold = styled.span`
    font-weight: 500;
    font-size: 20px;
    color: #43484D;
    margin-bottom: 24px;

`;

const StyledBorderBox = styled.div`
    max-width: 1082px;
    display: flex;
    margin: 0 auto;
    border-top: 1px solid #FFFFFF;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 81px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 26px 25px;
      }
`;

const StyledTextC = styled.span`
        font-size: 12px;
        color: #86939E;
        margin-top: 28px;
`;
const StyledTextCBold = styled.span`
        font-size: 12px;
        font-weight: 500;
        color: #5E6977;
        margin-top: 28px;


`