/* eslint-disable jsx-a11y/alt-text */
import logo from '../../images/logo.svg'
import './style.css'

export default function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='logo' className='logo-img'></img>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}