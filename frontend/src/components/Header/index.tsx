import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Sales" />
                <h1>Sales</h1>
                <p>
                    Developed by Willian Peter Marcal
                    <a href="https://github.com/WillianMarcal/Sales"></a>
                </p>
            </div>
        </header>
    )
}
export default Header;