import styled from "styled-components";

import { Link } from "react-router-dom";

export const CONTAINER = styled.div`

    position: relative;

    header {
        position: relative;
        top: 0;
        width: 100%;
        padding: 30px 100px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .logo {
        position: relative;
        color: red;
        font-size: 30px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
    }


    @media screen and (max-width: 960px){
  
        header .navigation {
          display: none;
        }
      
        header .logo {
          position: absolute;
          bottom: -6px;
        }
      
    }
`

export const LINK = styled(Link)`
    color: #000;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 2px 15px;
    border-radius: 20px;

    transition: 0.3s;
    transition-property: background;

    :hover {
        background: white;
    }
`;

export const LABEL = styled.label`

    display: none;

    @media screen and (max-width: 960px){

        display: block;

        font-size: 25px;
        cursor: pointer;
        transition: 0.3s;
        transition-property: color;

        i {
            position: absolute;
        }


        .btn-close {
            display: none;
        }

        :hover {
            color: #fff;
        }
    }
`;

export const INPUT = styled.input`
    
    z-index: 3;
    display: none;

    @media screen and (max-width: 960px){

        :checked ~ header .navigation {
            z-index: 2;
            position: fixed;

            background: rgba(114, 223, 255, 0.95);

            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        :checked ~ header .navigation a {
            font-weight: 700;
            margin-right: 0;
            margin-bottom: 50px;
            letter-spacing: 5px;
        }

        :checked ~ header .btn-open {
            display: none;
        }

        :checked ~ header .btn-close {
            z-index: 2;
            display:block;
            position: fixed;
        }
    }
`;