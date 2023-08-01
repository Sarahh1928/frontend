import logo from '../images/logo_footer.png';

function Nav() {
    return <nav>
        <img src={logo} width="211px" height="84px" />
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderonline">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
}

export default Nav;