import styled from "styled-components"
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE', 'AJUDA']

const OpcaoesContainer = styled.ul`
    display: flex;
`;

const OpcaoContainer = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
`;


export default function OpcoesHeader() {
    return (
        <OpcaoesContainer>
            {
                // eslint-disable-next-line no-undef
                textoOpcoes.map( (texto) => (
                    <OpcaoContainer><p>{texto}</p></OpcaoContainer>
                ))
            }
        </OpcaoesContainer>
    )
}