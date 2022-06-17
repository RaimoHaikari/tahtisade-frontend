import styled from "styled-components";

import bgImage from "../../images/tahtisade-kansi_2022_06_05B.png"

export const HeroContainer = styled.div`
    background: ${({theme}) => theme.hero.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 500px;
    position: relative;
    z-index: 1;

    /* tän voi varmaanki poistaa.... 
    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%
            ), 
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%,transparent 100%
        );

        z-index: 2;
    }
    */
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;


    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center center; 

`;


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const HeroH1 = styled.h1`
    color: red;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HeroP = styled.p`

    margin-top: 24px;
    color: yellow;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`;