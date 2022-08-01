import Logo from '../assets/globe.png'
import './Header.css'
export default function Header() {
    return (
        <header id='header'>
            <img className='header-logo' src={Logo} />
            <h1 className='header-title'>My travel journal</h1>
        </header>
    )
}