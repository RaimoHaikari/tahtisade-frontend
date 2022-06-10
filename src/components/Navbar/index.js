import {FaBars} from 'react-icons/fa'

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './navbarElements'

/*

*/
const Navbar = ({ toggle,user }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>

                    <NavLogo  to="/">
                        Tähtisadetta
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

                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/kirjaudu">Kirjaudu</NavBtnLink>
                    </NavBtn>


                </NavbarContainer>
            </Nav>
        </>
    );

};
/*
<CONTAINER>

            <INPUT 
                type="checkbox"
                id="check"
            />

            <header>
            
                <h2><a href='#' className='logo'>Logo</a></h2>

                <div className='navigation'>
                    <LINK to="/">Etusivu</LINK>
                    <LINK to="/elokuvat">Elokuvat</LINK>
                    <LINK to="/kriitikot">Kriitikot</LINK>
                    <LINK to="/genret">Genret</LINK>
                    {
                        user
                        ? <em>{user} logged in</em>
                        : <LINK to="/login">Kirjaudu</LINK>
                    }            
                </div>

                <LABEL for="check" className='menuButtons'>
                    <i className="btn-open">o</i>
                    <i className="btn-close">x</i>
                </LABEL>
                
            </header>    

        </CONTAINER>
*/

export default Navbar;