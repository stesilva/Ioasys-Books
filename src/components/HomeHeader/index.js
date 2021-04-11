import React from "react";
import { StyledHeaderWrapper , StyledBookAuthor,  StyledBookTitle,StyledHeaderTitle, StyledHeaderLogo, StyledWelcomeWrapper, StyledWelcomeText, StyledLogout, StyledListWrapper, StyledCard, StyledPlaceholder, StyledBookImage, StyledBookDescription, StyledPagination, StyledPagesCount, StyledPrevPage, StyledNextPag } from "./styled";
import logo from '../../img/Logo-black.png';
import bookImage from '../../img/Book1.png';

export const HomeHeader = ({title = "Books", ...props}) => {
    return(
        <StyledHeaderWrapper {...props}>
            <StyledHeaderLogo src = {logo}></StyledHeaderLogo>
            <StyledHeaderTitle>{title}</StyledHeaderTitle>
            <StyledWelcomeWrapper>
                <StyledWelcomeText>Bem Vindo,Guilherme!</StyledWelcomeText>
                <StyledLogout>[→</StyledLogout>
            </StyledWelcomeWrapper>
            <StyledListWrapper>
                <StyledCard>
                    <StyledPlaceholder>
                        <StyledBookImage src = {bookImage}></StyledBookImage>
                    </StyledPlaceholder>
                    <StyledBookTitle>Crossing the Chasm</StyledBookTitle>
                    <StyledBookAuthor>Geoffrey A. Moore</StyledBookAuthor>
                    <StyledBookDescription>150 páginas Editora Loyola Publicado em 2020</StyledBookDescription>
                </StyledCard>
            </StyledListWrapper>
            <StyledPagination>
                <StyledPagesCount>Página 1 de 100</StyledPagesCount>
                <StyledPrevPage>{'<'}</StyledPrevPage>
                <StyledNextPag>{'>'}</StyledNextPag>
            </StyledPagination>
        </StyledHeaderWrapper>
    )
 
}