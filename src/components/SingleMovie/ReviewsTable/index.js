import styled from 'styled-components';

import {
    BsFillStarFill,
    BsStarHalf
} from "react-icons/bs";

const LINKKI = styled.a`
    background-color:  ${props => props.backgroundColor};
    color: ${props => props.color};
    text-decoration: none;
    padding: 0;
    margin: 0;
    position: relative;
    display: inline-block;
    border-radius: 2px;
`;

const visualizeStars = (avg) => {

    let val = [];

    for(let i = 0; i < Math.floor(avg); i ++)
        val.push(<BsFillStarFill />);

    if(avg % 1 >= 0.5)
        val.push(<BsStarHalf />);

    return val;
};

const getSourceLink = (title, to) => {
    return (
        <LINKKI
            target="_blank"
            href={to}
        >
            {title}
        </LINKKI>
    )
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getSourceLink,
    visualizeStars
}