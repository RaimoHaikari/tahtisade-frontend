import styled from 'styled-components';


export const Container = styled.div`
    background: ${({ theme }) => theme.colors.backgroundColor};
`;

/*
 * L U E T T E L O T
 *
 * - E L O K U V A T
 * - G E N R E T
 * - A R V O S T E L I J A T
 */
export const PaginationAndSearch = styled.div`

    padding-top: ${({theme}) => theme.navbar.height};
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;

    display: flex;

    & .paginationContainer {
        margin-right: auto;
    }
`;


export const ContentWrap = styled.div`

    color: ${({ theme }) => theme.colors.txtDefault};
    display: flex;

    padding: 10px 2px 48px 2px;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`;


export const Main = styled.main`
    margin: 2px;
    background-color: ${({ theme }) => theme.colors.bgLight};
    flex: 4;
`;

export const Aside = styled.aside`
    margin: 2px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    flex: 1;

    @media screen and (max-width: 800px){
        flex-direction: column;
        order: -1;
    }
`;