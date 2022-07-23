import styled from 'styled-components';

export const CONTAINER = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.toolbar.backgroundColor};

    & > div {
        padding: 5px;
    }

    & > div.listWrapper {

        max-height: 400px;
        overflow-y: auto;
    }
`;


export const CARD = styled.div`

    color: ${({theme}) => theme.text.txtDefault};

    padding: 2px;
    margin-bottom: 5px;
    border-bottom: 1px dotted  ${({theme}) => theme.colors.bgSecondary};;

    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.bgPrimary};
        color:  ${({theme}) => theme.text.txtWhite};
    }

    &.active {
        background-color: ${({theme}) => theme.colors.bgSecondary};
        color: ${({theme}) => theme.text.txtDefault};
        cursor: default;
    }

    & P {
        padding: 5px 0;
    }
`;
