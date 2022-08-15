import {FaBars} from 'react-icons/fa';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavBtnText
} from './navbarElements';

import { IconContext } from 'react-icons';
import { Logo } from './logo';

/*

*/
const Navbar = ({ toggle,user }) => {

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            
                <Nav>
                    <NavbarContainer>

                        <NavLogo  to="/">
                            <Logo />
                        </NavLogo>

                        <MobileIcon
                            onClick={toggle}
                        >
                            <FaBars />
                        </MobileIcon>

                        <NavMenu>

                            <NavItem>
                                <NavLinks to="/elokuvat">Elokuvat</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/kriitikot">Kriitikot</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/genret">Genret</NavLinks>
                            </NavItem>
                            {
                                user && <NavItem><NavLinks to="/admin">Hallinta</NavLinks></NavItem>
                            }

                        </NavMenu>

                        {
                            user 
                            ? <NavBtn>
                                <NavBtnText to="/kirjauduUlos">Kirjaudu ulos</NavBtnText>
                              </NavBtn>
                            : <NavBtn>
                                <NavBtnLink to="/kirjaudu">Kirjaudu</NavBtnLink>
                              </NavBtn>
                        }


                    </NavbarContainer>
                </Nav>

            </IconContext.Provider>
        </>
    );

};

export default Navbar;