import React from "react";
import { StyledHeaderWrapper , StyledHeaderTitle, StyledHeaderLogo } from "./styled";
import logo from '../../img/Logo-white.png';

export const Header = ({title = "Books", ...props}) => {
    return(
        <StyledHeaderWrapper {...props}>
            <StyledHeaderLogo src = {logo}></StyledHeaderLogo>
            <StyledHeaderTitle>{title}</StyledHeaderTitle>
        </StyledHeaderWrapper>
    )
 
}