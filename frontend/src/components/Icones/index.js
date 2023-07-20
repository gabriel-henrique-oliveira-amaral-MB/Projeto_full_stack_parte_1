import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const icones = [ perfil, sacola ]
const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`;
const IconeContainer = styled.li`
    margin-right: 40px;
    width: 25px;
`;


export default function IconesHeader() {
    return (
        <IconesContainer>
        { icones.map( (icone) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <IconeContainer><img src={icone}></img></IconeContainer>
        )) }
        </IconesContainer>
    )
}