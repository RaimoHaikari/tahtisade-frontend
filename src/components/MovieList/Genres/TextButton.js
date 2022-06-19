import styled from "styled-components";

export const CONTAINER = styled.div`
    
    background-color: ${({theme}) => theme.toolbar.backgroundColor};
    padding: 5px;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${({theme}) => theme.breakPoints.md}){
        flex-direction: row;
    }

`;

const Button = styled.button`
    border: none;
    background-color: inherit;
    padding: 2px;
    font-size: ${({theme}) => theme.text.fontSize};
    margin-right: 10px;

    text-align: left;

    cursor: pointer;
    display: block;

    &:hover {
        color: ${({theme}) => theme.toolbar.txtHover};
        cursor: default;
    }

    /*
    &:after {
        content: "I";
        margin-left: 10px;
    }
    */
`;

const TextButton = ({ buttons }) => {

    return (
        <CONTAINER>
        {
            buttons.map((btn, index) => {
                return (
                    <Button
                        key={index}
                        onClick={() => btn.clickHanler()}
                    >
                        {btn.title}
                    </Button>
                )
            })
        }
        </CONTAINER>
    )
}

export default TextButton;