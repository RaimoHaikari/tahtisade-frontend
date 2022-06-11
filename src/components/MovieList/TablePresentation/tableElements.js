import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const TABLE = styled.table`
    border-collapse: collapse; 

    width: 100%; 
    table-layout: auto; 
    font-size: 1em;

    /* border-radius: 5px 5px 0 0; */
    overflow: hidden;
`;

/*
background-color: ${props => props.theme.bgLight}; 
 */
export const THEAD = styled.thead`

    & > tr {
        background-color: ${({ theme }) => theme.colors.bgLight};
    }
    
`;

/*
content: '${props => props.icon }';
*/
export const TH = styled.th`
    display: table-cell;
    padding: 5px;
    text-align: left;

    color: ${({sortingField, theme}) => sortingField ? theme.text.txtActive : theme.text.txtDefault};;
    cursor: ${({sortable}) => sortable ? "pointer" : "default"};

    &:before {
        display: none;
    }

    @media screen and (max-width: ${({theme}) => theme.breakPoints.md}){
        display:none;
    }
`;


export const TBODY = styled.tbody``;

export const TR = styled.tr`

    border-bottom: 1px solid #dddddd;

    &.linkToDetails {
        cursor: pointer;
    }

    &:nth-of-type(even) {
        background-color: ${({theme}) => theme.bgSecondary};
    }

    &:last-of-type {
        border-bottom: 2px solid #009879;
    }
`;

/*
 #f3f3f3
 * https://stackoverflow.com/questions/46339034/how-to-render-pseudo-before-content-dynamically-in-styled-component
 */
 export const TD = styled.td`

    /* border: solid 1px #ccc; */
    display: table-cell;
    padding: 4px;
    text-align: left;

    &:before {
        display: none;
    }

    @media screen and (max-width: ${({theme}) => theme.breakPoints.md}){

        display:block;

        &:first-child {
            padding-top: .5em;
        }

        &:last-child {
            padding-bottom: .5em;
        }

        &:before {
            content: '${({before}) => before }';
            font-weight: bold;
            width: 6.5em;
            display: inline-block;
            
        }
    }
`;


