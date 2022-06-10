import styled from 'styled-components';

/* ${({theme}) => theme.startScreen.borderColor}; */
export const TAB = styled.div`
    overflow: hidden;
    border: none;
    background-color: ${({theme}) => theme.colors.backgroundColor};
    padding: 5px 0 0 0;
`;

export const BUTTON = styled.button`

    background-color: ${props => props.active ? props.theme.colors.bgLight : props.theme.colors.bgSecondary};
    float: left;

    border-radius: 5px 5px 0px 0px;
    border: none;
    margin-left: 5px;
    outline: none;

    font-size: ${({theme}) => theme.text.fontSize};
    color:   ${({ active, theme}) => active ? theme.colors.bgPrimary : theme.colors.bgLight};

    cursor: ${({active}) => active ? 'default' : 'pointer'};
    padding: 14px 16px;
    transition: 0.3s;

    &:hover {
        background-color: ${({active, theme}) => active ? theme.bgLight :theme.bgHover};
    }
    
`;

export const CONTAINER = styled.div`
    display: ${({visible}) => visible ? "block" : "none"};
`;