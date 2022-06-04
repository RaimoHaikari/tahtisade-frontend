import styled from "styled-components";

import myImage from "../../images/tahtisade-kansi.png"

//background-image: url(images/tahtisade-kansi.png);


export const CONTAINER = styled.div`

    text-align: center;
    padding: 15em 0;

    min-height: 80vh;
    border: 1px solid red;

    background-image: url(${myImage});
  
    background-position: center center;
    background-repeat: no-repeat;

    h1.primaryTitle {
        font-size: ${props => props.theme.frontpage.primaryTitle_FontSize};
    }
`;