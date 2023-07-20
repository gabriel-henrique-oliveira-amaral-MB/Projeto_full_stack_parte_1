import './estilo.css';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE', 'AJUDA']

export default function OpcoesHeader() {
    return (
        <ul className="opcoes">
            {
                // eslint-disable-next-line no-undef
                textoOpcoes.map( (texto) => (
                    <li className="opcao"><p>{texto}</p></li>
                ))
            }
        </ul>
    )
}