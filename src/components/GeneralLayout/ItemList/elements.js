import styled from 'styled-components';


export const Container = styled.div`
    background: ${({ theme }) => theme.colors.backgroundColor};
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