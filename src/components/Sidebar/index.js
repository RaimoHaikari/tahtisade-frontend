import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarMenu
} from './sidebarElements'

/*
 *
 */
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer
            isOpen={isOpen}
            onClick={toggle}
        >
            <Icon
                onClick={toggle}
            >
                <CloseIcon />
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>
                
                    <SidebarLink to="/">Etusivu</SidebarLink>
                    <SidebarLink to="/elokuvat">Elokuvat</SidebarLink>
                    <SidebarLink to="/kriitikot">Kriitikot</SidebarLink>
                    <SidebarLink to="/genret">Genret</SidebarLink>

                    <SideBtnWrap>
                        <SidebarRoute to="/login">Kirjaudu</SidebarRoute>
                    </SideBtnWrap>

                </SidebarMenu>

            </SidebarWrapper>

        </SidebarContainer>
    );
};

export default Sidebar;