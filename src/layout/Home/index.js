import React from   'react';
import { HomeHeader } from '../../components/HomeHeader';
import { StyledHomeWrapper } from './styled';

export const Home = () => {
    return(
        <StyledHomeWrapper>
            <HomeHeader></HomeHeader>
        </StyledHomeWrapper>
    );
}