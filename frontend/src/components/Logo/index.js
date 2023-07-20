/* eslint-disable jsx-a11y/alt-text */
import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 10px;
`;
const ImagemContainer = styled.img`
    margin-right: 10px;
`;

export default function Logo() {
    return (
        <LogoContainer>
          <ImagemContainer src={logo} alt='logo' />
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}