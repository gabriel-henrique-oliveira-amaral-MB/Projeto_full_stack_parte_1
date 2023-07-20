import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import './estilo.css';

const icones = [ perfil, sacola ]


export default function IconesHeader() {
    return (
        <ul className='icones'>
        { icones.map( (icone) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <li className='icone'><img src={icone}></img></li>
        )) }
    </ul>
    )
}