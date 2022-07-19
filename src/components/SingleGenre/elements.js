import styled from 'styled-components';

export const Tooltip = styled.div`

    background-color:  ${({theme}) => theme.colors.bgWhite};;
    color: ${({theme}) => theme.text.txtDefault}; 

    border: 1px solid ${({theme}) => theme.colors.backgroundColor};;

    border-radius: 5px;			
    pointer-events: none;	

    padding: 5px;

    position: absolute;
    opacity: 0;

    & p span {
        margin: 0 5px 0 5px;
    }

    & p:first-of-type {
        font-weight: bolder;
    }

    & p:first-of-type span{
        margin: 0 5px 0 0;
    }
`;