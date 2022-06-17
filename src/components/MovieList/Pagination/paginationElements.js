/* 
 * Pagination UI Design using HTML CSS & JavaScript | Fully Functional Pagination Design in JavaScript
 * https://www.youtube.com/watch?v=d2ve7xQNco8&
 */
import styled from 'styled-components';

/* #20b2aa */
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    padding: 2px;
`;

export const UL = styled.ul`
    display: flex;
    background: ${({theme}) => theme.colors.bgLight};
    padding: 2px;
    border-radius: 25px;
`;


export const LI = styled.li`
    color:  ${({theme}) => theme.colors.bgPrimary};
    list-style: none;

    line-height: ${({theme}) => theme.general.lineHeight};
    font-size: ${({theme}) => theme.text.fontSize};
    font-weight: 500;

    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;

    /* Ensimmäiset tai viimeisen valinta */ 
    &.btn {
        padding: 0 20px;
    }

    &.prev {
        border-radius: 25px 5px 5px 25px;
    }

    &.next {
        border-radius: 5px 25px 25px 5px;
    }

    &.numb {
        border-radius: 50%;

        height: 35px;
        width: 35px;

        margin: 0 3px; 
    }

    &.active, 
    &.numb:hover,
    &.btn:hover {
        color: ${({theme})  => theme.colors.bgLight};
    }


    &.active {
        background: ${({theme})  => theme.colors.bgPrimary};
    }

    &.numb:hover,
    &.btn:hover {
        background: ${props => props.theme.bgHover};
    }
`;

