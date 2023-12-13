import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Link as RouterLink ,Link} from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../assets/img/imgSalle/La_Salle_pgina_LOGO.png';
import navIcon1 from '../assets/img/nav-icon-yotube.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/x.svg';
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');
  
    useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      const onPageLoad = () => {
        // Extraer el nombre de la página de la URL
        const currentPage = window.location.pathname.substring(1);
        setActiveLink(currentPage || 'home');
      };
  
      window.addEventListener('scroll', onScroll);
      window.addEventListener('load', onPageLoad);
  
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('load', onPageLoad);
      };
    }, []);
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };
    return (
        <div>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`me-auto ${scrolled ? 'scrolled' : ''}`}>
                            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="/historia" className={activeLink === 'historia' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('historia')}>Historia</Nav.Link>
                            <Nav.Link href="/La_salle" className={activeLink === 'colegio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('La_salle')}>Colegio La Salle</Nav.Link>
                            <Nav.Link href="/ubicacion" className={activeLink === 'colegio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Ubicacion</Nav.Link>
                            <Nav.Link href="/educacion" className={activeLink === 'colegio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Educacion</Nav.Link>
                            
                            <Nav.Link href="/bolmun" className={activeLink === 'colegio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Eventos
                                <ul className="menu-vertical">
                                    <Nav.Link href="/bolmun">Bolmun Salle</Nav.Link>
                                    <Nav.Link href="/convivencia">Convivencia</Nav.Link>
                                    <Nav.Link href="/ayuda">100 Años</Nav.Link>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="/Creditos" className={activeLink === 'colegio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Creditos</Nav.Link>
                    </Nav>
                        <Outlet />
                        <span className="navbar-text">
                        {/*<div className="social-icon">
                                <a href="https://www.youtube.com/@lasallelapaz5992"><img src={navIcon1} alt="" /></a>
                                <a href="https://www.facebook.com/profile.php?id=100073392609174"><img src={navIcon2} alt="" /></a>
                                <a href="https://www.instagram.com/colegiolasallea/"><img src={navIcon3} alt="" /></a>
                                <a href="https://x.com/lasallelapaz?s=20"><img src={navIcon4} alt="" /></a>
                        </div>*/}
                            <button className="vvd" onClick={() => console.log('conectado')}><Link className="link-nav" to="/login"><span>Login</span></Link></button>
                            
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
