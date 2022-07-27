import styled from 'styled-components';

export const CONTAINER = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.bgLight};

    & > div {
        padding: 5px;
    }

`;