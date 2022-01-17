import React from "react";
import styled from "styled-components";


export const ControlledTooltip:React.FC<any> = ({show, label, children}) => {

    return (
        <StyledToolTipControled>
            {
                show && 
                <StyledToolTipBox>
                        {label}
                </StyledToolTipBox>

            }
            {
                children
            }
         
        </StyledToolTipControled>
    )
};

const StyledToolTipControled = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        justify-conent: center;

`;

const StyledToolTipBox = styled.div`

    position: absolute;
    // box-shadow: -1.5px 4px 35px rgba(0, 0, 0, 0.15);
    background: red;
    width: 320px;;
    justify-content: center;


`;
