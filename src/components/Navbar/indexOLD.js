import {
    CONTAINER,
    INPUT,
    LABEL, 
    LINK
} from './navbarElements'


const Navbar = ({ user }) => {

    return (
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

    );

};

export default Navbar;