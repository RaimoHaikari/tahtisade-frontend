import styled from 'styled-components';

export const CONTAINER = styled.div`
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.text.txtDefault};
    background-color: ${({theme}) => theme.colors.bgLight};
`;