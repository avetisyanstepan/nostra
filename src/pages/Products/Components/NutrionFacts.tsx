import React, { useState } from "react";
import styled from "styled-components";
// import { ControlledTooltip } from "../../../shared/components/ControlledTooltip";
import { Tooltip } from "../../../shared/components/ToolTip";



export const NutrionFacts:React.FC <any> = ({prod}) => {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <StyledDiv 
            onClick={() => setShowTooltip(!showTooltip)}
        >
            <Tooltip label={prod.desc}>
                <StyledImg src={prod.imgUrl} nutrionFacts={"nutrion"}/>
            </Tooltip>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

`;



const StyledImg = styled.img<any>`


`;